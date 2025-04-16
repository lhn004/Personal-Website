import './contact.css';
import linkedinIcon from '../../assets/linkedin.png';
import githubIcon from '../../assets/github.png';
import React from 'react';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2ed744bd-7900-4ad9-8916-82423485ff71");

    const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
    });

    const data = await response.json();

    if (data.success) {
    setResult("Form Submitted Successfully");
    event.target.reset();
    } else {
    console.log("Error", data);
    setResult(data.message);
    }};

    
    return (
        <div id='contactPage'>
            <h1 className="contactPageTitle" tabIndex="0">Contact Me</h1>
            <span className="contactDesc" tabIndex="0"> Let me know if you have any work opportunities!</span>
            <form className="contactForm" onSubmit={onSubmit}>
                <input type="text" className="name" placeholder='Subject' name='from_name' required/>
                <input type="text" className="email" placeholder='Your Email' name='from_email' required/>
                <textarea name="message" placeholder='Your Message' rows={5} className='msg' required></textarea>
                <button type="submit" value="Send" className='submitBtn'>Submit</button>
                
                <div className="links">
                    <a href="https://www.linkedin.com/in/linh-nguyen-52123021a/" target="_blank" aria-label="Go to Linh's LinkedIn Page">
                        <img src={linkedinIcon} alt="LinkedIn" className="link"/>
                    </a>
                    <a href="https://github.com/lhn004" target="_blank" aria-label="Go to Linh's Github Page">
                        <img src={githubIcon} alt="Github" className="link"/>
                    </a>
                </div> 
            </form>
            <span>{result}</span>
        </div>
    );
}

export default Contact;