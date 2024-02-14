let cities = [
    " إختار إسم المدينه/المحافظه/الولايه ",
    " القاهره ",
    " الإسكندريه ",
    " البحر الأحمر",
    " دمياط ",
    " الدقهلية ",
    " البحيرة ",
    " الفيوم ",
    " الغربية ",
    " الإسماعيلية ",
    " الجيزة ",
    " المنُوفيّة ",
    " القليوبية ",
    " الأقصر ",
    " السويس ",
    " الشرقية ",
    " أسوان ",
    " أسيوط ",
    " بني سويف ",
    " بورسعيد ",
    "  كفر الشيخ ",
    " سوهاج ",
];
const citiesSelect = document.getElementById("cities_selected");

for (let city of cities) {
    const option = document.createElement("option");
    option.setAttribute("id", "translated-text");
    option.textContent = city;
    citiesSelect.appendChild(option);
}

citiesSelect.addEventListener('change', (event) => {
    const selectedCity = event.target.value;
    document.getElementById("name_city").innerText = selectedCity;
    if(selectedCity.value == "القاهره"){
        getPrayersTimngsOfCity("cairo")
    }
});


function getPrayersTimngsOfCity(cityName) {
    let params = {
        country: "EG",
        city: cityName //"C"
    };
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params: params
    })
        .then(function (response) {
            const timings = response.data.data.timings;

            fillTimeForPrayer("Fajr_time", timings.Fajr);
            fillTimeForPrayer("Sunrise_time", timings.Sunrise);
            fillTimeForPrayer("Dhuhr_time", timings.Dhuhr);
            fillTimeForPrayer("Asr_time", timings.Asr);
            fillTimeForPrayer("Maghrib_time", timings.Maghrib);
            fillTimeForPrayer("Isha_time", timings.Isha);

            const readableDate = response.data.data.date.readable;
            const weekDay = response.data.data.date.hijri.weekday.ar;
            const date = weekDay + " " + readableDate;
            document.getElementById("newDate").innerHTML = date;
        })
        .catch(function (error) {
            console.log(error);
        });
}
getPrayersTimngsOfCity("C");

function fillTimeForPrayer(id, time) {
    document.getElementById(id).innerHTML = time;
}
