import React from "react";
import './resume.css';
import pdf from '../../assets/Linh_Nguyen_Resume.pdf'

const Resume = () => {
    return (
        <section id='resume'>
            <h1 className="sectionTitle" tabIndex="0">My Resume</h1>
            <iframe src={pdf} title="Linh Nguyen Resume" width="90%" height="800px"></iframe>
        </section>
    )

}

export default Resume;