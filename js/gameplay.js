var timeInterval;

function toggleTime() {
    if (!timeInterval) {
        timeInterval = window.setInterval(advanceTime,50);
    } else {
        window.clearInterval(timeInterval);
        timeInterval = null;
    }
}
