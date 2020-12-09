import React, {useEffect, useRef, useState} from 'react';
import '../styles.css';
import Typed from 'typed.js';

function PrimaryCard() {
    const typeTarget = useRef(null);
    const [typeHandler, setTypeHandler] = useState(true);
    const [isTypingFinished, setIsTypingFinished] = useState(false);

    useEffect(() => {
        setIsTypingFinished(false);
        const typed = new Typed(typeTarget.current, {
            strings: ["DEVELOPER。", "THINKER。", "BUILDER。"],
            typeSpeed: 80,
            backSpeed: 50,
            showCursor: false,
            loop: false,
            backDelay: 1800,
            startDelay: 200,
            shuffle: false,
            onComplete: () => {
                setIsTypingFinished(true);
            }
        });
        
        return () => {
            typed.destroy();
        };
    }, [typeHandler]);

    const playTypedText = () => {
        if(isTypingFinished === true) {
            setTimeout(()=> {
                setTypeHandler(!typeHandler);
            }, 1000);
        }
    }

    return (
        <div className="card-style" onMouseEnter={playTypedText}>
            <div style={styles.contentArea}>
                <h1>JING JIANG,</h1>
                <h1 style={styles.typedText}>A_<span ref={typeTarget} /></h1>
            </div>
            <div style={styles.contentArea}>
            </div>
        </div>
    );
}

const styles = {
    contentArea: {
        margin: '2rem',
        backgroundColor: '#e0e0e0',
    },
    typedText: {
        marginLeft: 0
    }
};

export default PrimaryCard;