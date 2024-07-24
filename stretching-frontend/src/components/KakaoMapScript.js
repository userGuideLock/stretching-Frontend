const { kakao } = window;

export default function KakaoMapScript() {
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // 마커가 표시될 위치입니다 
    // var markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    // 마커를 표시할 위치와 title 객체 배열입니다 
    var positions = [
        {
            title: '카카오',
            latlng: new kakao.maps.LatLng(33.450705, 126.570677)
        },
        {
            title: '생태연못',
            latlng: new kakao.maps.LatLng(33.450936, 126.569477)
        },
        {
            title: '텃밭',
            latlng: new kakao.maps.LatLng(33.450879, 126.569940)
        },
        {
            title: '근린공원',
            latlng: new kakao.maps.LatLng(33.451393, 126.570738)
        }
    ];

    // 마커 이미지의 이미지 주소
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i ++) {
    
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions[i].latlng, // 마커를 표시할 위치
            title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage // 마커 이미지 
        });
    }

    // 마커를 생성합니다
    // var marker = new kakao.maps.Marker({
    //     position: markerPosition,
    //     clickable: true //마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않음
    // });

    // 아래코드는 clickable : true 와 같이
    // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    // marker.setClickable(true);

    // 마커가 지도 위에 표시되도록 설정합니다
    // marker.setMap(map);

    // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
    // marker.setMap(null); 

    // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성
    // var iwContent = '<div style=padding:5px;"> 여기는 어떠신가요?</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능
    //     iwRemoveable = true; // 인포윈도우를 닫을 수 있는 x 버튼 표시

    //infowindow 생성
    // var infowindow = new kakao.maps.InfoWindow({
    //     content: iwContent,
    //     removable: iwRemoveable
    // });

    //마커에 클릭이벤트 생성
    // kakao.maps.event.addListener(marker, 'click', function () {
    //     //마커 위에 인포윈도우를 표시
    //     infowindow.open(map, marker);
    //     //id 값 기반으로 좌표이동 url
    //     window.open('https://map.kakao.com/link/map/18577297', '_blank', 'noopener,noreferrer');
    // })
}   