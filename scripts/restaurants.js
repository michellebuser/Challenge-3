mapboxgl.accessToken = 'pk.eyJ1IjoibWljaGVsbGVidXNlciIsImEiOiJjazhyODduZ2swMG10M2VwbHloZWkzYjJpIn0.bBlxB7Cbl3pZ4_Xl7dsbiw'; 

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  pitch: 0, 
  bearing: 0,  
  center: [4.8907281, 52.3681041], 
  zoom: 11.5,
});

map.addControl(new mapboxgl.NavigationControl());

var popup = new mapboxgl.Popup().setHTML('La Grande Brasserie Bodon, Apollolaan 2, Amsterdam');
var marker = new mapboxgl.Marker()
   .setLngLat([4.8843996, 52.3485097])
   .setPopup(popup)
   .addTo(map);


var popup = new mapboxgl.Popup().setHTML('Restaurant Rijks, Museumstraat 2, Amsterdam');
var marker = new mapboxgl.Marker()
   .setLngLat([4.8821179, 52.359608])
   .setPopup(popup)
   .addTo(map);


var popup = new mapboxgl.Popup().setHTML('Restaurant C, Wibautstraat 125 Amsterdam');
var marker = new mapboxgl.Marker()
   .setLngLat([4.910482, 52.35461])
   .setPopup(popup)
   .addTo(map);   
  
var popup = new mapboxgl.Popup().setHTML('Happy Italy, Zuidelijke Wandelweg 78, Amsterdam');
var marker = new mapboxgl.Marker()
   .setLngLat([4.887086, 52.3598127]) 
   .setPopup(popup)
   .addTo(map);


var popup = new mapboxgl.Popup().setHTML('Gebr. Hartering, Peperstraat 10-hs Amsterdam');
var marker = new mapboxgl.Marker()
   .setLngLat([4.9074787, 52.3716897])
   .setPopup(popup)
   .addTo(map);  


var popup = new mapboxgl.Popup().setHTML('Le Restaurant, Frans Halsstraat 26-h Amsterdam');
var marker = new mapboxgl.Marker()
   .setLngLat([4.8865559, 52.3578743])
   .setPopup(popup)
   .addTo(map);


var popup = new mapboxgl.Popup().setHTML('The Lobby, Nesplein, Amsterdam');
var marker = new mapboxgl.Marker()
   .setLngLat([4.8914939, 52.3710356])
   .setPopup(popup)
   .addTo(map);  


var popup = new mapboxgl.Popup().setHTML('New King, Zeedijk 115-117, Amsterdam');
var marker = new mapboxgl.Marker()
   .setLngLat([4.8980941, 52.3736051])
   .setPopup(popup)
   .addTo(map);  

var popup = new mapboxgl.Popup().setHTML('La Cubanita, Binnen Bantammerstraat 9, Amsterdam');
var marker = new mapboxgl.Marker()
   .setLngLat([4.9020589, 52.3738113])
   .setPopup(popup)
   .addTo(map);  

var popup = new mapboxgl.Popup().setHTML('Water & Brood, Nieuwe Kerkstraat 84, Amsterdam');
var marker = new mapboxgl.Marker()
   .setLngLat([4.9057291, 52.3641322])
   .setPopup(popup)
   .addTo(map);  





