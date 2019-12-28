import React from 'react';
import { createPortal } from 'react-dom';


const modalRoot = document.getElementById( 'modal' );

class Modal extends React.Component {
   constructor( props ) {
        super( props );
        // We create an element div for this modal
        this.element = document.createElement( 'div' );
   }
    // We append the created div to the div#modal
   componentDidMount() {
      modalRoot.appendChild( this.element );
   }
    /**
    * We remove the created div when this Modal Component is unmounted
    * Used to clean up the memory to avoid memory leak 
    */
   componentWillUnmount() {
      modalRoot.removeChild( this.element );
   }
    
   render() {
      return createPortal( this.props.children, this.element );
   }
}
export default Modal;