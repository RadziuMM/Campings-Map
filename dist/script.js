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
      zoom: 6.8,
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

let HomeStatus = 0;
let MapStatus = 1;
let AboutStatus = 0;
let AddStatus = 0;
let ContactStatus = 0;

function check() {
  if (AboutStatus === 1) {
    document.getElementById('about').style.display = 'flex';
  } else {
    document.getElementById('about').style.display = 'none';
  }
  if (MapStatus === 1) {
    document.getElementById('map').style.display = 'block';
  } else {
    document.getElementById('map').style.display = 'none';
  }
  if (AddStatus === 1) {
    document.getElementById('add').style.display = 'flex';
  } else {
    document.getElementById('add').style.display = 'none';
  }
  if (ContactStatus === 1) {
    document.getElementById('contact').style.display = 'block';
  } else {
    document.getElementById('contact').style.display = 'none';
  }
  if (HomeStatus === 1) {
    document.getElementById('Home').style.display = 'inline-block';
  } else {
    document.getElementById('Home').style.display = 'none';
  }
}

function homestatus() {
  HomeStatus = 1;
  MapStatus = 0;
  AboutStatus = 0;
  AddStatus = 0;
  ContactStatus = 0;
  check();
}
function mapstatus() {
  HomeStatus = 0;
  MapStatus = 1;
  AboutStatus = 0;
  AddStatus = 0;
  ContactStatus = 0;
  check();
}
function aboutstatus() {
  HomeStatus = 0;
  MapStatus = 0;
  AboutStatus = 1;
  AddStatus = 0;
  ContactStatus = 0;
  check();
}
function addstatus() {
  HomeStatus = 0;
  MapStatus = 0;
  AboutStatus = 0;
  AddStatus = 1;
  ContactStatus = 0;
  check();
}
function contactstatus() {
  HomeStatus = 0;
  MapStatus = 0;
  AboutStatus = 0;
  AddStatus = 0;
  ContactStatus = 1;
  check();
}
