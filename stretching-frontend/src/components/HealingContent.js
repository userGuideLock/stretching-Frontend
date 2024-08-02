import React, { useState, useEffect } from "react";
import axios from "axios";
import '../style/HealingContent.css';

const HealingContent = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        const instance = axios.create({
            baseURL: 'https://hermi.danjam.site/api/v1/spots',
            timeout: 500000,
            headers: {
                "Cache-Control": "no-cache",
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
        });

        const success = (position) => {
            var lat = position.coords.latitude;
            var lng = position.coords.longitude;
            getposition(lat, lng);
        }

        function error() {
            alert("현재 위치를 가져올 수 없음");
        }

        if (!navigator.geolocation) {
            alert("브라우저가 위치 정보를 지원하지 않음");
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }

        function getposition(lat, lng) {
            try {
                const response = instance.get('', {
                    params: {
                        username: "ksb",
                        x_pos: lng,
                        y_pos: lat
                    }
                });
                response.then(response => {
                    var text = response.data.healingContentText;
                    setText(text);
                })
            } catch (e) {
                console.error(e);
            }
        }
    }, []);

    return (
        <div className="healing-content" id="healing-content">
            <h1>오늘의 힐링 🥰</h1>
            <div>
                <span id='titleText'>오늘 하루도 정말 고생 많으셨어요!</span>
            </div>
            <div>
                <span id='Text'>오늘 하루 마무리는, '{text}' </span>
            </div>
            <div>
                <span id='subText'>어떠신가요?</span>
            </div>
        </div>
    );

}

export default HealingContent;