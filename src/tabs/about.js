import React from 'react';
import "../styles/MainContent.css";
import useLoadingNavigation from '../components/navigationFunc';
export default function About() {
    const { LoadingBarComponent } = useLoadingNavigation();
    return (
        <div className='container about'>
            <LoadingBarComponent color={"#EEEEEE"} />
            <header className='sticky'>
            </header>

            About
        </div>
    )
}
