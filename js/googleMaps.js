/* Google maps get marker */
var subdivisionName = $('.subdiv-name');
var subdivisionTitle = "Филиал \"Владимир\"";
var address = "город Владимир Строителей пр-т. Дом 20а корп. Автофакел";
subdivisionName.on('click', function(e){
    e.preventDefault();
    address = $(this).find('.city').text();
    subdivisionTitle = $(this).find('h3').text();
    initMap();
});

function geocodeAddress(address,geocoder, resultsMap) {
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
                title: subdivisionTitle
            });
        } else {
            alert('Адрес не распознан' + status);
        }
    });
}

function initMap() {
    try{
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
        });
    }catch(e){
        console.log(e.message);
    }

    var geocoder = new google.maps.Geocoder();
    geocodeAddress(address, geocoder, map);
};
initMap();