import React from "react";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalLocation = document.getElementById("overlays");
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalLocation
      )}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalLocation
      )}
    </>
  );
};

export default Modal;
