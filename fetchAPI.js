//More info : https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

const API = 'https://ghibliapi.herokuapp.com/films/';
//URL to get The Studio Ghibli Films

const fetch = require('node-fetch');
//Add the module fetch to use the fetch API


async function asyncFunction(url_api) 
{

    try{

        const requestMovies = await fetch(url_api);
        //Fetch receive two parameters. First the url to the resources and
        //the second (optional, default: GET) the request method
        //Fetch return a promise thath is resolve in the interface Response
        //i.e, the response of the request. Request 1
        const movies = await requestMovies.json();
        //Receive a Response flow and return a promise 
        //that is resolved like a JSON of the data.
        //To this way we can get the data from the API
        const requestCharacter = await fetch(`${movies[8].people[0]}`);
        //Request 2
        const character = await requestCharacter.json();`${character.species}`
        const requestSpecie = await fetch(`${character.species}`);
        //Request 3
        const specie = await requestSpecie.json();
        console.log(`The name of the movie is: ${movies[8].title}`);
        console.log(`The main character is: ${character.name}`);
        console.log(`His species is: ${specie.name}`);
    }
    catch(error){
        //When the request is not complete, catch the error
        console.error(error);
    }
}

asyncFunction(API);