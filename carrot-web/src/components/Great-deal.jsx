import { Container } from "react-bootstrap";
import "./All.css";

const Greatdeal = () => {

    const updateTimer = (deadline) => {
        var time = deadline - new Date();
        return {
            'days :': Math.floor(time / (1000 * 60 * 60 * 24)),
            'hours :': Math.floor((time / (1000 * 60 * 60)) % 24),
            'minutes :': Math.floor((time / 1000 / 60) % 60),
            'seconds :': Math.floor((time / 1000) % 60),
            'total :': time
        };
    }

    const animateClock = (span) => {
        span.className = "flip";
        setTimeout(function () {
            span.className = "";
        }, 700);
    }

    const startTimer = (id, deadline) => {
        var timerInterval = setInterval(function () {
            var clock = document.getElementById(id);
            var timer = updateTimer(deadline);
            console.log(timer);
            clock.innerHTML = '<span>' + timer.days + '</span>' +
                '<span>' + timer["hours :"] + '</span>' +
                '<span>' + timer["minutes :"] + '</span>' +
                '<span>' + timer["seconds :"] + '</span>';
            var spans = clock.getElementsByTagName("span");
            animateClock(spans[3]);
            if (timer["seconds :"] == 59) animateClock(spans[2]);
            if (timer["minutes :"] == 59 && timer["seconds :"] == 59) animateClock(spans[1]);
            if (timer["hours :"] == 24 && timer["minutes :"] == 59 && timer["seconds :"] == 59) animateClock(spans[0]);

            if (timer["total :"] < 1) {
                clearInterval(timerInterval);
                clock.innerHTML = '<span>0</span><span>0</span><span>0</span><span>0</span>';
            }
        }, 1000);
    }

    window.onload = function () {
        var deadline = new Date("January 5, 2025 00:00:00");
        startTimer("clock", deadline);
    };

    return (
        <>
            <div className="position-relative mt-5">
                <div className="greatdeal-image ">
                    <img
                        src="/public/bg-deal.jpg"
                        alt="Basket of Vegetables"
                        className="img-fluid"
                    />
                </div>
                <Container>
                    <div data-aos="fade-up" data-aos-duration="2000" className="btoom-50 border greatdeal-contant p-3">
                        <h2><span className="text-success fs-bold me-2">35%</span><small className="fs-5">OFF</small></h2>
                        <h2>Great deal on organic food.</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br />do maecenas accumsan lacus vel facilisis.</p>
                        <div id="main" className="border m-4 p-2">
                            <span className="dia1">Días</span>
                            <span className="dia2">Hrs</span>
                            <span className="dia3">Min</span>
                            <span className="dia4">Seg</span>
                            <div id="clock"></div>
                            <div id="display"></div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Greatdeal;