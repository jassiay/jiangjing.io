import React from 'react';
import '../styles.css';

const styles = {
    footer: {
        marginBottom: 10,
        color: 'grey',
        textAlign: 'center'
    },
};


function Header() {
    return (
        <div style={styles.footer}>
            &copy; Jing Jiang 2020
        </div>
    );
}


export default Header;