const $one = document.querySelector.bind(document);
const $elem = document.createElement.bind(document);

const album = $one('.album');
const overlay = $one('.overlay');
const overlayImg = $one('.overlay img');
const exit = $one('.exit');
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

        const post = $elem('div');
        const garbageBtn = $elem('i');
        const postImg = $elem('img');
        // const overlayImg = $elem('img');
        const postP = $elem('p');

        post.classList.add("post");
        garbageBtn.classList.add("fa-regular", "fa-trash-can", "garbage");
        postImg.src = `${curPost.url}`;
        postImg.alt = `${curPost.thumbnailUrl}`;
        // overlayImg.src = `${curPost.url}`;
        // overlayImg.alt = `${curPost.thumbnailUrl}`;
        postP.innerText = `${curPost.title}`;


        garbageBtn.addEventListener('click', () => {
            console.log('sto per cancellare');
            post.remove();
        });

        postImg.addEventListener('click', () => {
            console.log('over');
            overlay.classList.remove('d-none');
            console.log(overlayImg);
            overlayImg.src = `${curPost.url}`;
            overlayImg.alt = `${curPost.thumbnailUrl}`;
        });

        post.append(postImg, garbageBtn, postP);
        album.appendChild(post);

    })
}

exit.addEventListener('click', () => {
    console.log('fine overlay');

    overlay.classList.add('d-none');
})
