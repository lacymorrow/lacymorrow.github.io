import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  SpeakerLoudIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { FacebookIcon, SpeakerIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import LastFmIcon from "../images/lastfm-icon";

type Props = {};

export const Socials = (props: Props) => {
  return (
    <div className="flex items-center justify-start">
      <Link className="p-2" href="https://www.last.fm/user/gojukebox00">
        <SpeakerLoudIcon />
        <span className="sr-only">Last.fm</span>
      </Link>
      <Link className="p-2" href="https://twitter.com/lacybuilds">
        <TwitterLogoIcon />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link className="p-2" href="https://instagram.com/goseethings">
        <InstagramLogoIcon />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link className="p-2" href="https://www.linkedin.com/in/lacymorrow/">
        <LinkedInLogoIcon />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link className="p-2" href="https://www.facebook.com/lacy.morrow">
        <FacebookIcon className="h-4 w-4" />
        <span className="sr-only">Facebook</span>
      </Link>
    </div>
  );
};

export default Socials;
