import { useContext, useEffect } from "react";
import { useMotionValue } from "framer-motion";

import ModelsContext from "./ModelsContext";

export default function useWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext);

  const scrollY = useMotionValue(0);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const element = wrapperRef.current;

    if(element) {
      const updatedScrollValue = () => {
        const {scrollTop, scrollHeight, offsetHeight } = element;

        const fullScroll = scrollHeight - offsetHeight;

        scrollY.set(scrollTop);
        scrollYProgress.set(scrollTop / fullScroll);
      }

      element.addEventListener('scroll', updatedScrollValue);

      return () => element.removeEventListener('scroll', updatedScrollValue);
    }
  },[wrapperRef, scrollYProgress, scrollY]);

  return {scrollY, scrollYProgress};
}