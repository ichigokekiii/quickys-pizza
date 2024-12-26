const container = document.getElementById('container');
const togRegisterBtn = document.getElementById('toggle-register-btn');
const togLoginBtn = document.getElementById('toggle-login-btn');

togRegisterBtn.addEventListener('click', () => {
    container.classList.add('active');

});

togLoginBtn.addEventListener('click', () => {
    container.classList.remove('active');

});




/*Resolution Adaptive Break Line*/ 
//di ko mapagana
/*document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("line-container");
    const lines = container.querySelectorAll("#line");
    const text = container.querySelector("#text");
    
    /*Adjustable Line
    function adjustLineWidth() {
        const parentWidth = container.parentElement.offsetWidth;
        const textWidth = text.offsetWidth;
        const lineCount = lines.length;

        const lineWidth = (parentWidth - textWidth) / lineCount;

        lines.forEach((line) => {
            line.style.width = `${lineWidth}px`;
        });
    }

    adjustLineWidth();

    window.addEventListener("resize", adjustLineWidth);
});*/