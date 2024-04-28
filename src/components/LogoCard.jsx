import React, { useState } from "react";
import { Col, Modal } from "react-bootstrap";

export const LogoCard = ({ title, specialization, year, description, imgUrl, liveUrl, sourceUrl }) => {
  // State to control the modal visibility
  const [showModal, setShowModal] = useState(false);

  // Event handler to open the modal
  const handleShow = () => setShowModal(true);

  // Event handler to close the modal
  const handleClose = () => setShowModal(false);

  return (
    <>
      {/* Logo Card */}
      <Col size={12} sm={6} md={4}>
        <div className="logo-imgbx" onClick={handleShow}>
          <img src={imgUrl} alt={title} className="img-fluid" />
          <div className="logo-txtx">
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
        </Modal.Body>
        <Modal.Footer>
          <button href={liveUrl} target="_blank" style={{ '--c': 'purple' }} className="btn-modal">
            See Live<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </button>
          <button href={sourceUrl} target="_blank" style={{ '--c': 'hotpink' }} className="btn-modal">
            Get Source<i class="fa fa-github" aria-hidden="true"></i>
          </button>
        </Modal.Footer>

      </Modal>

    </>
  );
};
