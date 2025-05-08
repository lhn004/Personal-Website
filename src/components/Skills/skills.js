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
            <h1 className="skillTitle" tabIndex="0">What I Do</h1>
            <span className="skillDesc" tabIndex="0">I am an entry level professional with experience in working with LLMs and Machine Learning Models to design AI chatbot and applications.
                Before switching to AI engineering field, I have gained a strong foundation in data analysis through participating in  data science and data analytics competitions.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="AI" className="skillBarImg" aria-hidden="true"/>
                    <div className="skillBarText">
                        <h2 tabIndex="0">AI</h2>
                        <p tabIndex="0">Design and build AI-powered chatbots and applications using Large Language Models (LLMs) and frameworks like LangGraph and Microsoft Autogen</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="Machine Learning" className="skillBarImg" aria-hidden="true"/>
                    <div className="skillBarText">
                        <h2 tabIndex="0">Machine Learning</h2>
                        <p tabIndex="0">Apply machine learning algorithms to solve complex problems, including training, testing, and deploying models</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="Data Analysis" className="skillBarImg" aria-hidden="true"/>
                    <div className="skillBarText">
                        <h2 tabIndex="0">Data Analysis</h2>
                        <p tabIndex="0">Extract actionable insights from large datasets, perform exploratory data analysis (EDA), and apply statistical techniques to support decision-making</p>
                    </div>
                </div>
            </div>
        
            <h1 className="skillTitle" tabIndex="0">What I Enjoy</h1>
            <span className="skillDesc" tabIndex="0"> I love cooking and baking in my free time as well as listening to music</span>
            <div className='hobbiesBars'/>
                <div className='video-container'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vaGf8fmtBr4?si=ijVdhmWRRU2iJCuq" title="Priceless"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    <span tabIndex="0">My fav song recently!</span>
                </div>
                
                <div className="hobbiesImgs">
                    <div className='image-container'>
                        <img src={Pic1} tabIndex="0" alt="A Yule log cake decorated with chocolate frosting to resemble bark, placed on a black tray with sprigs of pine, white ornaments, and cranberries, next to a small golden Christmas ornament" 
                        className="hobbiesImg" />
                    </div>
                    <div className='image-container'>
                        <img src={Pic2} tabIndex="0" alt="Three slices of layered chocolate and vanilla dessert, garnished with small strawberries on a white plate" 
                        className="hobbiesImg" />
                        <span tabIndex="0"> Big thanks to my sister for the awesome photos!</span>
                    </div>
                    <div className='image-container'>
                        <img src={Pic3} tabIndex="0"  alt="A stack of caramel-colored macarons surrounded by more macarons lying flat on a black baking tray" 
                        className="hobbiesImg"/>
                    </div>
                    <div className='image-container'>
                        <img src={Pic4} tabIndex="0" alt="A round cake topped with white frosting, blueberries, orange slices, and a large chocolate letter B in the center, sitting on a white plate with chocolate shavings around the edge" 
                        className="hobbiesImg"/>
                        <span tabIndex="0"> The cake that got me into Bucknell :)) </span>
                    </div>
                    <div className='image-container'>
                        <img src={Pic5} tabIndex="0" alt="A whole roasted turkey seasoned with herbs and stuffed with onions, placed in a metal baking tray inside an oven, with juices collected at the bottom" 
                        className="hobbiesImg"/>
                        <span tabIndex="0"> My first time cooking the whole turkey!! </span>
                    </div>
            </div>

                <span className="skillTitle" tabIndex="0">What I Engage In</span>
                <span className="skillDesc" tabIndex="0"> 
                    Outside classes, I'm a Senior Student Fellow for Bucknell Dominique Data Center where I work on a data project while mentoring fellow students, providing guidance on data analysis, research methodologies, and technical skills.
                </span>

        </section>

    );
}

export default Skills;