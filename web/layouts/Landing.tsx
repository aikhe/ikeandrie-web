import { useEffect } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";

import GradientText from "./pages/gradient-text";

export default function Landing() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <div className="bg-black">
        <GradientText />
      </div>
      {[...Array(4)].map((_, index) =>
        index % 2 === 0 ? (
          <div
            key={index}
            className="flex h-[100svh] w-full items-center justify-center"
          >
            <p className="text-2xl">ikeandrie</p>
          </div>
        ) : (
          <div
            key={index}
            className="flex h-[100svh] w-full items-center justify-center bg-black"
          >
            <motion.p
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="text-2xl text-white"
            >
              ikeandrie
            </motion.p>
            <p className="text-2xl text-white">ikeandrie</p>
          </div>
        ),
      )}
    </>
  );
}
