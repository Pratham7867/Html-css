const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function circleshrink() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {

        xscale = gsap.utils.clamp(.8, 1.2, (dets.clientX - xprev) / 100 + 1)
        yscale = gsap.utils.clamp(.8, 1.2, (dets.clientY - yprev) / 100 + 1)

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale, yscale, dets)
    })

    function circleMouseFollower(xscale, yscale, dets) {
        window.addEventListener("mousemove", function (dets) {
            // console.log(dets);
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
        });
    }
}
circleshrink();
// circleMouseFollower();

document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;

    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3.easeOut,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot),
            duration: 0.5 // Add duration for smooth transition
        });
    });

    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3.easeOut,
            duration: 0.5 // Add duration for smooth transition
        });
    });
});
