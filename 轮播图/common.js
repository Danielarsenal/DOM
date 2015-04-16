function $id(id){
    return document.getElementById(id);
}

function animate(element,target) {
    clearInterval(element.timer);

    element.timer = setInterval(function () {
        var currentLeft = element.offsetLeft;
        currentLeft += (target-currentLeft)/10;
        var step = 10;
        step = currentLeft < target ? step : -step;
        currentLeft += step;
        if (Math.abs(target - currentLeft) < Math.abs(step)) {
            clearInterval(element.timer);
            element.style.left = target + "px";
            return;
        }
        element.style.left = currentLeft + "px";
    }, 20);
}