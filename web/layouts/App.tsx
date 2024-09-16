// import { motion } from "framer-motion";

export default function App() {
  return (
    <>
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
            {/* <motion.p
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
              ikeandrie-web
            </motion.p> */}
            <p className="text-2xl text-white">ikeandrie</p>
          </div>
        ),
      )}
    </>
  );
}
