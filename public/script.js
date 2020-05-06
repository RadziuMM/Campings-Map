/* eslint-disable no-use-before-define */
/* eslint-disable camelcase */
/* eslint-disable no-loop-func */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let map;
let cords;
let cordsnumber;
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Http = new XMLHttpRequest();
const url = 'https://servermongomarkers.herokuapp.com/get';
Http.open('GET', url);
Http.send();

Http.onreadystatechange = () => {
  const obj = JSON.parse(Http.responseText);
  cords = obj;
  cordsnumber = cords.length;
};
function initMap() {
  wait(2000).then(() => {
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 52.237049, lng: 20.017532 },
      zoom: 6,
    });
    for (let i = 0; i < cordsnumber; i += 1) {
      const contentString = `${'<div id="content">'
                + '<div id="siteNotice">'
                + '</div>'
                + '<h4 id="firstHeading" class="firstHeading">'}${cords[i].place}</h4>`
                + `<div id="bodyContent">${
                  cords[i].description
                }</div>`
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
}
function add() {
  const newLocation__lat = document.getElementById('input__lat').value;
  const newLocation__lng = document.getElementById('input_lng').value;

  const cord = {
    lat: Number(newLocation__lat),
    lng: Number(newLocation__lng),
  };
  cords.push(cord);
}
