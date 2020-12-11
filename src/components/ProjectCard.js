import React from 'react';
import '../styles.css';

import project1 from '../assets/project_1.png';

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
    cursorDefault: {
        cursor: 'default'
    },
    modifyOverflow: {
        overflow: 'visible'
    }
};

function ProjectManhattan() {
    return (
        <div className="card-style card-hover" onClick={()=> window.open("https://recreate-manhattan.jiangjing.io/", "_blank")}>
            <h3 style={styles.projNum}><span>1.Recreate-Manhattan: Reimagine a City using Deep Learning</span></h3>
            <img className="project-img" src={project1} alt="Project 1" />
            <div className="overlay">
            </div>
            
        </div>
    )
}

function ProjectFishPomodoro() {
    return (
        <div className="card-style card-hover" style={{...styles.cursorDefault, ...styles.modifyOverflow}}>
            <h3 style={styles.projNum}><span style={styles.projNumSpan}>2.Pomodoro App with Fish-Collecting Gamification</span></h3>
            <div className="timer-emoji">&#x23F1;
                <p className="fish-emoji-1">&#x1F41F;</p>
                <p className="fish-emoji-2">&#x1F420;</p>
            </div>
            <div className="overlay">                
                <h3 className="title-placeholder">2.Pomodoro App with Fish-Collecting Gamification</h3>
                <p className="info-paragraph more-detail">
                Following Agile Development approaches, developed a smartphone application that features Pomodoro studying
                techniques, with gamification that enables users to collect animated fish as rewards when they finish studying cycles.
                <br />
                Used React Native as framework, together with Expo. Used Google Firebase for user authentication and database.
                <br />
                Prototype deployed on:
                <br />
                <b className="project-link" onClick={()=> window.open("https://tempo-873ec.web.app/", "_blank")}>https://tempo-873ec.web.app/</b>
                </p>
            </div>
        </div>
    )
}

function ProjectStoryGen() {
    return (
        <div className="card-style card-hover" onClick={()=> window.open("https://arxiv.org/abs/2001.10980", "_blank")}>
            <h3>3.Multimodal Story Generation on Plural Images</h3>
            <p className="info-paragraph paper-paragraph">
                <span style={styles.abstract}>Abstract&nbsp;</span>Traditionally, the text generation models take in a sequence of text as input, and iteratively generate
                the next most probable word using pre-trained parameters. In this work, we propose the architecture
                to use images instead of text as the input of the text generation model, called StoryGen. In the
                architecture, we design a Relational Text Data Generator algorithm that relates different features from
                multiple images. The output samples from the model demonstrate the ability to generate meaningful
                paragraphs of text containing the extracted features from the input images.
            </p>
            <p className="info-paragraph project-link paper-paragraph">
                Report on this project available on: <br />
                <b>https://arxiv.org/abs/2001.10980</b>
            </p>
        </div>
    )
}

function ProjectCard({proj}) {
    return (
        <div>
            {proj === "recreate-manhattan" && <ProjectManhattan />}
            {proj === "fish-pomodoro" && <ProjectFishPomodoro />}
            {proj === "story-gen" && <ProjectStoryGen />}
        </div>
    );
}


export default ProjectCard;
