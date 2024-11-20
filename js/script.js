const $one = document.querySelector.bind(document);
const $elem = document.createElement.bind(document);

const body = $one('body');
const album = $one('.album');
const overlay = $one('.overlay');
const overlayImg = $one('.overlay img');

//old overlay version
//const exit = $one('.exit');
//select all parents without child img tag 
//now this select all the parents
const exitAll = $one('div.overlay:not(img)');
// const garbageBtn = $one('#garbage');
// console.log(album);


axios
    .get('https://jsonplaceholder.typicode.com/photos?_limit=6', { timeout: 8000 })
    .then(resp => {
        console.log(resp.data);
        postArr = resp.data;
        getPost(postArr);
    });


const getPost = (posts) => {
    posts.forEach(curPost => {
        // console.log(curPost.url);

        // album.innerHTML += `
        //     <div class="post">
        //         <div class="garbage"></div>
        //         <img src="${curPost.url}" alt="${curPost.thumbnailUrl}">
        //         <p>${curPost.title}</p>
        //     </div>
        //     `

        //Create new element to show in page
        const post = $elem('div');
        const garbageBtn = $elem('i');
        const postImg = $elem('img');
        // const overlayImg = $elem('img');
        const postP = $elem('p');

        //Add/Set class/attributs to the new element
        post.classList.add("post");
        garbageBtn.classList.add("fa-regular", "fa-trash-can", "garbage");
        postImg.src = `${curPost.url}`;
        postImg.alt = `${curPost.thumbnailUrl}`;
        postP.innerText = `${curPost.title}`;
        // overlayImg.src = `${curPost.url}`;
        // overlayImg.alt = `${curPost.thumbnailUrl}`;

        //funzione per rimuovere l'elemento al click su icona cestino
        garbageBtn.addEventListener('click', () => {
            console.log('sto per cancellare');
            post.remove();
        });

        //click function show img in a page overlay
        postImg.addEventListener('click', () => {
            overlay.classList.remove('d-none');
            //clas to set overflow: hidden
            body.classList.add("stop-scroll")
            overlayImg.src = `${curPost.url}`;
            overlayImg.alt = `${curPost.thumbnailUrl}`;
        });

        post.append(postImg, garbageBtn, postP);
        album.appendChild(post);

    })
}

//click function all over img to exit from overlay
exitAll.addEventListener('click', () => {
    console.log('fine tutto');

    overlay.classList.add('d-none');
})
