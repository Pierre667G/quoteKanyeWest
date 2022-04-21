let btn = document.createElement('button')
btn.textContent = "add quote";
document.body.appendChild(btn); 

    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => console.log(data))
