import React from "react";
import '../style/HealingContent.css';

const HealingContent = () => {

    return (
        <div className="healing-content" id="healing-content">
            <h1>오늘의 힐링 🥰</h1>
            <div>
                <span id='titleText'>오늘 하루도 정말 고생 많으셨어요!</span>
            </div>
            <div>
                <span id='Text'>스트레스 해소를 위해 힐링여행을 떠나보시는건 </span>
            </div>
            <div>
                <span id='subText'>어떠신가요? ✈️✨</span>
            </div>
        </div>
    );

}

export default HealingContent;