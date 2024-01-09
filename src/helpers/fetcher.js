// fetching.js
  const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";
  
async function fetchTopPicks() {
  try {
    console.log("fetching");
    const rand= Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    const url = `${ENDPOINT}${rand}`;
    const response = await fetch(url);
    const json = await response.json();
    const filteredTopPicks = json.data.filter(
      (book) => book.is_top_pick === true
    );
    if(filteredTopPicks.length>19){
      const randomTopPicks = chooseRandomBooks(filteredTopPicks, 19);
      console.log(randomTopPicks);
      console.log("fetched");
      return randomTopPicks;
    }
    else{
      const randomTopPicks = chooseRandomBooks(filteredTopPicks, filteredTopPicks.length);
      console.log(randomTopPicks);
      console.log("fetched");
      return randomTopPicks;
    }
    // const randomTopPicks = chooseRandomBooks(filteredTopPicks, 11);
    // console.log(randomTopPicks);
    // console.log("fetched");
    // return randomTopPicks;
  } catch (error) {
    console.error("fetch errors", error);
    return [];
  }
}

async function fetchSearchResult({keyword}) {
  try {
    console.log("fetching");
   const url = `${ENDPOINT}?search=${keyword}`;
   console.log(url)
    const response = await fetch(url);
    const json = await response.json();
    const books = json.data;
    console.log(books);
    return books
    // const randomTopPicks = chooseRandomBooks(filteredTopPicks, 11);
    // console.log(randomTopPicks);
    // console.log("fetched");
    // return randomTopPicks;
  } catch (error) {
    console.error("fetch errors", error);
    return [];
  }
}

async function fetchAllBooks(){
  try {
    console.log("fetching");
    const rand= Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    const url = `${ENDPOINT}?page=${rand}`;
    const response = await fetch(url);
    const json = await response.json();
    const books = json.data;
    console.log(books);
    return books
    // const randomTopPicks = chooseRandomBooks(filteredTopPicks, 11);
    // console.log(randomTopPicks);
    // console.log("fetched");
    // return randomTopPicks;
  } catch (error) {
    console.error("fetch errors", error);
    return [];
  }
}

async function fetchBooksById({id}) {
try {
  console.log("fetching");
  const url = `${ENDPOINT}/${id}`;
  console.log(url);
  const response = await fetch(url);
  const json = await response.json();
  const books = json
  console.log(books);
  return books;
  // const randomTopPicks = chooseRandomBooks(filteredTopPicks, 11);
  // console.log(randomTopPicks);
  // console.log("fetched");
  // return randomTopPicks;
} catch (error) {
  console.error("fetch errors", error);
  return [];
}
}

function chooseRandomBooks(bookArray, numberOfBooksToChoose) {
  // Make a copy of the original array to avoid modifying it
  const arrayCopy = [...bookArray];

  return Array.from({ length: numberOfBooksToChoose }, () => {
    if (arrayCopy.length === 0) {
      return null; // or handle the case when the array is empty
    }

    const randomIndex = Math.floor(Math.random() * arrayCopy.length);
    return arrayCopy.splice(randomIndex, 1)[0];
  });
}

export { fetchTopPicks,fetchAllBooks,fetchSearchResult,fetchBooksById };
