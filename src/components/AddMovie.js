import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './AddMovie.css';

const AddMovie = ({ addMovie }) => {
  const [showModal, setShowModal] = useState(false);

  const [movieData, setMovieData] = useState({
    title: '',
    description: '',
    posterUrl: '',
    trailer: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovieData({
      ...movieData,
      [name]: value,
    });
  };

  const handleAdd = () => {
    addMovie(movieData);
    setMovieData({
      title: '',
      description: '',
      posterUrl: '',
      trailer: '',
    });
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="AddContainer">
      {!showModal && (
        <Button variant="primary" onClick={handleShowModal} className="ButtonContainer">
          Add a Movie
        </Button>
      )}
      <Modal show={showModal} onHide={handleCloseModal} animation={false}>
        <Modal.Header className="modal-header">
          <Modal.Title className="modal-title">Add a New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-content">
          <input
            type="text"
            name="title"
            placeholder="Movie Title"
            onChange={handleInputChange}
            value={movieData.title}
            className="input-field"
          />
          <input
            type="text"
            name="posterUrl"
            placeholder="Poster URL"
            onChange={handleInputChange}
            value={movieData.posterUrl}
            className="input-field"
          />
          <input
            type="text"
            name="trailer"
            placeholder="YouTube Trailer URL"
            onChange={handleInputChange}
            value={movieData.trailer}
            className="input-field"
          />
          <input
            type="text"
            name="description"
            placeholder="Movie Description"
            onChange={handleInputChange}
            value={movieData.description}
            className="input-field"
          />
          <input
            type="number"
            name="rate"
            placeholder="Movie Rate"
            onChange={handleInputChange}
            value={movieData.rate}
            className="input-field"
            min="1"
            max="5"
          />
        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <Button variant="secondary" onClick={handleCloseModal} className="button">
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd} className="button">
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
