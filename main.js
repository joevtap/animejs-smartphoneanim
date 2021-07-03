const PhoneTl = anime.timeline({
    easing: "easeOutExpo",
    duration: 5000,
});

PhoneTl.add({
    targets: [".phone_svg"],
    easing: "spring(1, 80, 10, 0)",
    opacity: [0, 1],
    scale: [1.1, 1],
    duration: 300,
})
    .add(
        {
            targets: ["#Go", "#SearchBar"],
            duration: 700,
            easing: "easeOutExpo",
            translateX: [-50, 0],
            delay: anime.stagger(200),
            opacity: [0, 1],
        },
        "-=800"
    )
    .add(
        {
            targets: ["#Img01", "#Img02", "#Img03", "#Img04", "#Graph"],
            duration: 700,
            easing: "easeOutExpo",
            translateY: [20, 0],
            delay: anime.stagger(200),
            opacity: [0, 1],
        },
        "-=500"
    )
    .add(
        {
            targets: ["#Control"],
            duration: 700,
            easing: "easeOutExpo",
            opacity: [0, 1],
        },
        "-=400"
    )
    .add(
        {
            targets: ["#GraphPath"],
            duration: 300,
            easing: "easeOutExpo",
            keyframes: [
                { opacity: 0 },
                { opacity: 0 },
                { opacity: 1 },
                { opacity: 0 },
                { opacity: 1 },
            ],
        },
        "-=500"
    );

window.addEventListener("scroll", () => {
    PhoneTl.seek((window.scrollY / window.innerHeight) * PhoneTl.duration);
});
