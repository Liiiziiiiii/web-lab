
async function deleteStone(id){
    const res = await fetch(`http://localhost:5500/api/stone/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = await res.json();
    console.log(data);

    if(data) {
        document.getElementById(`stone${id}`).remove();
    }
}

document.querySelector(".button").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
})

document.getElementById('submit_button').addEventListener('click', async () => {
    const nameInput = document.getElementById('title_input');
    const caratsInput = document.getElementById('carats_input');
    const priceInput = document.getElementById('price_input');

    const name = nameInput.value;
    const carats = caratsInput.value;
    const price = priceInput.value;

    if(name && carats && price) {
        const res = await fetch ('http://localhost:5500/api/stone', {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, carats, price})
        });

        const carat = await res.json();
        stoneToHTML(carat);

        nameInput.value = '';
        caratsInput.value = '';
        priceInput.value = '';

    }
})

async function getAllStones() {
    const res = await fetch('http://localhost:5500/api/stone')
    const stones = await res.json();

    console.log(stones);
    stones.forEach(stone => stoneToHTML(stone))

}

window.addEventListener('DOMContentLoaded', getAllStones);

function stoneToHTML({ id, name, carats, price }) {
    const stoneList = document.getElementById('stones');

    stoneList.insertAdjacentHTML('afterbegin', `
    <div id="stone${id}" class="card mb-3 item-card" draggable="true">
    <div class="card-body">
        <h5 class="card-title">title ${name}</h5>
        <p class="card-text">carats ${carats}</p>
        <p class="card-text">price ${price}</p>
        
        <button onclick="deleteStone(${id})" type="button" class="btn btn-info">delete</button>   
    </div>`);
}

// async function deleteStone(id){
//     const res = await fetch(`http://localhost:5500/api/stone/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json',
//         }
//     });

//     const data = await res.json();
//     console.log(data);

//     if(data) {
//         document.getElementById(`stone${id}`).remove();
//     }
// }