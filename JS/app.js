const APIKEY = '9d395ff2722cb69016adf66d2ea8a1ae';

/* Calling API Open Weather with City name */
let apiCall = function(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
    fetch(url)
    .then ((response) =>
        response.json().then((data) => {
            console.log(data);
            document.querySelector('#city').innerHTML = data.name;
            document.querySelector('#temp').innerHTML = data.main.temp + ' °C';
            document.querySelector('#description').innerHTML = data.weather[0].description;
            document.querySelector('#wind').innerHTML = data.wind.speed + ' km/h';
        })
    )
    .catch((err) => document.querySelector('#msg-alert').innerHTML = "Mauvais orthographe ! ");
}


/* Event listenner form */
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let ville = document.querySelector('#inputCity').value;

    apiCall(ville);
});

/* Default Page */
apiCall('Valetta');