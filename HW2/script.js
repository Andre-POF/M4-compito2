

// ? 6a. fetch (GET)

let eminemArr = [];
let eminemSection = document.getElementById("eminemSection");
console.log(eminemSection);
let newUl = document.createElement("ul");
eminemSection.appendChild(newUl);

// let liNew = document.createElement("li");
// let img1 = document.createElement("img");
// img1.src = "https://media.gettyimages.com/id/1815153302/it/foto/malaga-spain-jannik-sinner-of-italy-celebrates-winning-match-point-during-the-davis-cup-final.jpg?s=2048x2048&w=gi&k=20&c=US5wnn_oAOJUI28PLylJ9aQ-l15H8FMcB173D3vEWPc=";
// liNew.appendChild(img1);
// newUl.appendChild(liNew);


eminem = fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
// https://developer.mozilla.org/en-US/docs/Web/API/Response/json
.then((response) => response.json()) // Abbiamo una promise restituita qui
.then((json) => {
    eminemArr = json.data;

    for(let i = 0; i < eminemArr.length; i++) {
        let newLi = document.createElement("li");
        let newImg = document.createElement("img");
        newImg.src=eminemArr[i].album.cover;
        //console.log(newImg);
        newLi.appendChild (newImg);
        newUl.appendChild(newLi);
    }
    console.log(eminemArr[0].album.cover);
})
.catch((err) => console.log("Error detected: ", err) );
