import React from 'react';
import './skills.css';
import UIDesign from '../../assets/machine-learning.png';
import WebDesign from '../../assets/deep-learning.png';
import AppDesign from '../../assets/analysis.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am an entry level professional with experience in working with LLMs and Machine Learning Models to design AI chatbot and applications.
                Before switching to AI engineering field, I have gained a strong foundation in data analysis through participating in  data science and data analytics competitions.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>AI</h2>
                        <p>Design and build AI-powered chatbots and applications using Large Language Models (LLMs) and frameworks like LangGraph and Microsoft Autogen</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Machine Learning</h2>
                        <p>Apply machine learning algorithms to solve complex problems, including training, testing, and deploying models</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Data Analysis</h2>
                        <p>Extract actionable insights from large datasets, perform exploratory data analysis (EDA), and apply statistical techniques to support decision-making</p>
                    </div>
                </div>
            </div>

            <span className="skillTitle">Hobbies</span>

        </section>

    );
}

export default Skills;