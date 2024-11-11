import React, { useState } from "react";
import { Col, Container, Modal } from "react-bootstrap";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { TiArrowBackOutline } from "react-icons/ti";

export const ProjectCard = ({ title, specialization, year, description, technologies, imgUrl, liveUrl, sourceUrl }) => {
  // State to control the modal visibility
  const [showModal, setShowModal] = useState(false);
  const [isLiveView, setIsLiveView] = useState(false);

  // Event handler to open the modal
  const handleShow = () => {
    setShowModal(true);
    setIsLiveView(false);
  };

  // Event handler to close the modal
  const handleClose = () => setShowModal(false);

  // Event handler for "See Live" button click
  const handleLiveClick = () => setIsLiveView(true);

  // Event handler for "Back" button click
  const handleBack = () => setIsLiveView(false);

  // Event handler for "Get Source" button click
  const handleSourceClick = () => window.open(sourceUrl, '_blank');

  return (
    <>
      {/* Project Card */}
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx" onClick={handleShow}>
          <img src={imgUrl} alt={title} className="img-fluid" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </Col>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered className="projectsModal" size="lg">
        <Container className="projectsModalBody">
          <Modal.Header closeButton className="modal-header">
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            {isLiveView ? (
              <iframe
                src={liveUrl}
                title={title}
                style={{ width: '100%', height: '500px', border: 'none' }}
                allowFullScreen
              ></iframe>
            ) : (
              <>
                <img src={imgUrl} alt={title} className="img-fluid mb-3" />
                <p>{description}</p>
                <p><strong>Specialization:</strong> {specialization}</p>
                <p><strong>Year:</strong> {year}</p>
                <p style={{ color: "#f7df1e", display: "inline-block", padding: "5px 10px"
                 }}><strong>Technologies:</strong></p>
                <ul>
                  {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </>
            )}
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            {!isLiveView && (
              <button onClick={handleLiveClick} className="button-modal see-live">
                See Live 
                <LuArrowUpRightFromCircle className="mx-2" />
              </button>
            )}
            <button onClick={handleSourceClick} className="button-modal get-source">
              Get Source 
              <FaGithub className="mx-2"/>
            </button>

            {isLiveView && (
              <button onClick={handleBack} className="button-modal see-live">
                Go Back
                <TiArrowBackOutline className="mx-2"/>
              </button>
            )}
          </Modal.Footer>
        </Container>

      </Modal>
    </>
  );
};