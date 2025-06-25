const apiKey = 'be66611773df5a6ca91456fa0d038a0c';


async function getWeather() {


    const city = document.getElementById("city").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fa`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.cod === 200) {
            // نمایش اطلاعات وضعیت آب و هوا
            const cityName = data.name;
            const time = data.time;
            const temp = Math.round(data.main.temp);
            const description = data.weather[0].description;

            document.getElementById("city-name").textContent = `وضعیت آب و هوا در ${cityName}`;
            document.getElementById("time").textContent = `${time}`;
            document.getElementById("temperature").textContent = `${temp}°C`;
            document.getElementById("description").textContent = description;
            document.getElementById("city").value = '';
            if (description.textContent !== "افتابی") {
                document.querySelector('.sun3').classList.add('hiden');
            }
        } else {
            alert("شهر یافت نشد! لطفاً نام صحیح شهر را وارد کنید.");
        }
    } catch (error) {
        alert("خطا در دریافت داده‌ها. لطفاً دوباره تلاش کنید.");
    }
}

function darkMode() {
    const style1 = document.querySelector('.style');
    const swich = document.querySelector('.swich');
    let icon = document.querySelector('i');
    document.querySelector('.style').classList.toggle('darrk');

    if (style1.classList.contains('darrk')) {
        icon.classList.replace('bi-brightness-low-fill', 'bi-moon-fill')
        icon.classList.add('td');
        style1.classList.add('td1');
        icon.style.color = "white";


    } else {
        icon.classList.replace('bi-moon-fill', 'bi-brightness-low-fill');
        swich.classList.remove('td');
        icon.style.color = "gold";
    }
}
