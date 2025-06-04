import * as spotify from "./script.js"

//const wholecont = document.getElementById('whole-container');
//const container = document.querySeletector("div")
const artistName= document.getElementById('artistName')


//https://open.spotify.com/embed/artist/4q3ewBCX7sLwd24euuV69X?utm_source=generator&theme=0

async function displayArtist() {

  try {
    const tokenData = await spotify.getToken()
    const accessToken = tokenData.access_token;

    const profile = await spotify.getArtistInfo(accessToken)

    const pa = profile.artists


    for (let i = 0; i < pa.length; i++) {
      const indexName = pa[i].name.toUpperCase();
      console.log(indexName)

      if (indexName === artistName.value.trim().toUpperCase()) {
        console.log(`Hello`)
        return

      }
    }
    console.log(`we don't have that artist`)
  }
  catch (error) {
    console.error(error);
  }
    /*{
        const index = pa[i]
        console.log(index.name)

        const info =document.createElement('option')
        info.textContent= index.name.toUpperCase()
        info.value = index.id
        
        console.log(info)

        
    }   */
}      



displayArtist()


artistName.addEventListener('keydown', async (e) => {
  e.target.value.toUpperCase();


    if(e.key === 'Enter' ){      
      e.preventDefault();
      displayArtist(); 
    }

         //const embed = await fetch (`https://open.spotify.com/embed/artist/${artistselected}?utm_source=generator&theme=0`)
        //  const embeddata = await embed.json()

        //  console.log(embeddata)

        //  wholeDoc.appendChild(embeddata)

})

// button.addEventListener('click',(e) => {

//      console.log('User typed:', e.target.value)
// })


// function handleSearch() {


// }