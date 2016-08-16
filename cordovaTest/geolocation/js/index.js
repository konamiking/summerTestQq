

summerready = function(){
    // here is your code...	
    var y = $summer.offset($summer.byId('header')).h;
    var width = $summer.offset(document.getElementsByTagName("body")[0]).w;		
    var height = $summer.offset($summer.byId('main')).h;

    summer.openFrame({
        name: 'main',
        url: 'html/main.html',
        bounces: true,
        rect: {
            x: 0,
            y: y,
            w: width,
            h: height
        }
    });
    navigator.geolocation.getCurrentPosition(onSuccess);
}

var onSuccess = function(position) {
	alert('Latitude: '          + position.coords.latitude          + '\n' +
		'Longitude: '         + position.coords.longitude         + '\n' +
		'Altitude: '          + position.coords.altitude          + '\n' +
		'Accuracy: '          + position.coords.accuracy          + '\n' +
		'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
		'Heading: '           + position.coords.heading           + '\n' +
		'Speed: '             + position.coords.speed             + '\n' +
		'Timestamp: '         + new Date(position.timestamp)      + '\n');
};
