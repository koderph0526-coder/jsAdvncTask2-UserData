const mainContainer = document.querySelector("#mainCont");
const inputForm = document.querySelector("#showInput");
const showN = document.querySelector("#showName").value;
const showImg = document.querySelector("#showImg");
const showEp = document.querySelector("#showEp");
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

    div.appendChild(h2);
    div.appendChild(img);
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

function sortByDate() {
  showsArray.map((item) => item.name).filter();
}

// let watchingList;
// function addToNamedList() {
//   watchingList = showLiNames;
//   showLiNames.createTextNode(e.showsList);
//   watchingList.append(showLiNames);
//   makeLists.append(watchingList);
// }
