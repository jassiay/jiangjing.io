import React from 'react';
import '../styles.css';

const styles = {
    footer: {
        marginBottom: 10,
        marginTop: '-2rem',
        color: 'grey',
        textAlign: 'center'
    },
};


function Footer() {
    return (
        <div style={styles.footer}>
            &copy; Jing Jiang 2020
        </div>
    );
}


export default Footer;