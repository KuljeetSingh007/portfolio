import React from 'react'
import useLoadingNavigation from '../components/navigationFunc';
export default function Education() {
    const { LoadingBarComponent } = useLoadingNavigation();
    return (
        <div className="education">
            <LoadingBarComponent color={"#EEEEEE"} />
            <h2>Education</h2>
            <ul className='edu-content'>
                <li><span>Duration :- </span>September 2021 - December 2024</li>
                <li><span>Degree :- </span>Bachelor of Computer Applications.</li>
                <li><span>Field of Study :- </span>Information Technology</li>
                <li><span>College :- </span>Syectic Business School</li>
                <li><span>GPA :- </span>7.5</li>
            </ul>
        </div>)
}
