import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TextScroll {
  paragraph?: string;
  children?: string;
}

export const TextScroll = ({ paragraph = "" }: TextScroll) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start -0.34"],
  });

  const words = paragraph.split(" ");

  return (
    <>
      <p
        ref={element}
        className="mx-4 flex flex-wrap gap-x-2 md:gap-x-3 lg:w-[60vw]"
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;

          return (
            <Word key={i} progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
          );
        })}
      </p>
    </>
  );
};

interface WordProps {
  children: string;
  progress: any;
  range: any;
}

const Word = ({ children, progress, range }: WordProps) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span>
      {children.split("").map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;
        console.log(start);

        return (
          <Char key={i} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span className="absolute font-fkgroteskthin text-[20px] leading-fit tracking-regular text-white opacity-20 md:text-[50px]">
        {children}
      </span>
      <motion.span
        className="font-fkgroteskthin text-[20px] leading-fit tracking-regular text-white md:text-[50px]"
        style={{ opacity: opacity }}
      >
        {children}
      </motion.span>
    </span>
  );
};
