const $one = (bind) => document.querySelector(bind);

const album = $one('.album');
console.log(album);

let postArr = [];

axios
    .get('https://jsonplaceholder.typicode.com/photos?_limit=6', { timeout: 8000 })
    .then(resp => {
        console.log(resp.data);
        postArr = resp.data;
        getPost();
    });

const getPost = () => {
    postArr.forEach(curPost => {
        console.log(curPost.url);

        album.innerHTML += `
            <div class="post">
                <img src="${curPost.url}" alt="${curPost.thumbnailUrl}">
                <p>${curPost.title}</p>
            </div>
            `
    })
}