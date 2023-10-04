import { Children } from "react";

const Image = (props: any) => {
  return (
    <div className="my-4">
      <img {...props} />
    </div>
  );
};

export default Image;
