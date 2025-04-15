import React from 'react';
import './accessibility.css';


const Accessibility = () => {
    return (
        <section id='accessibility'>
            <h1 className="accTitle">Accessibility Statement</h1>
            <h2 className="accSection">Why Accessibility Matters</h2>
            <span className="accDesc">This portfolio website showcases my skills, experiences, and projects as a developer. 
                Ensuring it is accessible is essential because the audience includes a diverse range of users—potential employers, collaborators, and peers—some of whom may rely on assistive technologies. 
                An accessible website demonstrates inclusive design thinking and aligns with professional and ethical standards in web development. 
                It also reflects my commitment to building technology that is usable by everyone, regardless of ability.
            </span>

            <h2 className="accSection">Accessibility Practices</h2>
            <span className="accDesc">To ensure this website is accessible, I have implemented the following practices:</span>
            <ol className="accList">
                <li className="accListItem"> 
                    <h3 className='accListTitle'>Semantic HTML</h3>
                    <span className = "accListDesc"> 
                        I use semantic HTML elements like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;section&gt;</code> to give structure and meaning to my website’s content. 
                        These elements describe the role of each section on the page, which helps assistive technologies like screen readers understand how the content is organized. For example, a screen reader can skip directly to the <code>&lt;main&gt;</code> content or identify navigation links inside a <code>&lt;nav&gt;</code> element. 
                        This makes it much easier for users with disabilities to navigate the site efficiently, without having to read everything line by line. 
                    </span>
                </li>

                <li className="accListItem">
                    <h3 className='accListTitle'>Color Contrast </h3>
                    <span className="accListDesc">
                        I ensured my text color and background had sufficient color contrast. 
                        I used LearnUI's contrast palette generator to identify a brown text color that worked with my light brown background for large text in my Navigation bar.  
                    </span>
                </li>


                <li className="accListItem">
                    <h3 className='accListTitle'>Alt Text </h3>
                    <span className="accListDesc">
                        All images on my website include descriptive alt text that clearly conveys the purpose and content of the image. 
                        This is essential for users who rely on screen readers, as the alt text is read aloud to describe what is visually displayed. 
                        For example, instead of vague phrases like “image” or “project screenshot,” I write specific descriptions such as “Screenshot of my weather app showing a 7-day forecast for New York City.” 
                        This helps users understand the context and meaning of the image even if they can't see it. For purely decorative images that don’t convey meaningful information, I either leave the alt attribute empty (alt="") or hide them from screen readers using aria-hidden="true" so they aren’t unnecessarily announced.
                    </span>
                </li>

                <li className="accListItem">
                    <h3 className='accListTitle'> ARIA Roles</h3> 
                    <span className="accListDesc">
                        I use ARIA roles and attributes when native HTML elements don’t provide enough context for assistive technologies. 
                        These attributes help screen readers better understand the purpose of custom components or complex interactions. 
                        For example, I use aria-label to provide accessible names for icon-only buttons, such as GitHub or LinkedIn icons, so users know what action the button performs.
                    </span>
                </li>

            </ol>

        </section>
    )
}

export default Accessibility;