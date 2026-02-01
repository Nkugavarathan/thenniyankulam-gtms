import { useState,useEffect, useRef} from "react";
import { motion ,useInView} from "framer-motion";
export function Counter({ value, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let startTime = null;
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const current = Math.min(
        Math.floor((progress / (duration * 1000)) * value),
        value
      );
      setCount(current);
      if (current < value) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
