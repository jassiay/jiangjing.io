import React, {useState} from 'react';
import '../styles.css';

import project1 from '../assets/project_1.png';
import project3 from '../assets/project_3.png';

const styles = {
    projNum: {
        position: 'absolute',
        margin: 'auto',
        left: 0,
        top: 0,
        zIndex: 10,
    },
    abstract: {
        fontFamily: `'DM Serif Display', serif`,
    },
    cursorStyle: {
        cursor: 'pointer'
    }
};

function ProjectManhattan() {
    return (
        <div>
            <h3 style={styles.projNum}><span style={styles.projNumSpan}>1.Recreate-Manhattan: Reimagine a City using Deep Learning</span></h3>
            <img className="project-img" src={project1} alt="Project 1" />
            <div className="overlay">
                <h3 className="title-placeholder">1.Recreate-Manhattan: Reimagine a City using Deep Learning</h3>
                <p className="info-paragraph">
                    Curated a dataset consisting of 400 trios of images containing outline, layout, and depth information of the city blocks
                    in Manhattan.
                </p>
                <p className="info-paragraph">
                    Used the city block depth dataset as ground truth and trained a Pix2Pix Generative Adversarial Networks model that
                    can generate new depth maps given customized block layout inputs.
                    Applied this model on various geometric styles to convey innovative concepts of modern architecture and city
                    planning.
                </p>
                <p className="info-paragraph project-link" onClick={()=> window.open("https://recreate-manhattan.jiangjing.io/", "_blank")}>
                    Visit <br />
                    <b>https://recreate-manhattan.jiangjing.io/</b>
                </p>
            </div>
            
        </div>
    )
}

function ProjectFishPomodoro() {

    return (
        <div>
            <h3 style={styles.projNum}><span style={styles.projNumSpan}>2.Pomodoro App with Fish-Collecting Gamification</span></h3>
            <div className="timer-emoji">&#x23F1;
                <p className="fish-emoji-1">&#x1F41F;</p>
                <p className="fish-emoji-2">&#x1F420;</p>
            </div>
            <div className="overlay">                
                <h3 className="title-placeholder">2.Pomodoro App with Fish-Collecting Gamification</h3>
                <p className="info-paragraph">
                Following Agile Development approaches, developed a smartphone application that features Pomodoro studying
                techniques, with gamification that enables users to collect animated fish as rewards when they finish studying cycles.
                </p>
                <p className="info-paragraph">
                Used React Native as framework, together with Expo. Used Google Firebase for user authentication and database.
                </p>
                <p className="info-paragraph project-link" onClick={()=> window.open("https://tempo-873ec.web.app/", "_blank")}>
                    Prototype deployed on <br />
                    <b>https://tempo-873ec.web.app/</b>
                </p>
            </div>
        </div>
    )
}

function ProjectStoryGen() {
    return (
        <div>
            {/* <h3 style={styles.projNum}><span style={styles.projNumSpan}>3.</span></h3> */}
            {/* <img className="project-3-img" src={project3} alt="Project 3" /> */}
            <h3>3.Multimodal Story Generation on Plural Images</h3>
            <p className="info-paragraph paper-paragraph">
                <span style={styles.abstract}>Abstract&nbsp;</span>Traditionally, the text generation models take in a sequence of text as input, and iteratively generate
                the next most probable word using pre-trained parameters. In this work, we propose the architecture
                to use images instead of text as the input of the text generation model, called StoryGen. In the
                architecture, we design a Relational Text Data Generator algorithm that relates different features from
                multiple images. The output samples from the model demonstrate the ability to generate meaningful
                paragraphs of text containing the extracted features from the input images.
            </p>
            <p className="info-paragraph project-link paper-paragraph" onClick={()=> window.open("https://arxiv.org/abs/2001.10980", "_blank")}>
                Report on this project available on: <br />
                <b>https://arxiv.org/abs/2001.10980</b>
            </p>
        </div>
    )
}

function ProjectCard({proj}) {
    return (
        <div className="card-style card-hover">
            {proj === "recreate-manhattan" && <ProjectManhattan />}
            {proj === "fish-pomodoro" && <ProjectFishPomodoro />}
            {proj === "story-gen" && <ProjectStoryGen />}
        </div>
    );
}


export default ProjectCard;