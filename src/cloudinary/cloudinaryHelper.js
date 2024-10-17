import { cloudName, uploadPreset } from "./config";

const baseUrl = `https://api.cloudinary.com/v1_1/${cloudName}`;
console.log(cloudName);

export const makeUploadRequest = ({
  file,
  fieldName,
  progressCallback,
  successCallback,
  errorCallback,
}) => {
  const url = `${baseUrl}/image/upload`;

  const formData = new FormData();
  console.log(fieldName, file);
  formData.append(fieldName, file);
  formData.append("upload_preset", uploadPreset);
  formData.append("timestamp", Date.now() / 1000);
  formData.append("file", file);

  const request = new XMLHttpRequest();
  request.open("POST", url);

  request.upload.onprogress = (e) => {
    progressCallback(e.lengthComputable, e.loaded, e.total);
  };

  request.onload = () => {
    if (request.status >= 200 && request.status < 300) {
      const { delete_token: deleteToken } = JSON.parse(request.response);

      successCallback(deleteToken);
    } else {
      errorCallback(request.responseText);
    }
  };
  console.log(formData.entries());
  request.send(formData);

  return () => {
    request.abort();
  };
};

export const makeDeleteRequest = ({
  token,
  successCallback,
  errorCallback,
}) => {
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

export const process = (
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
export const revert = (token, successCallback, errorCallback) => {
  makeDeleteRequest({
    token,
    successCallback,
    errorCallback,
  });
};
