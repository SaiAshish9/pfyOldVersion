import React from "react";

export default function DataLayout({ isData, img, head, icon, content }) {
  return (
    <>
      <div className="user-data-main-block">
        <div
          className="user-data-block"
          style={{
            alignItems: isData ? "initial" : "center",
          }}
        >
          {img}
          <h2 className="user-data-head">{head}</h2>
          {icon}
          {content}
        </div>
      </div>
    </>
  );
}
