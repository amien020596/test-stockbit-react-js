import { createContext, useState } from 'react';

const ModalContext = createContext({
  isOpenModal: false,
  modalData: {},
  setOpenModal: () => { },
  setModalData: () => { }
})

export default ModalContext;

export function ModalContextProvider(props) {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({})

  function handleOpenModal(open) {
    setOpenModal(open)
  }

  function handleSetModalData(data) {
    setModalData(data)
  }

  const context = {
    isOpenModal: openModal,
    modalData: modalData,
    setOpenModal: handleOpenModal,
    setModalData: handleSetModalData
  }

  return <ModalContext.Provider value={context}>
    {props.children}
  </ModalContext.Provider>
}