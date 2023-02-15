/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const converterForm = document.querySelector("form");
const calculateBtn = document.querySelector("#submit-btn");
const searchInput = document.querySelector("#search");
const output = document.querySelector("#output");

output.style.display = "flex";
output.style.flexDirection = "column";
output.style.gap = "20px";
output.style.maxWidth = "80%";
output.style.margin = "50px auto";
output.style.alignItems = "center";



function toLb(num) {
    return num * 2.2046;
}

function toGrams(num) {
    return num / 0.0010000;
}

function toOz(num) {
    return num * 35.274;
}

function resultsToOutput() {

    calculateBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const lbsResult = toLb(searchInput.value);
        const gramsResult = toGrams(searchInput.value);
        const ozResult = toOz(searchInput.value);

        if(Number(searchInput.value)) {

          createTable(lbsResult, gramsResult, ozResult);

        } else {
            const errorSpan = document.createElement("span");
            output.append(errorSpan);
            errorSpan.textContent = "* Not a number. Please Try again";
            errorSpan.style.color = "red";
            errorSpan.style.textAlign = "center";
        }


    })

}

function createTable(lb, grams, oz) {
    const resultTable = document.createElement("table");
    const trTitles = document.createElement("tr");
    const thLb = document.createElement("th");
    const thGrams = document.createElement("th");
    const thOz = document.createElement("th");
    const trResults = document.createElement("tr");
    const tdLb = document.createElement("td");
    const tdGrams = document.createElement("td");
    const tdOz = document.createElement("td");
    resultTable.style.textAlign = "center"

    thLb.textContent = "Lbs";
    thGrams.textContent = "Grams";
    thOz.textContent = "Oz";

    output.append(resultTable);
    resultTable.append(trTitles, trResults);
    trTitles.append(thLb, thGrams, thOz);
    trResults.append(tdLb, tdGrams, tdOz);

    tdLb.textContent = lb;
    tdGrams.textContent = grams;
    tdOz.textContent = oz;
}
// createTable()

resultsToOutput();
