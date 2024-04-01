import {Grid} from "./grid"
const submitWordBtn = document.querySelector(".submit-word");
const grid = new Grid();
const GRID_SIZE = 10
submitWordBtn.addEventListener("click", async () => {
    try {
        let result = await fetchGridInfo(["ONE", "TWO", "THREE"]);
        // Uncomment the following line for debugging:
        // console.log(result);
        grid.renderGrid(GRID_SIZE, result);
    } catch (error) {
        console.error('Error occurred:', error);
    }
});
async function fetchGridInfo(wordList){
    const commaSeparatedWords = wordList.join(",");
    let response = await fetch(`http://localhost:8080/wordgrid?gridSize=${GRID_SIZE}&wordsList=${commaSeparatedWords}`);
    let result = await response.text();
    return result.split(" ");
}