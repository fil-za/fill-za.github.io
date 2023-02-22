mapboxgl.accessToken = "pk.eyJ1IjoiZm5nbGFzZ293IiwiYSI6ImNsY3ExN21zdzAxaDkzb3FmODJuM241aHoifQ.FCiZCi04eN2fdGV8_T0Dxg";

// Define a map object by initialising a Map from Mapbox
const map = new mapboxgl.Map({
  container: "map",
  //style URL.
  style: "mapbox://styles/fnglasgow/cldhv7csd001s01rnf1oq5942",
        center: [-3.188267, 55.953251],
      zoom: 11
  });

//Navigation control

map.addControl(new mapboxgl.NavigationControl(), "top-right");

//Current location control
map.addControl(new mapboxgl.GeolocateControl());





/*POPUP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/


//POPUP ID!!!!!!!!!!!!!!!!!!!!!!!!!!!
const popup = new mapboxgl.Popup({ offset: [0, -15], className: "my-popup" });


/*event listener that runs when a user moves over the map element.*/
map.on('mousemove', (event) => {
// If the usermouse moves overon the markers, they get information.


  
  const features = map.queryRenderedFeatures(event.point, {
  layers: ['library-mobile-days'] // layer name  
});
if (!features.length) {
  return;
}
const feature = features[0]; 
  
/*popup, specified options and properties*/
popup
  .setLngLat(feature.geometry.coordinates)
  .setHTML(
    `<h3> ${feature.properties.library_na}</h3>
   <p> Time & Day: ${feature.properties.opening_ho}</p>
   <p>Address: ${feature.properties.address}</p>`
   )
   .addTo(map);
  
});

/*event listener that runs to wait
when the mouse leaves a feature*/
map.on("mouseleave", "library-mobile-days", (event) => {
  popup.remove();



/*CODE ATTEMPT TO MAKE RADIO BUTTON!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
filterType = ["!=", ["get", "opening_days"], "placeholder"];
  // Filter by Type
 document.getElementById("filters").addEventListener("change", (event) => {
    const type = event.target.value;
    console.log(type);
    if (type == "all") {
      filterType = ["!=", ["get", "opening_days"], "placeholder"];
    } else if (type == "Mondays") {
      filterType = ["==", ["get", "opening_days"], "Mondays"];
    } else if (type == "Tuesdays") {
      filterType = ["==", ["get", "opening_days"], "Tuesdays"];
    } else if (type == "E. Wednesdays") {
      filterType = ["==", ["get", "opening_days"], "Wednesdays"];
    } else if (type == "Thursdays") {
      filterType = ["==", ["get", "opening_days"], "Thursdays"];
    } else if (type == "Fridays") {
      filterType = ["==", ["get", "opening_days"], "Fridays"];

    } else {
      console.log("error");
    }
    map.setFilter("library-mobile-days", ["all", filterType]);*/

});