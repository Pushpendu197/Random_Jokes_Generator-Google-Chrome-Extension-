const jokes = async () => {
    try {
        const result = await fetch("https://api.chucknorris.io/jokes/random");
        const data = await result.json() //convert the result API into JSON format to read the data 
        const jokes = document.querySelector('#jokes');
        jokes.innerHTML = data.value;
    } catch (error) {

    }
};
window.addEventListener("load", () => {
    jokes();
})