var numberWinner = Math.floor(Math.random() * 36);

var wheel = $(".wheel"),
    active = $(".active"),
    numberOutput = $("#numberOutput"),
    currentRotation,
    lastRotation,
    tolerance;

numberOutput.html('?');

var $btnPlay = $("#btnPlay"),
    $btnSlowMo = $("#btnStop");

// wheel
var getter = gsap.getProperty(wheel[0]);
InertiaPlugin.track(wheel[0], "rotation");

var spinWheel = gsap.timeline({ paused: true });

spinWheel
    .to(wheel, {
        rotation: 360,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
    })

function startSpin() {
    numberOutput.html('?');
    spinWheel.play().timeScale(0)
    gsap.to(spinWheel, { timeScale: 1, duration: 2, ease: "power3.in" });
    setTimeout(() => {
        stopSpin();
    }, 10000)
}

var spin_box = $('#spin_box');

function stopSpin() {
    gsap.to(spin_box, {
        scale: 3,
        duration: 1,
        marginTop: '90vh',
        left: '5vw',
        ease: "power3.in"
    });

    let angleIndex = segment.findIndex(function (item) {
        return item.segmentName == numberWinner;
    });

    var stopAt = segment[angleIndex].angle + 1440 - 33;

    spinWheel.pause();

    gsap.to(wheel, {
        inertia: {
            rotation: {
                end: stopAt
            }
        },
        onComplete: () => {
            gsap.to(spin_box, {
                duration: 1,
                marginTop: '10vh',
                left: '0vw',
                scale: 1,
                ease: "power3.in",
                delay: 3,
                onComplete: () => {
                    numberOutput.html(numberWinner);
                    initTimeToLeft();
                    numberWinner = Math.floor(Math.random() * 36);
                }
            });
        }
    });
}