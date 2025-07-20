import React, { useRef, useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { motion, useInView } from "framer-motion";

const AnimatedGitHubContributionChart = () => {
  const wrapRef = useRef(null);
  const inView = useInView(wrapRef, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState(null);
  const [blockSize, setBlockSize] = useState(15);

  // Responsive block size based on screen width
  useEffect(() => {
    const updateBlockSize = () => {
      if (window.innerWidth < 640) {
        setBlockSize(10); // small devices
      } else if (window.innerWidth < 1024) {
        setBlockSize(12); // tablets
      } else {
        setBlockSize(15); // desktop
      }
    };
    updateBlockSize();
    window.addEventListener("resize", updateBlockSize);
    return () => window.removeEventListener("resize", updateBlockSize);
  }, []);

  // Click effect
  useEffect(() => {
    if (!wrapRef.current) return;
    const svgRoot = wrapRef.current.querySelector("svg");
    if (!svgRoot) return;

    function handleRectClick(e) {
      const rect = e.target;
      if (rect.getAttribute("data-level") === "0") return;

      rect.classList.remove("gh-clicked");
      void rect.offsetWidth; // re-trigger animation
      rect.classList.add("gh-clicked");
    }

    const rects = svgRoot.querySelectorAll("rect[data-level]");
    rects.forEach((r) => r.addEventListener("click", handleRectClick));
    return () => rects.forEach((r) => r.removeEventListener("click", handleRectClick));
  }, [inView]);

  const handleDayClick = (value) => {
    if (!value || value.count === 0) return;
    setSelected(value);
  };

  return (
    <section
      ref={wrapRef}
      className="my-10 mx-auto max-w-full text-center px-2 sm:px-4"
    >
      <h2 className="text-3xl font-bold mb-8">GitHub Contributions</h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center overflow-x-auto"
      >
        <div className="transition-transform duration-300 hover:scale-105 w-fit">
          <GitHubCalendar
            username="rjriajul1"
            blockSize={blockSize}
            blockMargin={4}
            fontSize={12}
            color="#22c55e"
            showWeekdayLabels
            onClick={handleDayClick}
            className="react-activity-calendar"
          />
        </div>
      </motion.div>

      {selected && (
        <motion.div
          key={selected.date.toISOString()}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 250, damping: 15 }}
          className="mt-4 inline-block rounded-lg border border-green-500 bg-green-50 px-4 py-2 text-sm dark:bg-green-900/20"
        >
          <strong>{selected.date.toISOString().slice(0, 10)}</strong>:{" "}
          {selected.count} contribution{selected.count === 1 ? "" : "s"}
        </motion.div>
      )}

      <style>{`
        .react-activity-calendar rect[data-level] {
          transition: transform 0.15s ease, stroke 0.15s ease;
          transform-origin: center;
        }
        .react-activity-calendar rect[data-level="0"] {
          cursor: default;
          opacity: 0.35;
        }
        .react-activity-calendar rect[data-level]:not([data-level="0"]) {
          cursor: pointer;
        }
        .react-activity-calendar rect[data-level]:not([data-level="0"]):hover {
          transform: scale(1.25);
          stroke: rgb(34 197 94);
          stroke-width: 1;
        }
        .react-activity-calendar rect.gh-clicked {
          animation: gh-pulse 0.35s ease-out;
          stroke: rgb(34 197 94);
          stroke-width: 2;
        }
        @keyframes gh-pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.6); }
          100% { transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default AnimatedGitHubContributionChart;
