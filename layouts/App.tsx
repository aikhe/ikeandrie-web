import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="w-full h-[100svh] flex items-center justify-center">
      <motion.p
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
        className="text-2xl"
      >
        ikeandrie-web
      </motion.p>
    </div>
  );
}
