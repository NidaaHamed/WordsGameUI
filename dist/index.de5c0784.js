const submitWordBtn = document.querySelector(".submit-word");
submitWordBtn.addEventListener("click", async ()=>{
    let result = await fetchGridInfo([
        "ONE",
        "TWO",
        "THREE"
    ]);
    console.log(result);
});
async function fetchGridInfo(wordList) {
    const commaSeparatedWords = wordList.join(",");
    let response = await fetch(`http://localhost:8080/wordgrid?gridSize=10&wordsList=${commaSeparatedWords}`);
    let result = await response.text();
    return result;
}

//# sourceMappingURL=index.de5c0784.js.map
