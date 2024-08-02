import React , {useEffect} from "react";
import WellnessMapScript from "./WellnessMapScript";
import '../style/WellnessMap.css';

const WellnessMap=()=>{
    useEffect(() => {
        WellnessMapScript();
    }, []);

    return (
        <div id="wellnessMap">
            
        </div> 
    );
};

export default WellnessMap;