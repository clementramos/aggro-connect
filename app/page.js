"use client";
import Accueil from "@/components/Accueil";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 right-0 -left-[100%] h-2 bg-orange-aggro z-50 origin[0%]"
        style={{ scaleX: scrollYProgress }}
      />
      <Accueil />
    </>
  );
}
