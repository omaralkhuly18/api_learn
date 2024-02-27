// async function showTitles() {
//     await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById("title1").style.display = "block";
//             resolve();
//         }, 1000);
//     })

//     await new Promise((resolve) => {
//         setTimeout(() => {
//             document.getElementById("title2").style.display = "block";
//             resolve();
//         }, 1000);
//     });

//     await new Promise((resolve) => {
//         setTimeout(() => {
//             document.getElementById("title3").style.display = "block";
//             resolve();
//         }, 1000);
//     });
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             document.getElementById("title4").style.display = "block";
//             resolve();
//         }, 1000);
//     });
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             document.getElementById("title5").style.display = "block";
//             document.getElementById("title5").style.top = "145%";
//             resolve();
//         }, 200);
//     });
// }

// async function opacityTitles() {
//     await new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.getElementById("title1").style.display = "none";
//             resolve();
//         }, 500);
//     })

//     await new Promise((resolve) => {
//         setTimeout(() => {
//             document.getElementById("title2").style.display = "none";
//             resolve();
//         }, 500);
//     });

//     await new Promise((resolve) => {
//         setTimeout(() => {
//             document.getElementById("title3").style.display = "none";
//             resolve();
//         }, 500);
//     });
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             document.getElementById("title4").style.display = "none";
//             resolve();
//         }, 500);
//     });
//     await new Promise((resolve) => {
//         setTimeout(() => {
//             document.getElementById("title5").style.display = "none";
//             document.getElementById("title5").style.top = "145%";
//             resolve();
//         }, 200);
//     });
// }

async function showTitles() {
    const titleIds = ["title1", "title2", "title3", "title4", "title5"];

    for (const titleId of titleIds) {
        const titleElement = document.getElementById(titleId);
        if (titleElement) {
            titleElement.style.display = "block";
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

async function opacityTitles() {
    const titleIds = ["title1", "title2", "title3", "title4", "title5"];

    for (const titleId of titleIds) {
        const titleElement = document.getElementById(titleId);
        if (titleElement) {
            titleElement.style.display = "none";
            await new Promise(resolve => setTimeout(resolve, 500));
        }
    }
}
