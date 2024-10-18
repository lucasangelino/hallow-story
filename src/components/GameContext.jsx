import { useEffect, useState } from "react";

export const GameContext = ({ children, isOpen }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <section
        className="absolute bottom-0 right-0 bg-slate-300 h-screen p-4 
                          bg-[url('/images/drawerbackground.avif')] w-96"
      >
        {children}
      </section>
    </>
  );
};
