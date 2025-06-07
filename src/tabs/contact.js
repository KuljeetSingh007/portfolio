import React, { useState } from 'react';
import useLoadingNavigation from '../components/navigationFunc';
import Swal from 'sweetalert2';

export default function Contact() {
    const { LoadingBarComponent } = useLoadingNavigation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const isFormValid = Object.values(formData).every((val) => val.trim() !== '');

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };


    const onSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.target);
        data.append('access_key', 'cd39e2b2-478f-4a14-9f0d-3d25758b10c7');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(Object.fromEntries(data))
        });

        const result = await response.json();

        if (result.success) {
            Swal.fire({
                title: 'Success!',
                text: 'Email sent successfully!',
                icon: 'success'
            });
            setFormData({ name: '', email: '', phone: '', message: '' });
        }
    };

    return (
        <div className="contact">
            <LoadingBarComponent color="#EEEEEE" />
            <div className="contact-item">
                <form onSubmit={onSubmit}>
                    <div className="form-row">
                        <input
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <input
                            name="email"
                            type="text"
                            placeholder="Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-row">
                        <input
                            name="phone"
                            type="tel"
                            placeholder="Phone Number"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-row">
                        <textarea
                            name="message"
                            placeholder="Leave a message..."
                            required
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-row">
                        <button className={isFormValid === true ? 'submit-btn' : 'submit-btn submit-btn-disabled'} type="submit" disabled={!isFormValid}>
                            Send
                        </button>
                    </div>
                </form>
            </div>

            <div className="icons-list">
                <ul>
                    <li><i className="fa-brands fa-github"></i></li>
                    <li><i className="fa-brands fa-facebook-f"></i></li>
                    <li><i className="fa-brands fa-linkedin-in"></i></li>
                    <li><i className="fa-brands fa-twitter"></i></li>
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
    );
}
