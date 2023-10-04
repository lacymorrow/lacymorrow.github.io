import { cn } from "@/lib/utils";
import { Children } from "react";

const ThickText = ({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) => {
  return <p className={cn("text-xl font-bold", className)}>{children}</p>;
};

export default ThickText;
