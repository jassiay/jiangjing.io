import React from 'react';
import '../styles.css';

import profilePic from '../assets/profile_pic.png';

const styles = {
    modifyOverflow: {
        overflow: 'visible'
    }
};

function PrimaryCard() {
    return (
        <div className="card-style" style={styles.modifyOverflow}>
            <div className="name-area">
                <h1>JING</h1>
                <h1>JIANG</h1>
            </div>
            <img className="profile-pic" src={profilePic} alt="Profile Picture" />
        </div>
    );
}

export default PrimaryCard;