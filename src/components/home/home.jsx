import React from 'react';
import './home.css';
import Nav from '../nav/nav';
import Text from './text/text';
import Sidebar from './sidebar/sidebar';
import Highlights from './highlights/highlights'
import img from '/img/principal_banner_desktop.jpg';

function Home() {
  return (
    <>
      <div className='Container-home'>
        <img className='logo' src={img}/>
        <Nav />
        <Text />
        <Sidebar />
        <Highlights />
      </div>
    </>
  );
}
export default Home;