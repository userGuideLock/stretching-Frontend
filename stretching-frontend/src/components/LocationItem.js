import React from 'react';
import '../style/LocationItem.css';

//장소정보들의 기본정보 세팅
const LocationItem = ({ location }) => {   

    return (
        <div className="location-item" id="location-item">
            <img src={require('../assets/food.png')} className="location-image" />
            <div className="location-info">
                <h3 className="location-title">{location.title}</h3>
                <p className="location-description">{location.description}</p>
                <p className="location-tags">{location.tags.join(' ')}</p>
            </div>
            <div className="location-arrow">›</div>
        </div>
    );
};

export default LocationItem;