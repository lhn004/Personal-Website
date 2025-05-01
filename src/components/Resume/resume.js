import React from "react";
import './resume.css';
import pdf from '../../assets/Linh Nguyen - Resume-accessibility.pdf'

const Resume = () => {
    return (
        <section id='resume'>
            <h1 className="sectionTitle" tabIndex="0">My Resume</h1>
            
            <iframe src={pdf} title="Linh Nguyen Resume" 
                    width="90%" height="800px"
                    aria-label="Embedded PDF of Linh Nguyen's Resume"
                    tabIndex="0"
                    role="document"
            >
            </iframe>

            <p className="downloadLink" tabIndex="0">
                <a
                    href={pdf}
                    download
                    aria-label="Download Linh Nguyen's resume as a PDF"
                >
                    Download PDF version
                </a>
            </p>
        </section>
    )

}

export default Resume;