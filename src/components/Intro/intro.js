import React from "react";
import './intro.css';
import bg from '../../assets/image.jpg' 

const Intro = () => {
    return (
        <section id='intro'>
            <div className="introContent">
                <span className="hello">Hello!</span>
                <span className="introText">I'm  <span className="introName">Linh</span> 
                {/* <br/>Software Engineer */}
                </span>

                <p className = 'introPara'>I'm a senior Computer Science and Business Analytics major 
                    <br/>at Bucknell University
                    {/* <br />My experience is focused on working with LLMs and machine learning models 
                    <br/> to design chatbot and AI features */}
                    </p>
            </div>
            <img src={bg} alt="" className="bg"></img>
        </section>
    )
}

export default Intro