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
  // Having for each make seperate cards for each time sumbit is pressed
  series.forEach((e) => {
    // Creating the div that will contain our created elements to store the input data and send it to html
    const div = document.createElement("div");
    div.className = "listCard";

    // Creating the elements that stores the input data for each input
    const h2 = document.createElement("h2"); //Making an h2 for the show titles
    const h2Txt = document.createTextNode(e.showName); //Creating a textNode and storing the title data from input in it, to push it back to html
    h2.append(h2Txt); //Pushing the text from the created TextNode into the h2

    const img = document.createElement("img");
    img.src = e.showImg; //Fetching the img that we stored from input
    const figure = document.createElement("figure"); // Making a figure to containn the img to better style the img file from input
    figure.append(img); // Now the img is in the figure and ready to be pushed to html, using figure to append
    figure.className = "imgFigure"; //adding the class from css

    // Created a button to change css for the card as a way to mark it as seen --> Still need to figure out how to store the change and then add a filter option for it
    const seenBtn = document.createElement("button");
    let seenBtnTxt = document.createTextNode("Seen");
    // const seenBtnTxt2 = document.createTextNode("Watch again"); --> fix this. Additional button text for when the seenBtn has been clicked, may not be needed...
    seenBtn.append(seenBtnTxt);
    seenBtn.classList.toggle("watchedBtn");

    const h3 = document.createElement("h3"); // Creating an h3 for the total of episodes input, could possibly be a <p> instead?
    const h3Txt = document.createTextNode(`Total Episodes: ${e.showEp}`); //Fetching the stored input data
    h3.append(h3Txt);

    // const favStar = document.createElement("img") --> Add at a later time, remeber to store both unstarred and starred in localStorage
    const deleteBtn = document.createElement("button"); //Creating a deleted button
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delBtn"; //Added minor styling

    // Making seenBtn react to click
    seenBtn.addEventListener("click", (e) => {
      div.classList.toggle("liCardWatched"); //Changing the card css class to, by visual effect, seperate the seen and not seen cards
      seenBtn.classList.toggle("unwatchBtn"); //also adding a change to the style of the button, may change it further when I can change the text accordingly when the seenBtn is first clicked
      localStorage.setItemItem(seenBtn); //Attempted storing the change; Perhaps use a similar approach to how the deletBtn is saved to localStorage?
    });
    // localStorage.setItem(seenBtn.change);

    // Adding functionality to the deleteBtn so that it removes the card displaying the show when clicked
    let idV = e.id;
    deleteBtn.addEventListener("click", (e) => {
      let filterShows = showsArray.filter((toDelete) => !(toDelete.id == idV));
      localStorage.setItem("data", JSON.stringify(filterShows));
      location.reload(); //Forcing reload, as getting the page to refresh once an item was delted with this method did not happen
    });

    // Appending the elements to their appropriate positioins
    div.appendChild(h2);
    div.appendChild(seenBtn);
    div.appendChild(figure);
    div.appendChild(h3);
    div.appendChild(deleteBtn);
    watchingCards.appendChild(div);
    watchingCards.classList = "watchingCardCont"; //Adding the appropriate css to the card itself

    // const combinedInputs = {
    //   nameField: showN,
    //   imgField: showImg,
    //   timestamp: new Date().toISOString()
    // }; attempted something, may come back to it
  });
}
makeLists(showsArray); //Calling the function

// Making a function to sort throught the series by names, starting with "a" and also making it sort by amount of episodes if wanted
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
