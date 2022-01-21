
 /* active link */
 
 let links = document.querySelectorAll(" li a");
links.forEach(link => {
    link.addEventListener('click', function () {
        links.forEach(a => a.classList.remove('active'));
        this.classList.add('active');        
    });
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#Navbar'
  })




// map
navigator.geolocation.getCurrentPosition(function(pos){
    initMap(pos.coords.latitude,pos.coords.longitude)
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
})
let map;
function initMap(lat,lng) {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: +lat, lng: +lng },
    zoom: 20,
  });
}

