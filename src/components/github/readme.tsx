import React, { useState, useEffect } from "react";
import { parse } from "marked";
import { Callout } from "nextra/components";
import { GitHubReadme } from "react-github-readme-md";

import "@/styles/github.css";
import Link from "next/link";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const Readme: React.FC<{ username: string; repo: string }> = ({
  username,
  repo,
}) => {
  return (
    <>
      <Callout
        type="info"
        emoji={
          <div className="flex h-full items-center">
            <InfoCircledIcon />
          </div>
        }
      >
        <div className="text-xs">
          The following is content from the README.md file of the {repo}{" "}
          <Link
            href={`https://github.com/${username}/${repo}`}
            target="_blank"
            rel="noreferrer"
            className="nx-text-primary-600 nx-underline nx-decoration-from-font [text-underline-position:from-font]"
          >
            GitHub Repository ↗
          </Link>
          .
        </div>
      </Callout>
      <GitHubReadme username={username} repo={repo} className="mt-6" />
    </>
  );
};

export default Readme;
