import React from 'react';
import '../style/LocationItem.css';

//장소정보들의 기본정보 세팅
const LocationItem = ({ position }) => {   

    return (
        <div className="location-item" id="location-item" onClick={()=>{
            window.open(position.place_url, '_blank', 'noopener,noreferrer');
        }}>
            <img src={require('../assets/icon.png')} className="location-image" />
            <div className="location-info">
                <h3 className="location-title">{position.place_name}</h3>
                <p className="location-description">{position.address_name}</p>
                <p className="location-tags">{position.category_name}</p>
            </div>
            <div className="location-arrow">›</div>
        </div>
    );
};

export default LocationItem;