import React from 'react';
import './Modal.css';

export default class Modal extends React.Component {

  state = {
    isOpen: false
  }


  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.setState({ isOpen: true })}>
          Open Modal
          </button>
        {this.state.isOpen && (
          <div className="modal" onClick={
            (e) => !e.target.classList.contains('modal-body') && !e.target.classList.contains('modal-title') && !e.target.classList.contains('modal-text') ? this.setState({ isOpen: false }) : null}>
            <div className="modal-body">
              <h1 className="modal-title">Modal Title</h1>
              <p className="modal-text">I am awesome modal!</p>
              <button onClick={
                () => this.setState({ isOpen: false })}>
                Close modal
                </button>
            </div>
          </div>
        )
        }
      </React.Fragment>
    )
  }
}