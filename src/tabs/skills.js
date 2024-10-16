import React from 'react'
import useLoadingNavigation from '../components/navigationFunc';
export default function Skills() {
    const { LoadingBarComponent } = useLoadingNavigation();

    return (
        <div className="skills">

            <LoadingBarComponent color={"#EEEEEE"} />

            <h2>Skills</h2>
            <div className="grid-container">
                <div className="grid-items">
                    <h3>Introductory Skills</h3>
                    <ul>
                        <li><span id='html'>HTML</span> </li>
                        <li> <span id='css'>CSS</span> </li>
                        <li> <span id='javascript'>JavaScript</span></li>
                    </ul>
                </div>
                <div className="grid-items">
                    <h3>Frontend Technology</h3>
                    <ul>
                        <li> <span id='react-js'>React-Js</span></li>
                    </ul>
                </div>
                <div className="grid-items">
                    <h3>Backend Technology</h3>
                    <ul>
                        <li><span id='node-js'>Node-Js</span> </li>
                    </ul>
                </div>
                <div className="grid-items">
                    <h3>Database</h3>
                    <ul>
                        <li> <span id='mongo-db'>MongoDB</span> </li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

