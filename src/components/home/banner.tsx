import "@/styles/home.css";
import { UpdateIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { useState } from "react";
const Banner = () => {
  const [index, setIndex] = useState(2);
  const handleChange = () => {
    setIndex(index + 1);
    if (index === 3) {
      setIndex(0);
    }
  };

  return (
    <div className="card-holder mx-auto p-8 text-center text-xl antialiased">
      <div className={`card bg-${index}`}>
        <a
          href="https://github.com/lacymorrow"
          className="animated header-img tada mx-auto my-4 inline-block"
        >
          <Image
            src="https://s.gravatar.com/avatar/736b40590816c014f11aefb0072ce82c?s=300"
            width="150"
            height="150"
            alt="Lacy Morrow"
          />
        </a>

        <div className="p-6 leading-relaxed">
          <div className="content text-4xl font-bold">
            <p>
              I'm{" "}
              <span className="color-transition text-7xl font-bold">
                Lacy Morrow
              </span>
              &nbsp;👋 &nbsp;
            </p>

            <p className="text-4xl font-bold">
              Maker of{" "}
              <a className="color-transition" href="/work/clients">
                software
              </a>
              ,{" "}
              <a className="color-transition" href="/work">
                drones
              </a>
              , and{" "}
              <a className="color-transition" href="/work">
                IoT devices
              </a>
            </p>
          </div>

          <div className="mx-auto mt-8 flex w-1/2 items-center justify-evenly text-8xl">
            <a href="/work/clients" className="slide-in animated hinge">
              Work
            </a>
            <button type="button" onClick={handleChange} className="random">
              <span className="sr-only">Change Background</span>
              <UpdateIcon />
            </button>
            <a href="/play/crossover" className="slide-in animated hinge">
              Play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
