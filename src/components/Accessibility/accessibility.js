import React from 'react';
import './accessibility.css';
import ColorContrast from '../../assets/color-contrast.png';
import SkipContent from '../../assets/skip-content.png';


const Accessibility = () => {
    return (
        <section id='accessibility'>
            <h1 className="accTitle" tabIndex="0">Accessibility Statement</h1>
            <h2 className="accSection" tabIndex="0">Why Accessibility Matters</h2>
            <span className="accDesc" tabIndex="0">This portfolio website showcases my skills, experiences, and projects as a developer. 
                Ensuring it is accessible is essential because the audience includes a diverse range of users—potential employers, collaborators, and peers—some of whom may rely on assistive technologies. 
                An accessible website demonstrates inclusive design thinking and aligns with professional and ethical standards in web development. 
                It also reflects my commitment to building technology that is usable by everyone, regardless of ability.
            </span>

            <h2 className="accSection" tabIndex="0">Accessibility Practices</h2>
            <span className="accDesc" tabIndex="0">To ensure this website is accessible, I have implemented the following practices:</span>
            <ol className="accList">
                <li className="accListItem"> 
                    <h3 className='accListTitle' tabIndex="0">Semantic HTML</h3>
                    <div className="accContentRow">
                        <span className = "accListDesc" tabIndex="0"> 
                            I use semantic HTML elements like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, and <code>&lt;section&gt;</code> to give structure and meaning to my website’s content. 
                            These elements describe the role of each section on the page, which helps assistive technologies like screen readers understand how the content is organized. For example, a screen reader can skip directly to the <code>&lt;main&gt;</code> content or identify navigation links inside a <code>&lt;nav&gt;</code> element. 
                            This makes it much easier for users with disabilities to navigate the site efficiently, without having to read everything line by line. 
                        </span>

                        <img 
                            src= {SkipContent}
                            alt="An image of Skip To Main Content Link" 
                            className="accImage"
                            tabIndex="0"
                        />

                    </div>
                </li>

                <li className="accListItem">
                    <h3 className='accListTitle' tabIndex="0">Color Contrast </h3>
                    <div className="accContentRow">
                        <span className="accListDesc" tabIndex="0">
                            I ensured my text color and background had sufficient color contrast. 
                            I used LearnUI's contrast palette generator to identify a brown text color that worked with my light brown background for large text in my Navigation bar.  
                        </span>
                        <img 
                            src= {ColorContrast}
                            alt="An image of color contrast using LearnUI's contrast palette generator" 
                            className="accImage"
                            tabIndex="0"
                        />
                    </div>
                </li>


                <li className="accListItem">
                    <h3 className='accListTitle' tabIndex="0">Alt Text </h3>
                    <span className="accListDesc" tabIndex="0">
                        All images on my website include descriptive alt text that clearly conveys the purpose and content of the image. 
                        For example, instead of vague phrases like “cooking image” for one of the images in Skills Section, I write specific descriptions such as “A Yule log cake decorated with chocolate frosting to resemble bark, placed on a black tray with sprigs of pine, white ornaments, and cranberries, next to a small golden Christmas ornament.” 
                        This helps users understand the context and meaning of the image even if they can't see it. For purely decorative images such as the images in Projects Section that don’t convey meaningful information, I either leave the alt attribute empty (alt="") or hide them from screen readers using aria-hidden="true" so they aren’t unnecessarily announced.
                    </span>
                </li>

                <li className="accListItem">
                    <h3 className='accListTitle' tabIndex="0"> ARIA Roles</h3> 
                    <span className="accListDesc" tabIndex="0">
                        I use ARIA roles and attributes when native HTML elements don’t provide enough context for assistive technologies. 
                        These attributes help screen readers better understand the purpose of custom components or complex interactions. 
                        For example, I use aria-label like Go to Linh's LinkedIn page to provide accessible names for icon-only buttons, such as GitHub or LinkedIn icons, so users know what action the button performs.
                    </span>
                </li>

            </ol>

        </section>
    )
}

export default Accessibility;