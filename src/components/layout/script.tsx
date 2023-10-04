import React, { useEffect } from "react";

const ScriptComponent = ({ src }: { src: string }) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = src;
    script.async = true;

    document.body.appendChild(script);

    // This is important to clean up on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <></>;
};

export default ScriptComponent;
