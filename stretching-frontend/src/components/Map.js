import React , {useEffect} from "react";
import KakaoMapScript from "./KakaoMapScript";
import '../style/Map.css';


const Map=()=>{
    useEffect(() => {
        KakaoMapScript();
    }, []);

    return (
    <div id="map">
        
    </div> 
    );
};

export default Map;