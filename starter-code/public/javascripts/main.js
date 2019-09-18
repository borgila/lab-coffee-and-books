window.onload = () => {
  const madrid = {
    lat: 40.392449,
    lng: -3.697465,
  };

  const markers = [];

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: madrid,
  });

  axios.get('/map')
    .then(({ data }) => {
      data.forEach((place) => {
        new google.maps.Marker({
          position: {
            lat: place.location.coordinates[1],
            lng: place.location.coordinates[0],
          },
          title: place.name,
          map,
        });
      });
    });
};