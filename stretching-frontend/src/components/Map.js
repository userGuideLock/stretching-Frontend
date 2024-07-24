import React , {useEffect} from "react";
import KakaoMapScript from "./KakaoMapScript";


const Map=()=>{
    useEffect(() => {
        KakaoMapScript();
    }, []);

    return (
    <div id="map" style={{
        width: '381px',
        height: '400px'
    }}></div> 
    );
};

export default Map;