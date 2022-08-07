function showTime() {
    const hours = document.getElementById('hours');
    const mins = document.getElementById('mins');
    const secs = document.getElementById('secs');
    const title = document.querySelector('h1');
    let date = new Date();

    hours.innerHTML = date.getHours();
    mins.innerHTML = date.getMinutes();
    secs.innerHTML = date.getSeconds();
    title.innerHTML = date.toDateString();
}
setInterval(showTime, 1000)
showTime();