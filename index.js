import * as spotify from "./script.js"

//const wholecont = document.getElementById('whole-container');
//const container = document.querySeletector("div")
const artista = document.getElementById("artist");
const wholeDoc = document.getElementById("whole-container")




async function displayArtist() {
    

    const tokenData = await spotify.getToken()
    const accessToken = tokenData.access_token;

    const profile = await spotify.getArtistInfo(accessToken)
    
const pa = profile.artists
console.log(pa)

    for (let i =0; i < pa.length; i++ ){
        const index = pa[i]
        console.log(index.name)

        const info =document.createElement('option')
        info.textContent= index.name.toUpperCase()
        info.value = index.id
        
        console.log(info)
        artista.appendChild(info)

        
    }   
}      



displayArtist()


artista.addEventListener('change', async (e) => {
const artistselected = e.target.value

         const embed = await fetch (`https://open.spotify.com/embed/artist/${artistselected}?utm_source=generator&theme=0`)
         const embeddata = await embed.json()

         console.log(embeddata)

         wholeDoc.appendChild(embeddata)



})
