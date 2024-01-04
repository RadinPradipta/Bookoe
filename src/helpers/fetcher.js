// fetching.js
  const ENDPOINT = "https://bookapi.cm.hmw.lol/api/books";
  const url = `${ENDPOINT}`;
async function fetchTopPicks() {


  try {
    console.log("fetching");
    const response = await fetch(url);
    const json = await response.json();
    const filteredTopPicks = json.data.filter(
      (book) => book.is_top_pick === true
    );
    const randomTopPicks = chooseRandomBooks(filteredTopPicks, 11);
    console.log(randomTopPicks);
    console.log("fetched");
    return randomTopPicks;
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

export { fetchTopPicks };
