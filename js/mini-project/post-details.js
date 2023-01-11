let container = document.createElement('div');
document.body.append(container);

let url = new URL(location.href);
let post = url.searchParams.get('post');
let parse = JSON.parse(post);

let div = document.createElement('div');
container.appendChild(div);

for (const element in parse) {
    let innerDiv = document.createElement('div');
    innerDiv.innerText = `${element}: ${parse[element]}`;
    div.appendChild(innerDiv);
}

let div1 = document.createElement('div');
container.appendChild(div1);
fetch(`https://jsonplaceholder.typicode.com/posts/${parse.id}/comments`)
    .then(comments => comments.json())
    .then(comments => {
        for (const comment of comments) {
            let innerDiv1 = document.createElement('div');
            for (const value in comment) {
                let innerInnerDiv1 = document.createElement('div');
                innerInnerDiv1.innerText = `${value}: ${comment[value]}`;
                innerDiv1.appendChild(innerInnerDiv1)

            }
            div1.appendChild(innerDiv1);
        }
    }
    )