import React from 'react'
import useLoadingNavigation from '../components/navigationFunc';

export default function Contact() {
    const { LoadingBarComponent } = useLoadingNavigation();

    return (
        <div className="contact">
            <LoadingBarComponent color={"#EEEEEE"} />
            <div className="contact-item">
                <form>
                    <div class="form-row">
                        <input type="text" placeholder="Full Name" required />
                        <input type="text" placeholder="Email" required />
                    </div>
                    <div class="form-row">
                        <input type="tel" placeholder="Phone Number" required />
                    </div>
                    <div class="form-row">
                        <textarea placeholder="Leave a message..." required></textarea>
                    </div>
                    <div class="form-row">
                        <button type="submit">Contact Me</button>
                    </div>

                </form>
            </div>
            <div className="icons-list">
                <ul>
                    <li><i class="fa-brands fa-github"></i></li>
                    <li><i class="fa-brands fa-facebook-f"></i></li>
                    <li><i class="fa-brands fa-linkedin-in"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                </ul>
            </div>
            <div className="con-details">
                <ul>
                    <p>Contact Details</p>
                    <li>iamkuljeet007@gmail.com</li>
                    <li>Ph : 7888810495</li>
                    <li>github.com/KuljeetSingh007</li>
                    <li>linkedin.com/in/iamkuljeet</li>
                </ul>
            </div>
        </div>
    )
}
