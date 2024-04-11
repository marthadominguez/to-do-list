import React from "react";

export const Footer = () => {
  return (
    <div className="flex justify-center items-center pb-4 absolute inset-x-0 bottom-0 text-slate-500">
      <p>Martha L. Domínguez</p>
      <p className="px-2">|</p>
      <a
        target="_blank"
        rel="noreferrer"
        className="px-1 text-xl"
        href="https://www.linkedin.com/in/marthaldominguez/"
      >
          <span className="iconify" data-icon="akar-icons:linkedin-fill"></span>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        className="px-1 text-xl"
        href="https://github.com/marthadominguez"
      >
         <span className="iconify" data-icon="akar-icons:github-fill"></span>
      </a>
    </div>
  );
};
