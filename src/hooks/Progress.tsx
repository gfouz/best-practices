import { motion, useScroll, useSpring } from "framer-motion";

export default function Progress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  console.log( scaleX );
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <h1>
        <code>useScroll</code> with spring smoothing
      </h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
        repellat illum veniam, rem quo et optio assumenda vitae nulla vero sunt
        asperiores dolorum odio eos incidunt aliquam? Eum, quibusdam delectus.
      </p>
    </>
  );
}
