let container = document.createElement('div');
document.body.append(container);

let url = new URL(location.href);
let userId = url.searchParams.get('id');
let div = document.createElement('div');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(details => details.json())
    .then(details => {
        for (const detail in details) {
            let innerDiv = document.createElement('div');
            if (typeof details[detail] !== 'object') {
                innerDiv.innerText = `${detail}: ${details[detail]}`;
                div.appendChild(innerDiv);
                     } else {
                            innerDiv.innerText = `${detail}:`;
                            div.appendChild(innerDiv);
                                for (const key in details[detail]) {
                                    let innerInnerDiv = document.createElement('div');
                                    if (typeof details[detail][key] !== 'object') {
                                        innerInnerDiv.innerText = `${key}: ${details[detail][key]}`;
                                        innerDiv.appendChild(innerInnerDiv);
                                        } else {
                                            innerInnerDiv.innerText = `${key}:`;
                                            innerDiv.appendChild(innerInnerDiv);
                                            for (const value in details[detail][key]) {
                                                let innerInnerInnerDiv = document.createElement('div');
                                                if (typeof details[detail][key][value] !== 'object') {
                                                    innerInnerInnerDiv.innerText = `${value}: ${details[detail][key][value]}`;
                                                    innerInnerDiv.appendChild(innerInnerInnerDiv);
                                                }
                                            }
                                        }
                                    }
                    }
            }
        }
    )

let btn = document.createElement('button');
btn.innerText = `Show posts`
btn.onclick = function () {
    let div1 = document.createElement('div');
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(posts => posts.json())
        .then(posts => {
            for (const post of posts) {
                let innerDiv = document.createElement('div');
                innerDiv.innerText = `${post.title}`;
                let a = document.createElement('a');
                a.innerText = `More`;
                a.href = `post-details.html?post=` + JSON.stringify(post);
                innerDiv.appendChild(a);
                div1.appendChild(innerDiv);
            }
        }
        )
    container.appendChild(div1);
}
container.append(div, btn);
