function changeIcon(copyDiv, className) {
    copyDiv.classList.add(className);
    setTimeout(() => copyDiv.classList.remove(className), 2500);
}

document.querySelectorAll("pre").forEach((block) => {
    const copyDiv = document.createElement("div");
    copyDiv.className = "copy-code";
    block.prepend(copyDiv);

    copyDiv.addEventListener("click", function () {
        const code = block.innerText;
        navigator.clipboard.writeText(code).then(() => {
            changeIcon(copyDiv, "checked");
        }, () => {
            changeIcon(copyDiv, "error");
        });
    });
});
