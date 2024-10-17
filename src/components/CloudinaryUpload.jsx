import React, { useState } from "react";
import { FilePond } from "react-filepond";
import { Cloudinary } from "@cloudinary/url-gen";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { cloudName, uploadPreset } from "../cloudinary/config";
import { useGameContext } from "../hooks/useContext";
import "filepond/dist/filepond.min.css";

export function CloudinaryUpload() {
  const [image, setImage] = useState("");

  const baseUrl = `https://api.cloudinary.com/v1_1/${cloudName}`;
  const { setPlayerPicture } = useGameContext();
  const process = (
    fieldName,
    file,
    metadata,
    load,
    error,
    progress,
    abort,
    transfer,
    options
  ) => {
    const abortRequest = makeUploadRequest({
      file,
      fieldName,
      successCallback: load,
      errorCallback: error,
      progressCallback: progress,
    });

    return {
      abort: () => {
        abortRequest();
        abort();
      },
    };
  };

  const makeUploadRequest = ({
    file,
    fieldName,
    progressCallback,
    successCallback,
    errorCallback,
  }) => {
    const url = `${baseUrl}/image/upload`;

    const formData = new FormData();
    formData.append(fieldName, file);
    formData.append("upload_preset", uploadPreset);
    formData.append("timestamp", Date.now() / 1000);
    formData.append("file", file); // TODO: Change to image only

    const request = new XMLHttpRequest();
    request.open("POST", url);

    request.upload.onprogress = (e) => {
      progressCallback(e.lengthComputable, e.loaded, e.total);
    };

    request.onload = () => {
      if (request.status >= 200 && request.status < 300) {
        const { delete_token: deleteToken, secure_url: cloudinary_url } =
          JSON.parse(request.response);
        console.log(cloudinary_url);
        setPlayerPicture(cloudinary_url);
        successCallback(deleteToken);
      } else {
        errorCallback(request.responseText);
      }
    };
    request.send(formData);

    return () => {
      request.abort();
    };
  };

  const makeDeleteRequest = ({ token, successCallback, errorCallback }) => {
    const url = `${baseUrl}/delete_by_token`;

    const request = new XMLHttpRequest();
    request.open("POST", url);

    request.setRequestHeader("Content-Type", "application/json");

    request.onload = () => {
      if (request.status >= 200 && request.status < 300) {
        successCallback();
      } else {
        errorCallback(request.responseText);
      }
    };
    request.send(JSON.stringify({ token }));
  };

  const revert = (token, successCallback, errorCallback) => {
    makeDeleteRequest({
      token,
      successCallback,
      errorCallback,
    });
  };

  return (
    <FilePond
      files={image}
      onupdatefiles={setImage}
      maxFiles={1}
      server={{ process, revert }}
      name="image"
    />
  );
}
