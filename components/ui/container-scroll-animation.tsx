"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

// Move Header and Card above ContainerScroll to ensure they are defined before use.
// Providing proper types for props to ensure TypeScript recognizes children correctly.

// Fix: Relaxing motion value types to any to avoid complex inference errors
export const Header = ({ translate, titleComponent }: { translate: any; titleComponent: string | React.ReactNode }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

// Fix: Making children optional to resolve the issue where the compiler incorrectly reports it as missing in the JSX usage
export const Card = ({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: any;
  scale: any;
  translate: any;
  children?: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY: translate,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[25rem] md:h-[35rem] w-full border-4 border-[#1e293b] p-2 md:p-6 bg-[#0f172a] rounded-[30px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-slate-900 md:rounded-2xl md:p-4">
        {children}
      </div>
    </motion.div>
  );
};

// Fix: Making children optional to resolve the issue where the compiler incorrectly reports it as missing in the JSX usage
export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children?: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.5], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  return (
    <div
      className="h-[40rem] md:h-[60rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};