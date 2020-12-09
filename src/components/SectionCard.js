import React, {useEffect, useRef} from 'react';
import '../styles.css';
import Typed from 'typed.js';

import resumePDF from '../assets/Resume Jing Jiang.pdf';

const styles = {
    resumeCard: {
        fontFamily: `'DM Serif Display', serif`,
        textAlign: 'center'
    },
    workCard: {
        textAlign: 'left',
    },
    workCardH1: {
        marginLeft: 80,
    },
    contactItems: {
        fontFamily: `'Inconsolata', serif`,
        fontWeight: 600,
        fontSize: '1.3rem',
    },
    contactComment: {
        color: '#6a9955'
    },
    emailLine: {
        marginLeft: '4rem'
    }
};

function Contact() {
    const typeTarget = useRef(null);

    useEffect(() => {
        const typed = new Typed(typeTarget.current, {
            strings: ["Reach me out by:"],
            typeSpeed: 80,
            backSpeed: 50,
            showCursor: false,
            loop: true,
            backDelay: 1800,
            startDelay: 500,
        });
        
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div style={styles.contactItems}>
            <span style={styles.contactComment}>&lt;!-- <span ref={typeTarget} /> --&gt;</span> <br />
            <p>&lt;Contact&gt;</p>
            <p style={styles.emailLine}>
                <a href="mailto: jingjiang2021@u.northwestern.edu">&lt;Email&nbsp;&#47;&gt;</a> <br />
                <a href="https://www.linkedin.com/in/jiangj97/" target="_blank">&lt;LinkedIn&nbsp;&#47;&gt;</a> <br />
                <a href="https://github.com/jassiay" target="_blank">&lt;GitHub&nbsp;&#47;&gt;</a> <br />
            </p>
            <p>&lt;&#47;Contact&gt;</p>
        </div>
    );
}

function Resume() {
    return (
        <div style={styles.resumeCard}>
            <a href={resumePDF} target="_blank" className="resume-card">
                <h1><span>View</span></h1>
                <h1><span>My</span></h1>
                <h1><span>RÉSUMÉ</span></h1>
            </a>
        </div>
    );
}

function Work() {
    return (
        <div style={styles.workCard}>
            <div className="triangle-br"></div>
            <h1 style={styles.workCardH1}>Selected</h1>
            <h1 style={styles.workCardH1}>Works</h1>
            <h1 style={styles.workCardH1}>&rarr;</h1>
        </div>
    );
}

function SectionCard({title}) {
    return (
        <div className="card-style">
            {title === "resume" && <Resume />}
            {title === "work" && <Work />}
            {title === "contact" && <Contact />}
        </div>
    );
}


export default SectionCard;