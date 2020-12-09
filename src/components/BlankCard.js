import React from 'react';
import '../styles.css';

function BlankCard({twoCol, threeCol, fourCol}) {

    const classNameList = {
        // showCard: "card-style card-blank",
        situa1: "hide-card-three-col card-style card-blank",
        situa2: "hide-card-four-col hide-card-two-col card-style card-blank",
        situa3: "hide-card-two-col card-style card-blank",
        situa4: "hide-card-two-col hide-card-three-col card-style card-blank",
    };

    return (
        <div className={(twoCol && fourCol)? classNameList.situa1 : 
            (threeCol && fourCol)? classNameList.situa3 : 
            threeCol? classNameList.situa2 : classNameList.situa4}>

        </div>
    );
}


export default BlankCard;