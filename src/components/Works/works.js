import React from 'react';
import { Link } from "react-router-dom"
import './works.css';
import CodeCompanion from '../../assets/code_companion.png'
import Uber from '../../assets/uber.png'
import Hilton from '../../assets/hilton.png'
import Covid from '../../assets/covid.png'
import HDMA from '../../assets/home_mortgage.png'

const Works = () => {
    return (
        <section id='works'>
            <h1 className="worksTitle" tabIndex="0">My Projects</h1>
            {/* <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span> */}
            <div className="worksImgs">
                <div className='workContainer'>
                    <img src={CodeCompanion} alt="" className="worksImg"></img>
                    <div className='projectCard'>
                        <h1 className="projectTitle" tabIndex="0">Code Companion</h1>
                        <p className="projectDesc" tabIndex="0">A VSCode extension to assist students in introductory programming courses by
                        answering conceptual and coding assignment questions based on course content</p>
                        {/* <Link href="https://www.linkedin.com/in/linh-nguyen-52123021a/" target="_blank" aria-label="Go to Linh's LinkedIn Page"> */}
                            {/* <button className="moreBtn">Learn More</button> */}
                        {/* </Link> */}
                    </div>
                </div>
            
                <div className='workContainer'>
                    <img src={Uber} alt="" className="worksImg"></img>
                    <div className='projectCard'>
                        <h1 className="projectTitle" tabIndex="0">Uber Data Science Challenge</h1>
                        <p className="projectDesc" tabIndex="0">Data analysis to enhance Uber's driver enrollment rate</p>
                        <a href="https://github.com/lhn004/UberDataScienceChallenge" target="_blank" aria-label="Go to Uber Data Science Project Github">
                            <button className="moreBtn">Learn More</button>
                        </a>
                    </div>
                </div>

                <div className='workContainer'>
                    <img src={Hilton} alt="" className="worksImg"></img>
                    <div className='projectCard'>
                        <h1 className="projectTitle" tabIndex="0">Adobe Analytics Challenge</h1>
                        <p className="projectDesc" tabIndex="0">Data visualizations to identify and enhance
                        Hilton Hotels’ key performance indicators (KPIs) and improve guests’ digital experience</p>
                        <a href="https://github.com/lhn004/AdobeAnalyticsChallenge" target="_blank" aria-label="Go to Adobe Analytics Project Github">
                            <button className="moreBtn">Learn More</button>
                        </a>
                    </div>
                </div>

                <div className='workContainer'>
                    <img src={Covid} alt="" className="worksImg"></img>
                    <div className='projectCard'>
                        <h1 className="projectTitle" tabIndex="0">Manhattan College Business Analytics Challenge</h1>
                        <p className="projectDesc" tabIndex="0">Insights and recommendation to countries in the event of future pandemics </p>
                        <a href="https://github.com/lhn004/ManhattanCollegeCompetition" target="_blank" aria-label="Go to Manhattan College Project Github">
                            <button className="moreBtn">Learn More</button>
                        </a>
                    </div>
                </div>

                <div className='workContainer'>
                    <img src={HDMA} alt="" className="worksImg"></img>
                    <div className='projectCard'>
                        <h1 className="projectTitle" tabIndex="0">Home Mortgage Loan Applications</h1>
                        <p className="projectDesc" tabIndex="0">Identify areas for improving future loan application success rates and decision-making processes</p>
                        <a href="https://github.com/lhn004/HDMA-Research" target="_blank" aria-label="Go to HDMA Research Project Github">
                            <button className="moreBtn">Learn More</button>
                        </a>
                    </div>
                </div>

            </div>
            
        </section>
    );
}

export default Works;