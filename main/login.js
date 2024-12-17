/*Pass through line*/ 
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("line-container");
    const lines = container.querySelectorAll("#line");
    const text = container.querySelector("#text");
    
    /*Adjustable Line*/
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
});
