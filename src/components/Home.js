import React,{ useState } from 'react';
import Menu from './Menu';
import '../App.css';

function Home(props) {
    const { navigate, currentPage } = props;
    return (
        <Menu navigate={navigate} currentScreen={currentPage}/>
    );

}

export default Home;
