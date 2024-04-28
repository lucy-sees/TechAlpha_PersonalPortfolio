import React, { useState } from "react";
import { Col, Modal } from "react-bootstrap";

export const ProjectCard = ({ title, specialization, year, description, technologies, imgUrl, liveUrl, sourceUrl }) => {
  // State to control the modal visibility
  const [showModal, setShowModal] = useState(false);

  // Event handler to open the modal
  const handleShow = () => setShowModal(true);

  // Event handler to close the modal
  const handleClose = () => setShowModal(false);

  //handler for url
  const handleLiveClick = () => window.open(liveUrl, '_blank');
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
        <Modal show={showModal} onHide={handleClose} centered className="modal">
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={imgUrl} alt={title} className="img-fluid mb-3" />
            <p>{description}</p>
            <p><strong>Specialization:</strong> {specialization}</p>
            <p><strong>Year:</strong> {year}</p>
            <ul>
              <p style={{ color: "purple" }}><strong>Technologies:</strong></p>
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleLiveClick} style={{ '--c': 'purple' }} className="btn-modal">
              See Live <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </button>
            <button onClick={handleSourceClick} style={{ '--c': 'hotpink' }} className="btn-modal">
              Get Source <i className="fa fa-github" aria-hidden="true"></i>
            </button>
          </Modal.Footer>

        </Modal>

      </>
    );
  };
