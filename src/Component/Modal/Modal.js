import { useContext } from "react";
import ModalContext from "../../Store/Context/Modal-context";
import classes from "./Modal.module.css";

function Modal() {
  const ModalCtx = useContext(ModalContext)
  const modalData = ModalCtx.modalData;

  function handleButtonModal() {
    ModalCtx.setOpenModal(false)
  }

  return (
    <div className={classes.modal}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <img alt={modalData.title} style={{ width: "auto", height: "20%", marginTop: "0.5rem", marginBottom: "0.5rem" }} src={modalData.poster} />
        <button style={{ height: "2rem", width: "5rem", backgroundColor: "#a0a1a2", marginBottom: "0.5rem", color: "#3c3b3b", border: "none", borderRadius: "5px", boxShadow: "rgb(255 255 255) 1px 1px 1px", fontWeight: "500" }} onClick={handleButtonModal}>Close</button>
      </div>
    </div>
  )
}
export default Modal;