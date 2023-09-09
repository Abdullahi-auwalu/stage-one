function getCurrentDay() {
        let currentDate = new Date();
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let currentDayIndex = currentDate.getDay();
        let currentDayName = days[currentDayIndex];
    
        let utcHours = currentDate.getUTCHours();
        let utcMinutes = currentDate.getUTCMinutes();
        let utcSeconds = currentDate.getUTCSeconds();
    
        // Ensure single-digit minutes and seconds are displayed with leading zeros
        utcMinutes = utcMinutes < 10 ? "0" + utcMinutes : utcMinutes;
        utcSeconds = utcSeconds < 10 ? "0" + utcSeconds : utcSeconds;
    
        let utcTime = utcHours + ":" + utcMinutes + ":" + utcSeconds;
    
        document.getElementById("currentDay").innerHTML = currentDayName;
        document.getElementById("utcTime").innerHTML = utcTime;
    }
    
    window.onload = getCurrentDay;