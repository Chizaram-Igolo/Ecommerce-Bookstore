import React from "react";

export default function BreadCrumb() {
  return (
    <div className="pt-6 pb-2 text-[15px]">
      <a href="/" className="underline mr-2">
        Home
      </a>
      <span className="text-gray-400">/</span>
      <a className="ml-2 text-gray-400">Categories</a>
    </div>
  );
}
