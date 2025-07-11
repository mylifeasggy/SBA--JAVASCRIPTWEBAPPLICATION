import * as spotify from "./script.js"
import { searchBar, container, artistName, containerHover } from "./script-spotify.js"

export {
  displayArtist,
  iFrame,

}

const iFrame = document.getElementById('iFrame')




async function displayArtist() {

  try {

    const tokenData = await spotify.getToken()
    const accessToken = tokenData.access_token;

    const profile = await spotify.getArtistInfo(accessToken)
    console.log(profile)

    const profileArtist = profile.artists.items
    //console.log(profileArtist)

    
    let foundArtist = false;
    

    for (let i = 0; i < profileArtist.length; i++) {
      

      const indexName = profileArtist[i].name.toUpperCase();
      //console.log(indexName)
      const indexId = profileArtist[i].id


      if (indexName.normalize('NFD').replace(/\p{Diacritic}/gu, '') === artistName.value.trim().toUpperCase())  {
        foundArtist = true;
        // console.log(`Hello`)
        const headerName = document.createElement('h1');
        const socialPresence = document.createElement('h3');

        headerName.textContent = indexName;
        socialPresence.textContent = (`POPULARITY: ${profileArtist[i].popularity} - FOLLOWERS: ${profileArtist[i].followers.total} `);
        socialPresence.style.textAlign = 'center';
        headerName.style.textAlign = 'center';


        container.appendChild(headerName);
        container.appendChild(socialPresence);

        iFrame.src = `https://open.spotify.com/embed/artist/${indexId}?utm_source=generator&theme=0`

      }


    }
    if (!foundArtist && artistName.value.length > 0)  {
      const foundArt = document.createElement('p');
      foundArt.textContent = `We don't have this artist in the database`;
      foundArt.style.textAlign = 'center';
      container.appendChild(foundArt);
    }
    

  } catch (error) {
    console.error('Error in displayArtist():' , error);
  }

}





displayArtist();

searchBar();
containerHover();