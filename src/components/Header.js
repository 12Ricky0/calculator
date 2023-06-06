import React, { useState } from "react";

function Header() {


    const [sliderValue, setSliderValue] = useState(1)


    const handleSliderChange = (event) => {
        const value = parseInt(event.target.value);
        const num = document.querySelectorAll(".numbers")


        if (value === 2) {
            setSliderValue(2)
            document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
            document.querySelector(".delete").classList.add("theme-2")
            document.querySelector(".keys-container").style.backgroundColor = "hsl(0, 5%, 81%)";
            document.querySelector(".input-display").style.backgroundColor = "hsl(0, 0%, 93%)";
            document.querySelector(".input-display").style.color = "hsl(198, 20%, 13%)";
            document.querySelector(".reset").classList.add("theme-2");
            document.querySelector(".equal").classList.add("theme-2a");
            document.querySelector("h1").style.color = "hsl(198, 20%, 13%)";
            document.querySelector("span").style.color = "hsl(198, 20%, 13%)";
            document.querySelector(".toggle-count").style.color = "hsl(198, 20%, 13%)";
            num.forEach(number => { number.classList.remove("theme-3") });
            document.querySelector(".form-range").classList.add("slider-theme2");


            // Remove Previous Classes
            document.querySelector(".form-range").style.background = "hsl(0, 5%, 81%)";
            document.querySelector(".delete").classList.remove("theme-3a")
            document.querySelector(".reset").classList.remove("theme-3a");
            document.querySelector(".equal").classList.remove("theme-3b");
            document.querySelector(".form-range").classList.remove("slider-theme1");



        }

        else if (value === 3) {
            setSliderValue(3)
            document.body.style.backgroundColor = " hsl(268, 75%, 9%)";
            document.querySelector(".delete").classList.add("theme-3a")
            document.querySelector(".keys-container").style.backgroundColor = "hsl(268, 71%, 12%)";
            document.querySelector(".input-display").style.backgroundColor = "hsl(268, 71%, 12%)";
            document.querySelector(".input-display").style.color = "hsl(52, 100%, 62%)";
            document.querySelector(".reset").classList.add("theme-3a");
            document.querySelector(".equal").classList.add("theme-3b");
            document.querySelector("h1").style.color = "hsl(52, 100%, 62%)";
            document.querySelector("span").style.color = "hsl(52, 100%, 62%)";
            document.querySelector(".toggle-count").style.color = "hsl(52, 100%, 62%)";
            document.querySelector(".form-range").style.background = "hsl(268, 71%, 12%)";
            num.forEach(number => { number.classList.add("theme-3") });
            document.querySelector(".form-range").classList.add("slider-theme1");
            document.querySelector(".form-range").classList.remove("slider-theme2");




        }

        else if (value === 1) {
            setSliderValue(1)
            document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
            document.querySelector(".keys-container").style.backgroundColor = "hsl(223, 31%, 20%)";
            document.querySelector(".input-display").style.backgroundColor = "hsl(224, 36%, 15%)";
            document.querySelector(".input-display").style.color = "white";
            document.querySelector("h1").style.color = "white";
            document.querySelector("span").style.color = "white";
            document.querySelector(".toggle-count").style.color = "white";

            num.forEach(number => { number.classList.remove("theme-3") })




            // Remove Previous Classes
            document.querySelector(".form-range").style.background = "hsl(0, 5%, 81%)";
            document.querySelector(".delete").classList.remove("theme-3a")
            document.querySelector(".reset").classList.remove("theme-3a");
            document.querySelector(".equal").classList.remove("theme-3b");

            document.querySelector(".delete").classList.remove("theme-2")
            document.querySelector(".reset").classList.remove("theme-2");
            document.querySelector(".equal").classList.remove("theme-2a");
            document.querySelector(".form-range").classList.remove("slider-theme1");
            document.querySelector(".form-range").classList.remove("slider-theme2");




        }

    };

    return (
        <header>
            <h1 className="cal">calc</h1>
            <div className="right">
                <span className="theme">THEME</span>
                <div className="toggle">
                    <span className="toggle-count">123</span>
                    <input type="range" class="form-range" min="1" max="3" id="customRange2"
                        value={sliderValue}
                        onChange={handleSliderChange}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;