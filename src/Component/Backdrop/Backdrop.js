import { useContext } from 'react';
import ModalContext from '../../Store/Context/Modal-context';

import classes from './backdrop.module.css';

function Backdrop() {

  const ModalCxt = useContext(ModalContext);
  function onClickBackdrop() {
    ModalCxt.setOpenModal(false)
  }
  return <div onClick={onClickBackdrop} className={classes.backdrop} />
}
export default Backdrop;