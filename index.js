const currentDate = new Date();

        const dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "WednesDay", "Thursday", "Friday"];

        const currentDay = dayOfTheWeek[currentDate.getUTCDay()];
        const utcTime = currentDate.toUTCString().substring(16, 22);

        document.getElementById("currentDay").textContent = currentDay
        document.getElementById("utcTime").textContent = utcTime