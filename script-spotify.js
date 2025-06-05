import * as index from "./index.js"


export {

    searchBar,
    container,
    artistName,
    

}
const container = document.getElementById('container')
const artistName = document.getElementById('artistName')


async function searchBar() {



    artistName.addEventListener('keydown', async (e) => {

        e.target.value.toUpperCase();


        if (e.key === 'Enter') {
            e.preventDefault();
            container.innerHTML = '';
            index.iFrame.src= '';
            setTimeout(() => {
                index.displayArtist();
            }, 0);


        }

    });

}

