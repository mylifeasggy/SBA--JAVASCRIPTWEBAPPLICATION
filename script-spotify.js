import * as index from "./index.js"


export {

    searchBar,
    container

}

const container = document.getElementById('container')
const artistName = document.getElementById('artistName')


async function searchBar() {

    artistName.addEventListener('keydown', async (e) => {

        e.target.value.toUpperCase();


        if (e.key === 'Enter') {
            container.innerHTML = '';
            e.preventDefault();
            setTimeout(() => {
                index.displayArtist();
            }, 0);


        }

    });

}

console.log(artistName)