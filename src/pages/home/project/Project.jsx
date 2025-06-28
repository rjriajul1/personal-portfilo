import React from "react";
import { Link } from "react-router";
import Modal from "react-modal";
const Project = ({ project }) => {
  const { title, image, technologies, features, description, details } =
    project || {};

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  //   Modal.setAppElement("#yourAppElement");
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="hero bg-primary rounded-2xl ">
      <div className="hero-content flex-col gap-8 lg:flex-row">
        <img
          src={image}
          className=" md:max-w-[500px]  mx-auto rounded-2xl shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{title}</h1>
          <p className="py-6">{description}</p>

          {features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}

          <div className="flex gap-6 flex-wrap py-6">
            {technologies?.map((tech, index) => (
              <button key={index} className="btn btn-accent text-white">
                {tech}
              </button>
            ))}
          </div>

          <div className="flex gap-6 flex-wrap">
            <Link to={details.liveLink} target="_blank">
              <button className="btn  text-black btn-primary">live</button>
            </Link>
            <Link to={details.clientRepo} target="_blank">
              <button className="btn  text-black btn-primary">
                Client side
              </button>
            </Link>
            <Link to={details?.serverRepo} target="_blank">
              <button className="btn  text-black btn-primary">
                Server Side
              </button>
            </Link>
            <button onClick={openModal} className="btn  text-black btn-primary">
              Details
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 className="text-2xl font-bold mb-4">
                {project.title} Details
              </h2>
              <p className="mb-3">
                <strong>Tech Stack:</strong>{" "}
                {project.details.techStack.join(", ")}
              </p>
              <p className="mb-3">
                <strong>Description:</strong> {project.details.longDescription}
              </p>
              <p>
                <strong>Live Site:</strong>{" "}
                <a
                  href={project.details.liveLink}
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  Visit
                </a>
              </p>
              <p>
                <strong>GitHub (Client):</strong>{" "}
                <a
                  href={project.details.clientRepo}
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  View Code
                </a>
              </p>
              <p className="mt-3">
                <strong>Challenges:</strong> {project.details.challenges}
              </p>
              <p className="mb-3">
                <strong>Improvements:</strong> {project.details.improvements}
              </p>
              <button
                className="btn btn-primary text-black"
                onClick={closeModal}
              >
                close
              </button>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
