let container = document.createElement('div');
document.body.append(container);

let url = new URL(location.href);
let userId = url.searchParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(details => details.json())
    .then(details => {
        let ul = document.createElement('ul');
        for (const detail in details) {
            let li = document.createElement('li');
            if (typeof details[detail] !== 'object') {
                li.innerText = `${detail}: ${details[detail]}`;
                ul.appendChild(li);
                     } else {
                            li.innerText = `${detail}:`;
                            ul.appendChild(li);
                            let nestedUl = document.createElement('ul');
                                for (const key in details[detail]) {
                                    let liOfNestedUl = document.createElement('li');
                                    if (typeof details[detail][key] !== 'object') {
                                        liOfNestedUl.innerText = `${key}: ${details[detail][key]}`;
                                        nestedUl.appendChild(liOfNestedUl);
                                        } else {
                                            liOfNestedUl.innerText = `${key}`;
                                            nestedUl.appendChild(liOfNestedUl);
                                            let nestedUlOfNestedUl = document.createElement('ul');
                                            for (const value in details[detail][key]) {
                                                let liOfNestedUlOfNestedUl = document.createElement('li');
                                                if (typeof details[detail][key][value] !== 'object') {
                                                    liOfNestedUlOfNestedUl.innerText = `${value}: ${details[detail][key][value]}`;
                                                    nestedUlOfNestedUl.appendChild(liOfNestedUlOfNestedUl);
                                                }
                                            }
                                            liOfNestedUl.appendChild(nestedUlOfNestedUl);
                                        }
                                    }
                                li.appendChild(nestedUl);
                    }
            }
        container.appendChild(ul)
        }
    )

let btn = document.createElement('button');
btn.innerText = `Show posts`
btn.onclick = function () {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
        .then(posts => posts.json())
        .then(posts => {
            for (const post of posts) {
                let div = document.createElement('div');
                div.innerText = `${post.title}`;
                let a = document.createElement('a');
                a.innerText = `More`;
                a.href = `post-details.html?post=` + JSON.stringify(post);
                div.appendChild(a);
                container.appendChild(div);
            }
        }
        )
}
container.appendChild(btn);