// function getPrayersTimingsOfCity(city) {
   
//     const params = {
//         city: city
//     };

//     axios.get('https://silver.tripu.net/api/v1/countries?api_secret_key=jUAagpsIyoao79imzgMPUTD1hMExtM6I', {
//         params: params
//     })
//     .then(response => {
     
//         // console.log(response.data.data['0']['cities']);
//         // console.log(response.data.data[0]['id']);

//         const Country = response.data.data['0']['name'];
//         const cities = response.data.data['0']['cities'];
//         const selectElement = document.getElementById('cities_selected');
//         const countryNameElement = document.getElementById('name_city');
//         countryNameElement.textContent = Country;
        
//         selectElement.innerHTML = '';

        
//         cities.forEach(city => {
//             const option = document.createElement('option');
//             option.text = city.name;
//             option.value = city.id; // يمكنك استخدام قيمة مختلفة إذا كان هناك قيمة مميزة للمدينة تحتاجها
//             selectElement.appendChild(option);
//         });
//     })
//     .catch(error => {
  
//         console.error('حدث خطأ في الاستجابة:', error);
//     });
// }

// getPrayersTimingsOfCity('اسم الدوله');

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
        country: "SA",
        city: cityName
    };
   const headers = {
    "Content-Type": "application/json",
  };
    axios.get('https://api.aladhan.com/v1/timingsByCity', {
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



