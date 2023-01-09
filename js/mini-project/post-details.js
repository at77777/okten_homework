let container = document.createElement('div');

let url = new URL(location.href);
let post = url.searchParams.get('post');
let parse = JSON.parse(post);

for (const element in parse) {
    let ul = document.createElement('ul');
    for (const key in element) {
        let li = document.createElement('li');
        li.innerText = `${key}: ${element[key]}`;
        ul.appendChild(li);
    }
container.appendChild(ul);
}