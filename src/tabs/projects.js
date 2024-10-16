import React from 'react'
import useLoadingNavigation from '../components/navigationFunc';

export default function Projects() {
    const { LoadingBarComponent } = useLoadingNavigation();

    return (
        <div className='projects'>
            <LoadingBarComponent color={"#EEEEEE"} />
            <h2>Projects</h2>
            <div className="grid-projects">
                
                <div className="projects-item">
                    <h3>Personal Projects</h3>
                    <ul>
                        <li>
                            <span>Portfolio :- </span>
                            <p>A thoughtfully designed showcase that presents essential details about me, including my skills, experiences, and development journey. This project highlights what I’m capable of as a web developer and reflects my dedication to learning, coding, and building efficient digital solutions.</p>
                        </li>
                        <li>
                            <span>Text-Utils :- </span>
                            <p>A versatile text manipulation tool that helps you efficiently manage text. It provides features such as word and character count, reading time estimation, converting to uppercase or lowercase, removing extra spaces, and copying content, making it a convenient solution for quick text processing tasks.</p>
                        </li>
                        <li>
                            <span>Cloud-Notes :- </span>
                            <p>An intuitive cloud-based application designed for seamless note management. With features to create, delete, and save notes, it ensures your thoughts are securely stored and easily accessible from any device.In developing this project. I have gained substantial knowledge about backend integration and functionality, enhancing my overall understanding of full-stack development.</p>
                        </li>
                        <li>
                            <span>Shoping WebApp :- </span>
                            <p>This project features a frontend design of a visually stunning, user-interactive shopping web app. It has significantly enhanced my understanding of interface design and user experience, inspiring me to continue expanding my web development skills.</p>
                        </li>
                        <li>
                            <span>Dashboard for products & employee's details :- </span>
                            <p>An advanced frontend design that streamlines the management of product and employee data. This project has broadened my knowledge of data visualization and user experience design, motivating me to explore new techniques and elevate my web development capabilities further.</p>
                        </li>
                    </ul>
                </div>
               
                <div className="divider"></div>
               
                <div className="projects-item">
                    <h3>During College</h3>
                    <ul>
                        <li>
                            <span>Game TIC-TAC-TOE :- </span>
                            <p>A classic implementation of the Tic-Tac-Toe game featuring a simple and engaging user interface. This project highlights my skills in JavaScript and frontend development, allowing users to play against each other</p>
                        </li>
                        <li>
                            <span>Game Stone-Paper-Scissor :- </span>
                            <p>An engaging web-based implementation of the classic game, featuring a user-friendly interface. This project demonstrates my skills in JavaScript and frontend development, offering a fun and interactive experience for users.</p>
                        </li>
                        <li>
                            <span>Calculator :- </span>
                            <p>A modern web-based calculator designed for smooth and efficient arithmetic operations. With a clean interface and responsive layout, this project offers users a straightforward tool for quick calculations, enhancing their overall experience with intuitive functionality.The calculator supports basic operations like addition, subtraction, multiplication, and division.
                                Its lightweight design ensures fast performance, making it ideal for everyday use.</p>
                        </li>
                        <li>
                            <span>Login Form :- </span>
                            <p>A streamlined web-based login form designed for efficient user authentication. This project emphasizes a user-friendly interface and security, providing a seamless experience for account access.The form includes basic input validation to guide users in entering correct information. The project focuses on clean code and simplicity, making it easy to extend with future backend integrations.</p>
                        </li>
                        <li>
                            <span>Audio Player :- </span>
                            <p>This project is a web-based audio player designed to provide users with a straightforward way to play and pause audio files. The player emphasizes ease of use, minimal design, and efficient performance, making it ideal for quick audio playback.This simple audio player is an excellent starting point for building more complex media players in the future.</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
