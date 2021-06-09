import React from 'react';
import './Home.css';
import NebBar from '../Header/NevBar/NebBar';
import MainPage from './MainPage/MainPage';
import About from '../About/About';
import Project from '../Project/Project';
import Footer from '../Footer/Footer';
import Blog from '../Blog/Blog';
import Contact from'../Contact/Contact'


const Home = () => {
    return (
        
        <div className="homePage">
            
                <NebBar/>      
            
                
                <MainPage/>
             
                <About/>
                
                <Project/>
                <Blog/>
                <Contact/>
                <Footer/>
            
        </div>
       
    );
};

export default Home;