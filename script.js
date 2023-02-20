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
const resultTable = document.createElement("table");
const trTitles = document.createElement("tr");
const thKg = document.createElement("th");
const thLb = document.createElement("th");
const thGrams = document.createElement("th");
const thOz = document.createElement("th");
const errorSpan = document.createElement("span");
errorSpan.classList.add("error-message");

thLb.textContent = "Lbs";
thGrams.textContent = "Grams";
thOz.textContent = "Oz";
thKg.textContent = "Kg";

output.prepend(errorSpan);
output.append(resultTable);
resultTable.append(trTitles);
trTitles.append(thKg, thLb, thGrams, thOz);

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

        if (Number(searchInput.value)) {
            insertTableData(lbsResult, gramsResult, ozResult);
            errorSpan.textContent = "";
        } else {
            errorSpan.textContent = "* Not a number. Please Try again";
        }
    })
}

function insertTableData(lb, grams, oz) {
    const trResults = document.createElement("tr");
    const tdKg = document.createElement("td");
    const tdLb = document.createElement("td");
    const tdGrams = document.createElement("td");
    const tdOz = document.createElement("td");

    tdKg.textContent = searchInput.value;
    tdLb.textContent = lb;
    tdGrams.textContent = grams;
    tdOz.textContent = oz;

    resultTable.append(trResults);
    trResults.append(tdKg, tdLb, tdGrams, tdOz);
}

resultsToOutput();
