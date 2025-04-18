import React from "react";

const OldApp = () => {
  return (
    <div style={{ height: "100vh", border: "none" }}>
      <iframe
        title="Legacy App"
        src="/coffee/index.html"
        style={{
          width: "100%",
          height: "100%",
          border: "none"
        }}
      />
    </div>
  );
};

export default OldApp;
