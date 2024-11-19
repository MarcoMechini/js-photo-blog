const $one = (bind) => document.querySelector(bind);

const album = $one('.album');
console.log(album);

// {albumId: 1, 
// id: 1, 
// title: 'accusamus beatae ad facilis cum similique qui sunt', 
// url: 'https://via.placeholder.com/600/92c952', 
// thumbnailUrl: 'https://via.placeholder.com/150/92c952'}

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