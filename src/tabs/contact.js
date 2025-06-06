import React from 'react'
import useLoadingNavigation from '../components/navigationFunc';
import Swal from 'sweetalert2';

export default function Contact() {
    const { LoadingBarComponent } = useLoadingNavigation();

    // web3 forms react setup..
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "cd39e2b2-478f-4a14-9f0d-3d25758b10c7");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Email sent succesfully!",
                icon: "success"
              });
        }
    };
    // web3forms setup end here..

    return (
        <div className="contact">
            <LoadingBarComponent color={"#EEEEEE"} />
            <div className="contact-item">
                <form onSubmit={onSubmit}>
                    <div class="form-row">
                        <input name='name' type="text" placeholder="Full Name" required />
                        <input name='email' type="text" placeholder="Email" required />
                    </div>
                    <div class="form-row">
                        <input name='phone' type="tel" placeholder="Phone Number" required />
                    </div>
                    <div class="form-row">
                        <textarea name='message' placeholder="Leave a message..." required></textarea>
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
