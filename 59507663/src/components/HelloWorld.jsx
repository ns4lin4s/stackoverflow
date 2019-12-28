import React from 'react'
import Modal from './Modal';
import './Modal.scss';
import './HelloWorld.scss'


export default class HelloWorld extends React.Component {

   constructor(props) {
      super( props );

      this.toggleModal = this.toggleModal.bind(this)
      this.state = {
         showModal: false
      }
   }

   toggleModal(){
      this.setState({
         showModal: ! this.state.showModal
      })
   };


    render() {

        const { showModal } = this.state;

        return(
            <React.Fragment>
                <button className="modal-toggle-button" onClick={this.toggleModal}>
                    { ! showModal ? 'Open Modal' : 'Close Modal' }
                </button>
                    {
                    showModal ? (
                        <Modal>
                            <div className="my-modal">
                                <h1>Heading</h1>
                                <p>Lorem ipsum </p>
                                <button 
                                    className="modal-close"
                                    onClick={this.toggleModal}
                                >X</button>
                            </div>
                        </Modal>
                    ) : null
                    }

            </React.Fragment>
        );
    }
}