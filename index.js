import * as spotify from "./script.js"
import { searchBar, container } from "./script-spotify.js"

export {
  displayArtist
 
} 
//const wholecont = document.getElementById('whole-container');
//const container = document.querySeletector("div")
const iFrame = document.getElementById('iFrame')
//const container = document.getElementById('container')




//https://open.spotify.com/embed/artist/4q3ewBCX7sLwd24euuV69X?utm_source=generator&theme=0

async function displayArtist() {

  try {
    const tokenData = await spotify.getToken()
    const accessToken = tokenData.access_token;

    const profile = await spotify.getArtistInfo(accessToken)

    const pa = profile.artists
    console.log(pa[0])


    for (let i = 0; i < pa.length; i++) {

      const indexName = pa[i].name.toUpperCase();
      //console.log(indexName)
      const indexId = pa[i].id

      if (indexName === artistName.value.trim().toUpperCase()) {
        // console.log(`Hello`)
        const headerName = document.createElement('h1');
        const socialPresence = document.createElement('h3');
        headerName.textContent = (`${indexName}`);
        socialPresence.textContent = (`POPULARITY: ${pa[i].popularity} FOLLOWERS: ${pa[i].followers.total}`)
        socialPresence.style.textAlign = ('center');
        headerName.style.textAlign = ('center');
        container.appendChild(headerName);
        container.appendChild(socialPresence);

        iFrame.src = `https://open.spotify.com/embed/artist/${indexId}?utm_source=generator&theme=0`
        return

      }
    }
    console.log(`we don't have that artist`)
  }
  catch (error) {
    //console.error(error);
  }

}      



displayArtist();

searchBar();