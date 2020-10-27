<template>
    <div>
      <div id="map"></div>
      </div>
</template>

<script>
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-loop-func */
/* eslint-disable camelcase */
let map;
let cords;
let cordsnumber;
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default {
  name: 'Map',
  created() {
    const Http = new XMLHttpRequest();
    const url = 'https://campingmap.herokuapp.com/get';
    Http.open('GET', url);
    Http.send();
    Http.onreadystatechange = () => {
      try {
        const obj = JSON.parse(Http.responseText);
        cords = obj;
        cordsnumber = cords.length;
        cordsnumber = cords.length;
      } catch (e) {
        // clear error
      }
    };

    wait(1000).then(() => {
      map = new google.maps.Map(document.getElementById('map'),
        {
          center: { lat: 52.237049, lng: 20.017532 },
          zoom: 6,
        });
      for (let i = 0; i < cordsnumber; i += 1) {
        const contentString = `${'<div id="content">'
            + '<div id="siteNotice">'
            + '</div>'
            + '<h4 id="firstHeading" class="firstHeading">'}${cords[i].place}</h4>`
            + `<div id="bodyContent">${cords[i].description}</div>`
            + '</div>';
        const infowindow = new google.maps.InfoWindow({
          content: contentString,
        });
        const marker = new google.maps.Marker({ position: cords[i], map });
        marker.addListener('click', () => {
          infowindow.open(map, marker);
        });
      }
    });
  },
};
</script>

<style lang="scss" >
    #map{
        height: 50vh;
    }
</style>
