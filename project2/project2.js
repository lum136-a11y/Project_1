// radiobutton
const radios = document.querySelectorAll('.radio input');
let index = 0;

function autoSwitch() {
    radios[index].checked = true;

    index++;
    if (index >= radios.length) index = 0;

    setTimeout(autoSwitch, 1500);
}

autoSwitch();

// slider
const sliders = document.querySelectorAll(".slider");

function animateSlider(slider, callback) {
    let value = 0;

    function animate() {
        value += 0.25;

        if (value >= slider.max) {
            slider.value = slider.max;

            if (callback) callback();
            return;
        }

        slider.value = value;
        requestAnimationFrame(animate);
    }

    animate();
}

// 建立「連鎖動畫」
function runSequence(index = 0) {
    if (index >= sliders.length) return;

    animateSlider(sliders[index], () => {
        runSequence(index + 1); // 👉 下一個
    });
}
// 開始
runSequence();

   
const select = document.getElementById("cars");
let ex = 0;

function autoSelect() {
    select.selectedIndex = ex; // 選中對應的 option

    ex++;
    if (ex >= select.options.length) {
        ex = 0; // 循環回到第一個
    }

    setTimeout(autoSelect, 1000); // 每秒切換一次
}

// 啟動
autoSelect();







