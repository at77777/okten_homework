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
