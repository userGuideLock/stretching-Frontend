import React, {useEffect} from 'react';
import LocationItem from './LocationItem';
import '../style/LocationList.css';

const locations = [
    {
        title: '모과나무골 막국수 이야기',
        description: 'Description',
        tags: ['Tags'],
        image: '../assets/food.png', // Replace with actual image paths
    },
    {
        title: '씨티팜',
        description: 'Description',
        tags: ['Tags'],
        image: 'path/to/image2.jpg',
    },
    {
        title: '둔덕골영광보리밥',
        description: '세종 연기면 국사길 22',
        tags: ['#주차', '#건강식', '#한식'],
        image: 'path/to/image3.jpg',
    },
];

const LocationList = () => {
    useEffect(()=>{
        let moveUrl = document.getElementById('location-list');
        moveUrl.addEventListener('click',()=>{
            window.open('https://map.kakao.com/link/map/18577297', '_blank', 'noopener,noreferrer');
        });
    });

    return (
        <div className="location-list" id='location-list'>
            {locations.map((location, index) => (
                <LocationItem key={index} location={location} />
            ))}
        </div>
    );
};

export default LocationList;