const searchbox = document.querySelector('.city-input');
searchbox.addEventListener('keypress', setQuery);

const city_name = document.querySelector('.city-name')
const current_temp = document.querySelector('.current-temp')
const current_description = document.querySelector('.current-descrption')
const body = document.querySelector('body')
var icon_code
var weatherCurrently
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  function getResults (query) {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&units=imperial&appid=5670cb22608853cc7531a1aa12630f5e`)
      .then(weather => {
        return weather.json();
      }).then(displayForeCast);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=5670cb22608853cc7531a1aa12630f5e`)
      .then(currentweather => {
        weatherCurrently = currentweather
        return currentweather.json()
      }).then(displayResultsForCurrent, displayForeCast)
  }
  
  function displayResultsForCurrent (currentweather) {
    city_name.innerHTML = currentweather.name + ', ' + currentweather.sys.country
    current_temp.innerHTML = Math.floor(currentweather.main.temp)
    current_description.innerHTML = currentweather.weather[0].main

    dayzero = new Date()
    let dayzeroday = weekday[dayzero.getDay()];
    document.querySelector('.day0 .day').innerHTML = dayzeroday
    document.querySelector('.day0 .weather').innerHTML = Math.floor(currentweather.main.temp) + ' °F'
    document.querySelector('.day0 img').src = "http://openweathermap.org/img/w/" + currentweather.weather[0].icon + ".png"
    
    icon_code = currentweather.weather[0].icon

    if(icon_code == "04d") {
        body.style.backgroundImage = "url('Images/04d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Broken Clouds"
        body.style.color = "black"
    }
    
    if (icon_code == "04n") {
        body.style.backgroundImage = "url('Images/04n.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Broken Clouds"
        body.style.color = "white"
    }

    if(icon_code == "01d") {
        body.style.backgroundImage = "url('Images/01d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Mostly Clear"
        body.style.color = "black"
    }

    if(icon_code == "01n") {
        body.style.backgroundImage = "url('Images/01n.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Mostly Clear"
        body.style.color = "white"
    }

    if(icon_code == "02d") {
        body.style.backgroundImage = "url('Images/02d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Few Clouds"
        body.style.color = "black"
    }

    if(icon_code == "02n") {
        body.style.backgroundImage = "url('Images/02n.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Few Clouds"
        body.style.color = "white"
    }

    if(icon_code == "03d") {
        body.style.backgroundImage = "url('Images/03d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Scattered Clouds"
        body.style.color = "black"
    }

    if(icon_code == "03n") {
        body.style.backgroundImage = "url('Images/03n.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Scattered Clouds"
        body.style.color = "white"
    }

    if(icon_code == "09d") {
        body.style.backgroundImage = "url('Images/09d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Light Rain"
        body.style.color = "black"
    }

    if(icon_code == "09n") {
        body.style.backgroundImage = "url('Images/09n.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Light Rain"
        body.style.color = "white"
    }

    if(icon_code == "10d") {
        body.style.backgroundImage = "url('Images/10d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Heavy Rain"
        body.style.color = "black"
    }

    if(icon_code == "10n") {
        body.style.backgroundImage = "url('Images/10n.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Heavy Rain"
        body.style.color = "white"
    }

    if(icon_code == "11d") {
        body.style.backgroundImage = "url('Images/11d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Thunderstorm"
        body.style.color = "black"
    }

    if(icon_code == "11n") {
        body.style.backgroundImage = "url('Images/11n.jpeg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Thunderstorm"
        body.style.color = "white"
    }

    if(icon_code == "13d") {
        body.style.backgroundImage = "url('Images/13d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Snowing"
        body.style.color = "black"
    }

    if(icon_code == "13n") {
        body.style.backgroundImage = "url('Images/13n.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Snowing"
        body.style.color = "white"
    }

    if(icon_code == "50d") {
        body.style.backgroundImage = "url('Images/50d.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Mist"
        body.style.color = "black"
    }

    if(icon_code == "50n") {
        body.style.backgroundImage = "url('Images/50n.jpg')"
        body.style.backgroundRepeat = "no-repeat"
        body.style.backgroundSize = "100%"
        current_description.innerHTML = "Mist"
        body.style.color = "white"
    }
  }

  function displayForeCast(weather, currentweather) {

    dayone = new Date(weather.list[0].dt_txt)
    let dayoneday = weekday[dayone.getDay()]
    document.querySelector('.day1 .day').innerHTML = dayoneday
    document.querySelector('.day1 .weather').innerHTML = Math.floor(weather.list[0].main.temp) + ' °F'
    document.querySelector('.day1 img').src = "http://openweathermap.org/img/w/" + weather.list[0].weather[0].icon + ".png"

    daytwo = new Date(weather.list[8].dt_txt)
    let daytwoday = weekday[daytwo.getDay()]
    document.querySelector('.day2 .day').innerHTML = daytwoday
    document.querySelector('.day2 .weather').innerHTML = Math.floor(weather.list[8].main.temp) + ' °F'
    document.querySelector('.day2 img').src = "http://openweathermap.org/img/w/" + weather.list[8].weather[0].icon + ".png"

    daythree = new Date(weather.list[16].dt_txt)
    let daythreeday = weekday[daythree.getDay()]
    document.querySelector('.day3 .day').innerHTML = daythreeday
    document.querySelector('.day3 .weather').innerHTML = Math.floor(weather.list[16].main.temp) + ' °F'
    document.querySelector('.day3 img').src = "http://openweathermap.org/img/w/" + weather.list[16].weather[0].icon + ".png"

    dayfour = new Date(weather.list[24].dt_txt)
    let dayfourday = weekday[dayfour.getDay()]
    document.querySelector('.day4 .day').innerHTML = dayfourday
    document.querySelector('.day4 .weather').innerHTML = Math.floor(weather.list[24].main.temp) + ' °F'
    document.querySelector('.day4 img').src = "http://openweathermap.org/img/w/" + weather.list[24].weather[0].icon + ".png"

    dayfive = new Date(weather.list[32].dt_txt)
    let dayfiveday = weekday[dayfive.getDay()];
    document.querySelector('.day5 .day').innerHTML = dayfiveday
    document.querySelector('.day5 .weather').innerHTML = Math.floor(weather.list[32].main.temp) + ' °F'
    document.querySelector('.day5 img').src = "http://openweathermap.org/img/w/" + weather.list[32].weather[0].icon + ".png"
  }
