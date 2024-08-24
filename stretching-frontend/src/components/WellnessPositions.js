import axios from "axios";
import { useState,useEffect } from "react";
import WellnessItem from "./WellnessItem";


const WellnessPositions=()=>{
    const [programs, setPrograms]=useState([]);
    const [lat,setLat]=useState(0);
    const [lng,setLng]=useState(0);

    // const success = (position) => {
    //     var lat = position.coords.latitude;
    //     var lng = position.coords.longitude;
    //     setLat(lat);
    //     setLng(lng);
    // }

    function error() {
        alert("현재 위치를 가져올 수 없음");
    }

    // if (!navigator.geolocation) {
    //     alert("브라우저가 위치 정보를 지원하지 않음");
    // } else {
    //     navigator.geolocation.getCurrentPosition(success, error);
    // }

    useEffect(()=>{
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
    
        const fetchPrograms=async()=>{
            try {
                const response = instance.get('', {
                    params: {
                        username: "ksb",
                        x_pos: 127.718571,
                        y_pos: 37.8812166
                    }
                });

                const allPlaces = [];
                response.then(response => {
                    response.data.results.forEach(result => {
                        allPlaces.push(...result.places); // Merge all places into one array
                    });
                    setPrograms(allPlaces);
                })

            } catch (e) {
                console.error(e);
            }
        }
        fetchPrograms();
        // }
    },[]);

    return (
        // <div id='program-list'>
        //     {programs && programs.map((program, index) => (
        //         <WellnessItem key={index} program={program}></WellnessItem>
        //     ))}
        // </div>
        <div id='program-list'>
            {programs.length > 0 ? (
                programs.map((program, index) => (
                    <WellnessItem key={index} program={program} />
                ))
            ) : (
                <p>No programs available</p> // Fallback content
            )}
        </div>
    );

}

export default WellnessPositions;