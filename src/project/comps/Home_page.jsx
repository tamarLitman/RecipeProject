
import { useState } from 'react';
import soup from '../../pics_for_react/25097.jpg'
import food from '../../pics_for_react/California-Quinoa-Oatmeal_022.webp'
import a from '../../pics_for_react/380x250-Mushroom-squash--barley-pie-5a86c921-2c04-42d8-be4c-0cbb976cf737-0-380x250.jpg'
import b from '../../pics_for_react/OLI-0320_Healthy-CuminCrustedChickenBreastWithKaleSaladHumous_02786_preview-eba91c9.jpg'
import c from '../../pics_for_react/logo2.png'

import './NavBar.css'
import { NavLink, Navigate, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import zIndex from '@mui/material/styles/zIndex';
import { Login } from './Login';
import { Signin } from './Signin';



export const HomePage = () => {

    const images = [c, soup, food, a, b];
    const [currentSlide, setCurrentSlide] = useState(0);
    const nav = useNavigate()

    const goToPreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    };
    return <>
       <NavLink to={'/Login'} id='bla' ><h3 style={{width:70, margin:10}}>Login</h3></NavLink >
       <br></br>
       <NavLink to={'/Signin'} id='bla' ><h3 style={{width:150,marginInline:3}}>new? Sign in!</h3></NavLink >
        <div className="photo-presentation-container" id='container'>
            <section id='bla' style={{ marginBottom: 50 }}>
                <h1>I need...</h1>
                <br></br>
                <br></br>
                <h3>Meal Plans</h3>
                <br></br>
                <h3>30-Minute Meals</h3>
                <br></br>
                <h3>One Pot Meals</h3>
                <br></br>
                <h3>Kid-Friendley</h3>
                <br></br>
                <h3>Soups & stews</h3>
                <br></br>
                <h3>Slow Cooker</h3>
                <br></br>
                <h3>Snacks</h3>
                <br></br>
                <h3>Smoothies</h3>
                <br></br>
                <h3>Shabbat Dishes</h3>
            </section>
            <section>
                <h1 id='bla' style={{ marginTop: 1, marginRight: 300 }}>Latest & Greatest</h1>
                <h1 id='present' ><small></small> Well Plated <small>eat good, feel better</small></h1>
                <div className="photo-slideshow">
                    <button className="prev-button" onClick={goToPreviousSlide}>{'<'}</button>
                    <img style={{ width: 700, height: 500, marginTop: 50, marginRight: 100 }} src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                    <button className="next-button" onClick={goToNextSlide}>{'>'}</button>
                </div>

            </section>

        </div>
    </>

}
