
import { motion } from "framer-motion";
import { useState ,useEffect} from "react";

export const TypewriterText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [startTyping, setStartTyping] = useState(false);

  const handleInView = () => {
    if (!startTyping) setStartTyping(true);
  };

  useEffect(() => {
    if (!startTyping) return;

    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1); // ✅ safer
      }, 20);

      return () => clearTimeout(timeout);
    } else {
      setDone(true);
    }
  }, [index, startTyping, text]);

  return (
    <motion.p
      onViewportEnter={handleInView}
      viewport={{ once: true }}
      className={className}
    >
      {displayText}
      {!done && startTyping && <span className="animate-pulse">|</span>}
    </motion.p>
  );
};
