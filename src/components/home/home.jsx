import React from 'react';
import './home.css';
import Nav from '../nav/nav';
import Text from './text/text';
import Sidebar from './sidebar/sidebar';
import Highlights from './highlights/highlights';
import {data} from './data';
import { useSelector } from 'react-redux';
  
function Home() {
  const counter = useSelector(state => state.sidecounter.value);
  var obj = data[counter]
  return (
    <>
      <div className='Container-home'>
        <div className='logo'>
          <img className='logo-img' src={obj.img}/>
        </div>
        <Nav />
        <Text />
        <Sidebar />
        <Highlights />
      </div>
    </>
  );
}
export default Home;