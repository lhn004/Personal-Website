import React from 'react';
import './skills.css';
import UIDesign from '../../assets/machine-learning.png';
import WebDesign from '../../assets/deep-learning.png';
import AppDesign from '../../assets/analysis.png';
import Pic1 from '../../assets/IMG_7197.png'
import Pic2 from '../../assets/IMG_2809.png'
import Pic3 from '../../assets/IMG_3159.png'
import Pic4 from '../../assets/IMG_0621.png'
import Pic5 from '../../assets/IMG_6458.png'


const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am an entry level professional with experience in working with LLMs and Machine Learning Models to design AI chatbot and applications.
                Before switching to AI engineering field, I have gained a strong foundation in data analysis through participating in  data science and data analytics competitions.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="AI" className="skillBarImg" aria-hidden="true"/>
                    <div className="skillBarText">
                        <h2>AI</h2>
                        <p>Design and build AI-powered chatbots and applications using Large Language Models (LLMs) and frameworks like LangGraph and Microsoft Autogen</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="Machine Learning" className="skillBarImg" aria-hidden="true"/>
                    <div className="skillBarText">
                        <h2>Machine Learning</h2>
                        <p>Apply machine learning algorithms to solve complex problems, including training, testing, and deploying models</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="Data Analysis" className="skillBarImg" aria-hidden="true"/>
                    <div className="skillBarText">
                        <h2>Data Analysis</h2>
                        <p>Extract actionable insights from large datasets, perform exploratory data analysis (EDA), and apply statistical techniques to support decision-making</p>
                    </div>
                </div>
            </div>

            <span className="skillTitle">Hobbies</span>
            <span className="skillDesc"> I love cooking and baking in my free time as well as listening to music</span>
            <div className='hobbiesBars'/>
                <div className='video-container'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xKsgjGEudfg?si=PlcdMesC-zezkiyb" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    <span>One of my all-time favorite songs!</span>
                </div>
                
                <div className="hobbiesImgs">
                    <div className='image-container'>
                        <img src={Pic1} alt="Cooking Picture" className="hobbiesImg" aria-hidden="true"/>
                    </div>
                    <div className='image-container'>
                        <img src={Pic2} alt="Cooking Picture" className="hobbiesImg" aria-hidden="true"/>
                        <span> Big thanks to my sister for the awesome photos!</span>
                    </div>
                    <div className='image-container'>
                        <img src={Pic3} alt="Cooking Picture" className="hobbiesImg" aria-hidden="true"/>
                    </div>
                    <div className='image-container'>
                        <img src={Pic4} alt="Cooking Picture" className="hobbiesImg" aria-hidden="true"/>
                        <span> The cake that got me into Bucknell :)) </span>
                    </div>
                    <div className='image-container'>
                        <img src={Pic5} alt="Cooking Picture" className="hobbiesImg" aria-hidden="true"/>
                        <span> My first time cooking the whole turkey!! </span>
                    </div>
                </div>
            

        </section>

    );
}

export default Skills;