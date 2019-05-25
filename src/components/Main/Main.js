
import React from 'react';
import Img from '../Main/components/images/Img.png';
import cat from  '../images/cat.png';
import s from './Main.module.css'
import st from '../Style.module.css'
import Users from '../Users/Users';

import Server from '../SomeServer'
import New from '../New';
import Home from '../Home';

function Main() {
  return (
    <div className={s.main}>
      <header className={s.header}>
        <img src= {Img} width='50' height='30' alt=''/>
        header
      </header>
      <div className={s.nav}>
           <div> Katya: <Users message = 'Hello'/></div> 
            <div> Vasya: <Users message = 'How are you?'/></div>
            <div> Dasha: <Users message = 'You are  so pretty!'/> </div>
      </div>
      <div className={s.content}> Content</div>
      <div className={st.item} >
        <img className='cat-img' src = {cat} alt=''/>
        Ma cat is bclak
        Ma cat is bclak
        Ma cat is bclak
        Ma cat is bclak
        </div>

        <New />
        <Server />

        <Home />

    </div>
  );
}

export default Main;