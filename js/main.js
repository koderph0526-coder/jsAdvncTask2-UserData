const mainContainer = document.querySelector("#mainCont");
const inputForm = document.querySelector("#showInput");
const showN = document.querySelector("#showName");
const showImg = document.querySelector("#showImg");
const showEps = document.querySelector("#showEp");
const showLiNames = document.querySelector("#showsList");
const watchingCards = document.querySelector(".watchingCardCont");
//loop throught each of these consts with search in vsc taskbar, to see if all the const above are needed

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

  let allShowData = {
    ...showData, //RFuns through all the keys and values and places them in an object
    id: crypto.randomUUID(), //Creates a random id
  };
  console.log(allShowData);
  //Pushing the data/elements from showData to showsArray
  showsArray.push(allShowData);
  localStorage.setItem("data", JSON.stringify(showsArray));
  makeLists(showsArray);
});

// Note!! Use filter() to sort throught whether or not a show has already been added to a specific list

//Creating the cards that display the different shows
function makeLists(series) {
  watchingCards.innerHTML = ""; //Refreshing the div to not duplicate content
  series.forEach((e) => {
    const div = document.createElement("div");
    div.className = "listCard";

    const h2 = document.createElement("h2");
    const h2Txt = document.createTextNode(e.showName);
    h2.append(h2Txt);
    const img = document.createElement("img");
    img.src = e.showImg;
    const figure = document.createElement("figure");
    figure.append(img);
    figure.className = "imgFigure";
    const seenBtn = document.createElement("button");
    let seenBtnTxt = document.createTextNode("Seen");
    const seenBtnTxt2 = document.createTextNode("Watch again");
    seenBtn.append(seenBtnTxt);
    seenBtn.classList.toggle("watchedBtn");
    const h3 = document.createElement("h3");
    const h3Txt = document.createTextNode(`Total Episodes: ${e.showEp}`);
    h3.append(h3Txt);
    // const favStar = document.createElement("img")
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delBtn";

    seenBtn.addEventListener("click", (e) => {
      div.classList.toggle("liCardWatched");
      seenBtn.classList.toggle("unwatchBtn");
    });

    let idV = e.id;
    deleteBtn.addEventListener("click", (e) => {
      let filterShows = showsArray.filter((toDelete) => !(toDelete.id == idV));
      localStorage.setItem("data", JSON.stringify(filterShows));
      location.reload(); //Forcing reload, as getting the page to refresh once an item was delted with this method did not happen
    });

    div.appendChild(h2);
    div.appendChild(seenBtn);
    div.appendChild(figure);
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
makeLists(showsArray);

// Making a function to sort throught the series by names, starting with "a"
//Fetching the select tag from html
const selectOption = document.querySelector("#selection");
selectOption.addEventListener("change", (e) => {
  let sortedArray = [...showsArray];
  if (e.target.value == 1) {
    sortedArray.sort((a, b) => a.showEp - b.showEp);
  } else if (e.target.value == 2) {
    // Sorts the array of shows from a-z
    sortedArray.sort((a, b) => a.showName.localeCompare(b.showName));
  } else if (e.target.value == 3) {
    sortedArray.sort((a, b) => b.showEp - a.showEp);
  } else if (e.target.value == 4) {
    // Sorts the array of shows from z-a
    sortedArray.sort((a, b) => b.showName.localeCompare(a.showName));
  }
  makeLists(sortedArray);
});

//else if(e.target.value == 5)
