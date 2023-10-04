import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Children } from "react";

const GithubLink = ({ href }: { href: string }) => {
  return (
    <a href={href} className="m-1 inline-flex">
      <GitHubLogoIcon className="h-6 w-6" />
    </a>
  );
};

export default GithubLink;
