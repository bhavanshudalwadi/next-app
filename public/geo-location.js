let cordinates = '';

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        cordinates = `${position.coords.latitude}, ${position.coords.longitude}`;
    });
} else {
    cordinates = '';
}

setTimeout(() => {
    let myLocationElements = document.getElementsByClassName("my-location");
    for (let i = 0; i < myLocationElements.length; i++) {
        myLocationElements[i].textContent = cordinates;
    }
}, 50)
