//위치 정보기반으로 주변 힐링스팟을 가져오는 api
import axios from "axios";
import React, { useState, useEffect } from "react";
import LocationItem from "./LocationItem";


const Positions = () => {
    const [positions, setPositions] = useState([]);
    const [lat,setLat]=useState(0);
    const [lng,setLng]=useState(0);

    // const success = (position) => {
    //     var lat = position.coords.latitude;
    //     var lng = position.coords.longitude;
    //     setLat(lat);
    //     setLng(lng); //현재 좌표를 받기 위해서 함수 호출(스코프 문제로, 좌표를 인자로 전달)
    // }

    function error() {
        alert("현재 위치를 가져올 수 없음");
    }

    // if (!navigator.geolocation) {
    //     alert("브라우저가 위치 정보를 지원하지 않음");
    // } else {
    //     navigator.geolocation.getCurrentPosition(success, error);
    // }

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

        // function getposition(lat, lng) {
            try {
                const response = instance.get('', {
                    params: {
                        username: "ksb",
                        x_pos: 127.2855931,
                        y_pos: 36.6090228
                    }
                });
                response.then(response => {
                    var positions = response.data.categoryPlaces;
                    setPositions(positions);
                })
            } catch (e) {
                console.error(e);
            }
        // }
    }, []);

    return (
        <div id='location-list'>
            {positions && positions.map((position, index) => (
                <LocationItem key={index} position={position}></LocationItem>
            ))}
        </div>
    );

}

export default Positions;