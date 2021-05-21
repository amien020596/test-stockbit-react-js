import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { detailMovie } from '../../Store/Actions/Movies';
import ModalContext from '../../Store/Context/Modal-context';
import classes from './card.module.css';
import { useHistory } from 'react-router-dom';

function Card(props) {
  const history = useHistory();
  const ModalCxt = useContext(ModalContext);

  function onClickImageHandler() {
    ModalCxt.setOpenModal(true)
    ModalCxt.setModalData({
      poster: props.poster
    })
  }

  function onClickDetail() {
    props.setDetailData(props)
    history.push('/detail')
  }

  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img alt={props.title} onClick={onClickImageHandler} style={{ width: "auto", height: "20%", marginTop: "0.5rem" }} src={props.poster} />
      </div>
      <div className={classes.text}>
        <p>{props.title}</p>
        <p>{props.type}</p>
        <p>{props.year}</p>
        <button style={{ height: "2rem", width: "5rem", backgroundColor: "#a0a1a2", marginTop: "0.5rem", marginBottom: "0.5rem", color: "#3c3b3b", border: "none", borderRadius: "5px", boxShadow: "rgb(255 255 255) 1px 1px 1px", fontWeight: "500" }} onClick={onClickDetail}> Detail</button>
      </div>
    </div >
  )
}
const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    setDetailData: (dataDetail) => dispatch(detailMovie(dataDetail))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);