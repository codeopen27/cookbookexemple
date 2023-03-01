function shareEvent(){
    alert('my alert message')
}

const navigation = () => {
    document.querySelector("#frame").src = "./frames/hunansauce.html"
}

document.getElementById("share-button").addEventListener("click", shareEvent);

document.querySelector("#hunansauce").addEventListener("click", navigation);

document.querySelector("#gingergarlicpaste").addEventListener("click", () => {
    document.querySelector("#frame").src = "./frames/gingergarlicpaste.html"
});
