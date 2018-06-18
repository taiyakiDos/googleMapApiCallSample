var map;
var marker = [];
var info = [];
var markerData = [];
var jsonData = [];

function initMap() {
    // 地図の作成
    var uluru = {lat: 34.985408, lng: 135.758055};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru,
        gestureHandling: 'cooperative'
    });
}

function getData(json) {
    jsonData = JSON.stringify(json);

    // マーカー毎の処理
    markerData = jsonData;
    var iconBase = 'img/';
    
    for (var i=0, len=markerData.length; i<len; i++) {
        uluru = new google.maps.LatLng({lat: markerData[i]['lat'], lng: markerData[i]['lng']});
        // マーカーの追加
        marker[i] = new google.maps.Marker({
            position: uluru,
            map: map
        });
        if (markerData[i]['icon'].length > 0) {
            // マーカーの画像を変更
            marker[i].setOptions({
                icon: {
                    url: 'img/'+markerData[i]['icon']
                }
            });
        }
        // クリック時に開く infoウィンドウ の追加
        info[i] = new google.maps.InfoWindow({
            content: '<div class="sample">'+markerData[i]['name']+'</div>'
        });
        // マーカーのクリックイベントを追加
        markerClickEvent(i);
    }
}

// マーカーのクリックイベント
function markerClickEvent(i) {
    marker[i].addListener('click', function() {
        info[i].open(map, marker[i]);
    });
}
