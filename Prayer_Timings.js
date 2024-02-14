let cities = [
    " إختار إسم المدينه/المحافظه/الولايه ",
    " الدقهلية ",
    " البحر الأحمر ",
    " البحيرة ",
    " الفيوم ",
    "الغربية",
    " الإسكندريه ",
    " الإسماعيلية ",
    " الجيزة ",
    " المنُوفيّة ",
    " المنيا ",
    " القاهره ",
    " القليوبية ",
    " الأقصر ",
    " الوادي الجديد ",
    " السويس ",
    " الشرقية ",
    " أسوان ",
    " أسيوط ",
    " بني سويف ",
    " بورسعيد ",
    " دمياط ",
    " جنوب سيناء ",
    "  كفر الشيخ ",
    " مطروح ",
    " قنا ",
    " شمال سيناء ",
    " سوهاج "
];
document.getElementById("cities_selected");

for (let city of cities) {
    const contact = `
    <option>${city}</optiion>
    `
    document.getElementById("cities_selected").innerHTML += contact;
}

document.getElementById("cities_selected").addEventListener('change', () => {
    
    if(this.value == "الدقهلية"){
        getPrayersTimngsOfCity("Dakahlia")
    }else if(this.value == "البحر الأحمر"){
        getPrayersTimngsOfCity("BA")
    }
    console.log(this.value)
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
getPrayersTimngsOfCity("Dakahlia");

function fillTimeForPrayer(id, time) {
    document.getElementById(id).innerHTML = time;
}
