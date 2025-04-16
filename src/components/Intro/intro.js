import React from "react";
import './intro.css';
import bg from '../../assets/image.jpg' 

const Intro = () => {
    return (
        <section id='intro'>
            <div className="introContent">
                <span className="hello" tabIndex="0">Hello!</span>
                <span className="introText" tabIndex="0">I'm  <span className="introName">Linh</span> 
                </span>

                <p className = 'introPara' tabIndex="0">I'm a senior Computer Science and Business Analytics major 
                    <br/>at Bucknell University
                    </p>
            </div>
            <img src={bg} alt="headshot" className="bg" aria-hidden="true"></img>
        </section>
    )
}

export default Intro