let cities = {
    "الدقهلية": "Dakahlia",
    "البحر الأحمر": "BA",
    "البحيرة": "Beheira",
    "الفيوم": "Faiyum",
    "الغربية": "Gharbia",
    "الإسكندرية": "Alexandria",
    "الإسماعيلية": "Ismailia",
    "الجيزة": "Giza",
    "المنُوفيّة": "Monufia",
    "المنيا": "Minya",
    "القاهرة": "Cairo",
    "القليوبية": "Qalyubia",
    "الأقصر": "Luxor",
    "الوادي الجديد": "WAD",
    "السويس": "Suez",
    "الشرقية": "Al Sharqia",
    "أسوان": "Aswan",
    "أسيوط": "Asyut",
    "بني سويف": "BNS",
    "بورسعيد": "PTS"
};

for (let city in cities) {
    if (cities.hasOwnProperty(city)) {
        const contact = `
        <option>${city}</option>`;
        document.getElementById("cities_selected").innerHTML += contact;
    }
}

document.getElementById("cities_selected").addEventListener('change', function() {
    const selectedCity = this.value.trim();
    document.getElementById("name_city").innerHTML = selectedCity;
    if (selectedCity in cities) {
        getPrayersTimingsOfCity(cities[selectedCity]);
    }
});

function getPrayersTimingsOfCity(cityName) {
    let params = {
        country: "EG",
        city: cityName
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

// Initial call with a default city
getPrayersTimingsOfCity(" القاهرة ");

function fillTimeForPrayer(id, time) {
    document.getElementById(id).innerHTML = time;
}

