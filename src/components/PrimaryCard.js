import React from 'react';
import '../styles.css';

import profilePic from '../assets/profile_pic.png';

const styles = {
    contentArea: {
        backgroundColor: '#e0e0e0',
    },
    profilePicStyle: {
        marginTop: '5rem',
        marginRight: '5rem',
        float: 'right',
        height: 150,
        width: 150,
        borderRadius: '50%',
        boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.5)'
    }
};

function PrimaryCard() {
    return (
        <div className="card-style">
            <div style={styles.contentArea}>
                <h1>JING</h1>
                <h1>JIANG</h1>
            </div>
            <img style={styles.profilePicStyle} src={profilePic} alt="Profile Picture" />

        </div>
    );
}

export default PrimaryCard;