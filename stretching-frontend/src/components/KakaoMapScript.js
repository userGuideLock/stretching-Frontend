import axios from 'axios';
const { kakao } = window;

export default function KakaoMapScript() {
    // 마커 이미지의 이미지 주소
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

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


    const success = (position) => {
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        getposition(lat, lng); //현재 좌표를 받기 위해서 함수 호출(변수범위문제로, 좌표를 인자로 전달)
    }

    function error() {
        alert("현재 위치를 가져올 수 없음");
    }

    if (!navigator.geolocation) {
        alert("브라우저가 위치 정보를 지원하지 않음");
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

    function getposition(lat, lng) {
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(lat, lng), //현재 위치의 좌표를 넣음.
            level: 6 //지도의 레벨(확대, 축소 정도)
        };

        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        try {
            const response = instance.get('', {
                params: {
                    username: "ksb",
                    x_pos: lng,
                    y_pos: lat
                }
            });
            response.then(response => {
                var positions = response.data.categoryPlaces;
                for (var i = 0; i < positions.length; i++) {
                    // 마커 이미지의 이미지 크기 입니다
                    var imageSize = new kakao.maps.Size(24, 35);
                    var latLng=new kakao.maps.LatLng(Number(positions[i].y), Number(positions[i].x));
                    // 마커 이미지를 생성합니다    
                    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
                    //console.log(new kakao.maps.LatLng(Number(positions[i].x), Number(positions[i].y)));
                    // 마커를 생성합니다
                    var marker = new kakao.maps.Marker({
                        map: map, // 마커를 표시할 지도
                        position: latLng, // 마커를 표시할 위치
                        title: positions[i].place_name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                        image: markerImage // 마커 이미지 
                    });
                }
            })
        } catch (e) {
            console.error(e);
        }

    }

}   
