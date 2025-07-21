import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaServer, FaTimes } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router";

const Project = ({ project }) => {
  const {
    title,
    image,
    description,
    features = [],
    technologies = [],
    details = {},
  } = project || {};

  const {
    liveLink,
    clientRepo,
    serverRepo,
    techStack = [],
    longDescription = "",
    challenges = "",
    improvements = "",
  } = details || {};

  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const hoverShadow = "0 12px 32px rgba(0,0,0,0.6)";

  return (
    <>
      <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02}>
        <motion.article
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          whileHover={{ scale: 1.02, boxShadow: hoverShadow }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="group relative bg-white/10 dark:bg-white/5 backdrop-blur-lg rounded-2xl shadow-lg border border-white/20 transition-all duration-300 p-4 sm:p-6 flex flex-col lg:flex-row gap-4 sm:gap-6 items-center w-full"
        >
          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="w-full lg:w-1/2 overflow-hidden rounded-xl"
          >
            <motion.img
              src={image}
              alt={title}
              className="w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={contentVariants}
            className="w-full lg:w-1/2 text-left"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </h2>

            {description && (
              <p className="text-white text-sm sm:text-base mb-3">{description}</p>
            )}

            {features.length > 0 && (
              <ul className="list-disc list-inside text-white text-sm sm:text-base mb-3">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            )}

            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="badge badge-outline badge-accent text-xs sm:text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {liveLink && (
                <Link
                  to={liveLink}
                  target="_blank"
                  className="btn btn-primary btn-sm flex items-center gap-1"
                >
                  Live <FaExternalLinkAlt />
                </Link>
              )}
              {clientRepo && (
                <Link
                  to={clientRepo}
                  target="_blank"
                  className="btn btn-outline btn-sm flex items-center gap-1"
                >
                  Client <FaGithub />
                </Link>
              )}
              {serverRepo && (
                <Link
                  to={serverRepo}
                  target="_blank"
                  className="btn btn-outline btn-sm flex items-center gap-1"
                >
                  Server <FaServer />
                </Link>
              )}
              <button
                onClick={() => setIsOpen(true)}
                className="btn btn-primary btn-sm"
              >
                Details
              </button>
            </div>
          </motion.div>
        </motion.article>
      </Tilt>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center"
          >
            <motion.div
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70"
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative z-10 w-[95%] sm:w-[90%] max-w-3xl max-h-[80vh] overflow-y-auto rounded-2xl bg-base-100 dark:bg-neutral-900 p-4 sm:p-8 text-left shadow-2xl"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-sm btn-circle btn-error absolute top-3 right-3"
              >
                <FaTimes />
              </button>

              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-primary">
                {title} Details
              </h2>

              {longDescription && (
                <p className="mb-6 text-base-content/80 text-sm sm:text-base leading-relaxed">
                  {longDescription}
                </p>
              )}

              {features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-base-content">
                    Key Features
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-base-content/80 text-sm sm:text-base">
                    {features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              )}

              {techStack.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-base-content">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((t, i) => (
                      <span
                        key={i}
                        className="badge badge-outline badge-primary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {challenges && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2 text-base-content">
                    Challenges
                  </h3>
                  <p className="text-base-content/80 whitespace-pre-line">
                    {challenges}
                  </p>
                </div>
              )}

              {improvements && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-2 text-base-content">
                    Improvements
                  </h3>
                  <p className="text-base-content/80 whitespace-pre-line">
                    {improvements}
                  </p>
                </div>
              )}

              {/* Links */}
              <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                {liveLink && (
                  <Link
                    to={liveLink}
                    target="_blank"
                    className="btn btn-primary btn-sm flex items-center gap-1"
                  >
                    Live <FaExternalLinkAlt />
                  </Link>
                )}
                {clientRepo && (
                  <Link
                    to={clientRepo}
                    target="_blank"
                    className="btn btn-outline btn-sm flex items-center gap-1"
                  >
                    Client <FaGithub />
                  </Link>
                )}
                {serverRepo && (
                  <Link
                    to={serverRepo}
                    target="_blank"
                    className="btn btn-outline btn-sm flex items-center gap-1"
                  >
                    Server <FaServer />
                  </Link>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
