import React, { useContext } from 'react';

import Search from '../Component/Search/Search';
import Movielist from '../Component/Movielist/Movielist';
import Backdrop from '../Component/Backdrop/Backdrop';
import Modal from '../Component/Modal/Modal';
import ModalContext from '../Store/Context/Modal-context';


function Home() {

  const modalContext = useContext(ModalContext)

  return (

    <div className="App" >
      <p>Find Movie IMDB</p>
      <Search />
      <Movielist />
      {modalContext.isOpenModal && <Backdrop />}
      {modalContext.isOpenModal && <Modal />}
    </div>
  )
}
export default Home;