/*Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features. (DONE: SPOTIFY API)
Create user interaction with the API through a search feature, paginated gallery, or similar. This feature should use GET requests to retrieve associated data.(GE)
Use setTimeOut
Make use of Promises and async/await syntax as appropriate.
Organize your JavaScript code into at least three (3) different module files, and import functions and data across files as necessary.
Ensure the program runs as expected, without any undesired behavior caused by misunderstanding of the JavaScript event loop (such as race conditions, API calls being handled out of order, etc.).
Create an engaging user experience through the use of HTML and CSS.
Ensure that the program runs without errors (comment out things that do not work, and explain your blockers - you can still receive partial credit).
Include a README file that contains a description of your application.
*/
export {
    getToken,
    getArtistInfo,
    artname,
    
}



const artname = document.getElementById('art-name')



// private methods
async function getToken() {
    
    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: new URLSearchParams({
            'grant_type': 'client_credentials',
        }),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret).toString('base64'),
        },
    

        
    });

    return await response.json();
}


async function getArtistInfo(access_token) {
    const dataArtist = await fetch("https://api.spotify.com/v1/artists?ids=4q3ewBCX7sLwd24euuV69X,5XJDexmWFLWOkjOEjOVX3e,790FomKkXshlbRYZFtlgla,1mcTU81TzQhprhouKaTkpq,2LRoIwlKmHjgvigdNGBHNo,7iK8PXO48WeuP03g8YR51W,2R21vXR83lH98kGeO99Y66,3qsKSpcV3ncke3hw52JSMB,2oQX8QiMXOyuqbcZEFsZfm,37i9dQZF1DZ06evO2yHJME", {
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + access_token },
    });

    const data = await dataArtist.json();
    return data;
}


//displayArtist();
