import React from "react";
import './resume.css';
import pdf from '../../assets/Linh_Nguyen_Resume.pdf'

const Resume = () => {
    return (
        <section id='resume'>
            <span className="sectionTitle">My Resume</span>
            <iframe src={pdf} title="Linh Nguyen Resume" width="90%" height="800px"></iframe>
        </section>
    )

}

export default Resume;