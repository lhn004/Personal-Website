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
            <h2 className="worksTitle">My Projects</h2>
            {/* <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.</span> */}
            <div className="worksImgs">
                <div className='workContainer'>
                    <img src={CodeCompanion} alt="" className="worksImg"></img>
                    <div className='projectCard'>
                        <h1 className="projectTitle">Code Companion</h1>
                        <p className="projectDesc">A VSCode extension to assist students in introductory programming courses by
                        answering conceptual and coding assignment questions based on course content</p>
                        {/* <Link href="https://www.linkedin.com/in/linh-nguyen-52123021a/" target="_blank" aria-label="Go to Linh's LinkedIn Page"> */}
                            {/* <button className="moreBtn">Learn More</button> */}
                        {/* </Link> */}
                    </div>
                </div>
            
                <div className='workContainer'>
                    <img src={Uber} alt="" className="worksImg"></img>
                    <div className='projectCard'>
                        <h1 className="projectTitle">Uber Data Science Challenge</h1>
                        <p className="projectDesc">Data analysis to enhance Uber's driver enrollment rate</p>
                        <Link href="https://github.com/lhn004/UberDataScienceChallenge" target="_blank" aria-label="Go to Project Github">
                            <button className="moreBtn">Learn More</button>
                        </Link>
                    </div>
                </div>

                <div className='workContainer'>
                    <img src={Hilton} alt="" className="worksImg"></img>
                    <div className='projectCard'>
                        <h1 className="projectTitle">Adobe Analytics Challenge</h1>
                        <p className="projectDesc">Data visualizations to identify and enhance
                        Hilton Hotels’ key performance indicators (KPIs) and improve guests’ digital experience</p>
                        <Link href="https://github.com/lhn004/AdobeAnalyticsChallenge" target="_blank" aria-label="Go to Project Github">
                            <button className="moreBtn">Learn More</button>
                        </Link>
                    </div>
                </div>

                <div className='workContainer'>
                    <img src={Covid} alt="" className="worksImg"></img>
                    <div className='projectCard'>
                        <h1 className="projectTitle">Manhattan College Business Analytics Challenge</h1>
                        <p className="projectDesc">Insights and recommendation to countries in the event of future pandemics </p>
                        <Link href="https://github.com/lhn004/ManhattanCollegeCompetition" target="_blank" aria-label="Go to Project Github">
                            <button className="moreBtn">Learn More</button>
                        </Link>
                    </div>
                </div>

                <div className='workContainer'>
                    <img src={HDMA} alt="" className="worksImg"></img>
                    <div className='projectCard'>
                        <h1 className="projectTitle">Home Mortgage Loan Applications</h1>
                        <p className="projectDesc">Identify areas for improving future loan application success rates and decision-making processes</p>
                        <Link href="https://github.com/lhn004/HDMA-Research" target="_blank" aria-label="Go to Project Github">
                            <button className="moreBtn">Learn More</button>
                        </Link>
                    </div>
                </div>

            </div>
            
        </section>
    );
}

export default Works;