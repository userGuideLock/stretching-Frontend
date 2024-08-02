import { useState } from "react";
import WellnessPositions from "./WellnessPositions";
import WellnessMapScript from "./WellnessMapScript";

const CurrentPositions = () => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const success = (position) => {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        setLatitude(lat);
        setLongitude(lng);
    }

    function error() {
        alert("현재 위치를 가져올 수 없음");
    }

    if (!navigator.geolocation) {
        alert("브라우저가 위치 정보를 지원하지 않음");
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

}

export default CurrentPositions;