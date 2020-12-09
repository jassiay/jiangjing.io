import React from 'react';
import '../styles.css';

function About() {
    return (
        <div>
            <p className="info-paragraph">
                Hello! I currently live in Evanston, IL. 
            </p>
            <p className="info-paragraph">
                I am studying as a master's student in Computer Science at Northwestern University, Evanston, IL.
                And I gained my bachelor’s degree at the Cooper Union, New York, NY, majored in Electrical Engineering and minored in Computer Science.
            </p>
            <p className="info-paragraph">
                Through my education and experience, I have gained an excellent amount of knowledge regarding software engineering.
                I became experienced in full-stack development and agile workflow after I finished several projects. 
                In addition, I am equipped with huge amount of knowledge on machine learning and AI.
            </p>
        </div>
    );
}

function Skills() {
    return (
        <div>
            <h1 className="info-skill-title">ABILITIES</h1>
            <h3>Programming Languages</h3>
            <p className="info-paragraph">
                Java, Python, JavaScript/HTML/CSS,
                C/C++, Swift, SQL, GoLang, TypeScript
            </p>

            <h3>Frameworks</h3>
            <p className="info-paragraph">
                For Full-Stack Development: NodeJS, React, React Native <br />
                For Machine Learning: TensorFlow, PyTorch
            </p>

            <h3>Development Tools</h3>
            <p className="info-paragraph">
                Visual Studio Code, Jupyter Notebook, IntelliJ, DataGrip, PyCharm, Expo
            </p>
        </div>
    );
}


function InfoCard({info}) {
    return (
        <div className="card-style">
            {info === "about" && <About />}
            {info === "skills" && <Skills />}
        </div>
    );
}


export default InfoCard;