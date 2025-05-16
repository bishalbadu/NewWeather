const apiKey = "7a2d3f7b49482de53426db26068662e6";
           const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
           const icon ="https://openweathermap.org/img/wn" 
  
      const searchBox = document.querySelector(".search input");
      const searchBtn = document.querySelector(".search button");
      const weatherIcon = document.querySelector("#icon");
      
      
      async function checkWeather(city){
          const response = await fetch(apiUrl + city +` &appid=${apiKey}`);  
          var data = await response.json();
          let iconCheck = `${icon}/${data.weather[0].icon}@2x.png`
          console.log(iconCheck)
          console.log (data); 
  
          document.querySelector (".city").innerHTML = data.name;
          document.querySelector (".temp").innerHTML = data.main.temp + "°C";
          document.querySelector ("#h-name").innerHTML = data.main.humidity + "%";
          document.querySelector ("#w-name").innerHTML = data.wind.speed + " km/h";
          document.querySelector (".date").innerHTML = data.dt*1000;
          document.querySelector (".six").innerHTML = data.main.pressure
          
          document.querySelector("#icon").innerHTML = `<img src=${iconCheck}>`
          const timeStamp = data.dt * 1000;
        const date = new Date(timeStamp);
        const options = {
            weekday: "long", 
            year: "numeric",
            month: "short",
            day: "numeric",
        };
        const formattedDate = date.toLocaleDateString ("en-us",options);
        // console.log(formattedDate)
        document.querySelector (".date").innerHTML = formattedDate
  
          
      }
      searchBtn.addEventListener("click", () => {
          checkWeather(searchBox.value);
      })
      
      checkWeather("New Forest");
  