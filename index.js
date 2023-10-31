fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
        document.getElementById("city").textContent = data.location.name
        console.log(data)
    })
    .catch(err => {
        console.error(err)
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1566419808810-658178380987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg3NTI2OTh8&ixlib=rb-4.0.3&q=80&w=1080)`
        document.getElementById("author").textContent = `By: Hamail Hassan`
    })

navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available")
            }
            return res.json()
        })
        .then(data => {
            document.getElementById("temp-el").textContent = `${Math.round(data.main.temp)}°`
            document.getElementById("location-el").textContent = data.name
        })
        .catch(err => console.error(err))
    })



    function updateTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
      
        const formattedHours = hours % 12 || 12;
      
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
      
        const currentTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
      
        document.getElementById('clock').textContent = currentTime;
      }
      
      updateTime();
      setInterval(updateTime, 60000);