const mainContainer = document.querySelector("#mainCont");
const inputForm = document.querySelector("#showInput");
const showN = document.querySelector("#showName").value;
const showImg = document.querySelector("#showImg");
const showEps = document.querySelector("#showEp");
const showLiNames = document.querySelector("#showsList");
const watchingCards = document.querySelector(".watchingCardCont");

let showsArray = [];
//checkiing if the local storage array is empty, if it isn't we store the data from showsArray. This is to make certain that we don't overwrite with new input
if (localStorage.getItem("data")) {
  //getting the data from the array in localStorage and storing it in newShowList (variable)
  let newShowList = JSON.parse(localStorage.getItem("data"));
  //Having the code do this process for each object we add(?), as we give values to the input fields in webpage
  newShowList.forEach((element) => {
    //Pushing the elements in the objects to showArray, this is destructuring
    showsArray.push(element);
  });
}
inputForm.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing/removing standard browser settings

  //Fetching the input from the form
  const formData = new FormData(inputForm);
  const showData = Object.fromEntries(formData.entries());
  console.log(showData); //Just checking that it fetches the data

  //Pushing the data/elements from showData to showsArray
  showsArray.push(showData);
  localStorage.setItem("data", JSON.stringify(showsArray));
});

// Note!! Use filter() to sort throught whether or not a show has already been added to a specific list

function makeLists() {
  showsArray.forEach((e) => {
    const div = document.createElement("div");
    div.className = "listCard";

    const h2 = document.createElement("h2");
    const h2Txt = document.createTextNode(e.showName);
    h2.append(h2Txt);
    const img = document.createElement("img");
    img.src = e.showImg;
    const h3 = document.createElement("h3");
    const h3Txt = document.createTextNode(e.showEp);
    h3.append(h3Txt);
    // const favStar = document.createElement("img")
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";

    div.appendChild(h2);
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(deleteBtn);
    watchingCards.appendChild(div);
    watchingCards.classList = "watchingCardCont";

    // const combinedInputs = {
    //   nameField: showN,
    //   imgField: showImg,
    //   timestamp: new Date().toISOString()
    // }; attempted something, may come back to it
  });
}
makeLists();

// Making a function to sort throught the series by names, starting with "a"
function sortByName() {
  // Testing a code found via google, will need to adjust and test as I go to figure out how it works
  // showsArray.map((item) => item.name).filter(); --No? Because
  let storedNames = localStorage.getItem("showName"); //getting the stored data from local storage and somehow this converts it from a string to an array?
  let nameArr = storedNames ? JSON.parse(storedNames) : []; //According to the documentation: Parsing the JSON string into an array, or starting with an empty array if nothing is stored

  nameArr.sort(); // sorting the array alphabetically? Does sort have that as a built in default? Yes.
  localStorage.setItem("showName", JSON.stringify(nameArr));
}

// const optionNames = document.querySelector("#sortByName");
// optionNames.addEventListener("click", (e) => {
//   // having this event listener activate the function if all goes to plan
//   return sortByName(showN);
// });

// Make an eventlistener to select/option -> place the function in the eventlister?

// let watchingList;
// function addToNamedList() {
//   watchingList = showLiNames;
//   showLiNames.createTextNode(e.showsList);
//   watchingList.append(showLiNames);
//   makeLists.append(watchingList);
// }
