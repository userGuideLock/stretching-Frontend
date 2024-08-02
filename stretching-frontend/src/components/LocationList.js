import React, {useEffect} from 'react';
// import LocationItem from './LocationItem';
import '../style/LocationList.css';

//test 더미데이터
//나중에 좌표값, id값 기반으로 추출한 데이터를 저장해서 사용할 예정
//key값들도 여러개 추가할 예정
const locations = [
    {
        title: '모과나무골 막국수 이야기',
        description: '세종특별자치시 조치원읍 모과나무4길 19',
        tags: ['#한식', '#막국수'],
        image: '/stretching-frontend/src/assets/food.png', // Replace with actual image paths
    },
    {
        title: '씨티팝',
        description: '세종특별자치시 조치원읍 내창3길 19',
        tags: ['#치킨', '#펍'],
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
    // useEffect(()=>{
    //     let moveUrl = document.getElementById('location-list');
    //     moveUrl.addEventListener('click',()=>{
    //         window.open('https://map.kakao.com/link/map/18577297', '_blank', 'noopener,noreferrer');
    //     });
    // });

    // return (
    //     <div className="location-list" id='location-list'>
    //         {locations.map((location, index) => (
    //             <LocationItem key={index} location={location} />
    //         ))}
    //     </div>
    // );
};

export default LocationList;