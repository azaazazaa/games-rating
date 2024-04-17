function getRandomGame(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  } 

async function getData(url) {
try{
    const response = await fetch('https://api-code-2.practicum-team.ru/games');
    const data = await response.json();
    return data;
} catch (error){
    console.log(error);
}
}

module.exports = {getData, getRandomGame};