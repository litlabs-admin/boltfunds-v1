import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedHeroProps {
  titles: string[];
  interval?: number;
}

function AnimatedHeroText({ titles, interval = 2000 }: AnimatedHeroProps) {
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, interval);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles, interval]);

  return (
    <span className="relative inline-flex justify-center overflow-hidden">
      {titles.map((title, index) => (
        <motion.span
          key={index}
          className="absolute font-heading text-secondary"
          initial={{ opacity: 0, y: -100 }}
          transition={{ type: "spring", stiffness: 50 }}
          animate={
            titleNumber === index
              ? { y: 0, opacity: 1 }
              : { y: titleNumber > index ? -150 : 150, opacity: 0 }
          }
        >
          {title}
        </motion.span>
      ))}
    </span>
  );
}

export { AnimatedHeroText };
