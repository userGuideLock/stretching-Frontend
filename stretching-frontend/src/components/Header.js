import React from 'react';
import '../style/Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>스트레칭</h1>
            <p id='titleText'>오늘의 피로를 풀어줄 힐링 스팟 추천</p>
            <p id='Text'>오늘도 고생 많았어요. 저녁의 작은 행복을 더해줄 특별한 장소를 추천합니다.</p>
        </div>
    );
};

export default Header;