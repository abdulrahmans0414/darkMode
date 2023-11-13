const moonPath = "M28 51.5C28 79.1142 50 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C50 0 28 23.8858 28 51.5Z";
const sunPath = "M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z";

const darkMode = document.querySelector("#darkmode");
let toggle = false;

darkMode.addEventListener("click", () => {
    const timeline = anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
    });

    timeline.add({
        targets: ".sun",
        d: [{ value: toggle ? sunPath : moonPath }]
    })
        .add({
            targets: "#darkmode",
            rotate: toggle ? 0 : 320
        }, "-=320")
        .add({
            targets: "section",
            backgroundColor: toggle ? "rgb(233, 233, 233)" : "rgb(22, 22, 22)",
            color: toggle ? "rgb(22, 22, 22)" : "rgb(233, 233, 233)"
        }, "-=700");


    if (!toggle) {
        toggle = true;
    } else {
        toggle = false;
    }

});