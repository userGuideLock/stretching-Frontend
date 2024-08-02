import React from "react";
import '../style/WellnessItem.css';

const WellnessItem = ({ program }) => {

    return (
        <div className="program-item" id="program-item" onClick={() => {
            window.open(program.place_url, '_blank', 'noopener,noreferrer');
        }}>
            <img src={require('../assets/icon.png')} className="program-image" />
            <div className="program-info">
                <h3 className="program-title">{program.place_name}</h3>
                <p className="program-description">{program.address_name}</p>
                <p className="program-tags">{program.category_name}</p>
            </div>
            <div className="program-arrow">›</div>
        </div>
    );
}

export default WellnessItem;