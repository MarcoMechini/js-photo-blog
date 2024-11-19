const $one = document.querySelector.bind(document);
const $elem = document.createElement.bind(document);

const album = $one('.album');
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
        const postP = $elem('p');

        post.classList.add("post");
        garbageBtn.classList.add("fa-regular", "garbage", "fa-trash-can");
        postImg.src = `${curPost.url}`;
        postImg.alt = `${curPost.thumbnailUrl}`;
        postP.innerText = `${curPost.title}`;


        garbageBtn.addEventListener('click', () => {
            console.log('sto per cancellare');
            post.remove();
        });


        post.append(postImg, garbageBtn, postP);
        album.appendChild(post);

    })
}
