var map;
var marker = [];
var info = [];
var jsonData;

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
    // JSON文字列化
    jsonData = JSON.stringify(json, undefined, 4);
    // JSON文字列をJSONオブジェクト化
    var jsonObj = JSON.parse(jsonData);

    var iconBase = 'img/';

    for (var i=0,len=jsonObj.length; i<len; i++) {
        uluru = new google.maps.LatLng({lat: jsonObj[i]['lat'], lng: jsonObj[i]['lng']});
        // マーカーの追加
        marker[i] = new google.maps.Marker({
            position: uluru,
            map: map
        });
        if (jsonObj[i]['icon'].length > 0) {
            // マーカーの画像を変更
            marker[i].setOptions({
                icon: {
                    url: iconBase + jsonObj[i]['icon']
                }
            });
        }
        // クリック時に開く infoウィンドウ の追加
        info[i] = new google.maps.InfoWindow({
            content: '<div class="sample">'+jsonObj[i]['name']+'</div>'
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
