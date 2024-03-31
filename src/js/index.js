import {Grid} from "./grid"
const submitWordBtn = document.querySelector(".submit-word");
const grid = new Grid();
const GRID_SIZE = 10
submitWordBtn.addEventListener("click",async ()=>{
    let result = await fetchGridInfo(["ONE","TWO","THREE"]);
    // console.log(result);
    grid.renderGrid(GRID_SIZE,result);
});
async function fetchGridInfo(wordList){
    const commaSeparatedWords = wordList.join(",");
    let response = await fetch(`http://localhost:8080/wordgrid?gridSize=${GRID_SIZE}&wordsList=${commaSeparatedWords}`);
    let result = await response.text();
    return result.split(" ");
}