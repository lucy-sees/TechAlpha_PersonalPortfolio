import React, { useState } from "react";
import { Col, Modal, Container, Spinner } from "react-bootstrap";
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

export const ProjectCard = ({ title, specialization, year, description, technologies, imgUrl, liveUrl, sourceUrl }) => {
  // State to control the modal visibility
  const [showModal, setShowModal] = useState(false);
  const [isLiveView, setIsLiveView] = useState(false);
  const [loading, setLoading] = useState(true);

  // Event handler to open the modal with the URL loaded
  const handleShow = () => {
    setShowModal(true);
    setIsLiveView(true);
    setLoading(true);
  };

  // Event handler to close the modal
  const handleClose = () => {
    setShowModal(false);
    setIsLiveView(false);
  };

  // Event handler for "See Live" button click
  const handleLiveClick = () => {
    setIsLiveView(true);
    setLoading(true);
  };

  // Event handler for "Get Source" button click
  const handleSourceClick = () => window.open(sourceUrl, '_blank');

  // Event handler for iframe load
  const handleIframeLoad = () => setLoading(false);

  return (
    <>
      {/* Project Card */}
      <Col size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt={title} className="img-fluid" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <p>{description}</p>
            <button onClick={handleShow} className="p-2 button-modal see-live">
              See Project
              <LuArrowUpRightFromCircle className="mx-2" />
            </button>
          </div>
        </div>
      </Col>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered className="projectsModal custom-modal-width" size="xl">
        <Container className="projectsModalBody">
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {isLiveView ? (
              <>
                {loading && <Spinner animation="border" />}
                <iframe
                  src={liveUrl}
                  title={title}
                  style={{ width: '100%', height: '80vh', border: 'none' }}
                  onLoad={handleIframeLoad}
                ></iframe>
              </>
            ) : (
              <>
                <img src={imgUrl} alt={title} className="img-fluid mb-3" />
                <p>{description}</p>
                <p><strong>Specialization:</strong> {specialization}</p>
                <p><strong>Year:</strong> {year}</p>
                <p style={{
                  color: "#f7df1e", display: "inline-block", padding: "5px 10px"
                }}><strong>Technologies:</strong></p>
                <ul>
                  {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            {!isLiveView && (
              <button onClick={handleLiveClick} className="p-2 button-modal see-live">
                See Live 
                <LuArrowUpRightFromCircle className="mx-2" />
              </button>
            )}
            <button onClick={handleSourceClick} className="p-2 button-modal get-source">
              Get Source 
              <FaGithub className="mx-2"/>
            </button>
          </Modal.Footer>
        </Container>
      </Modal>
    </>
  );
};