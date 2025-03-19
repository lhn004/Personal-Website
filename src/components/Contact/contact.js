import './contact.css';
import linkedinIcon from '../../assets/linkedin.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o4ngzia', 'template_354cybg', form.current, 'S9w5Uke_3pyZPP_BG')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc"> Let me know if you have any work opportunities!</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Subject' name='from_name' required/>
                <input type="text" className="email" placeholder='Your Email' name='from_email' required/>
                <textarea name="message" placeholder='Your Message' rows={5} className='msg' required></textarea>
                <button type="submit" value="Send" className='submitBtn'>Submit</button>
                
                <div className="links">
                    <a href="https://www.linkedin.com/in/linh-nguyen-52123021a/" target="_blank">
                        <img src={linkedinIcon} alt="LinkedIn" className="link" />
                    </a>
                </div> 
            </form>
        </div>
    );
}

export default Contact;