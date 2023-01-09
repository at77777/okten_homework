let container = document.createElement('div');
document.body.append(container);

fetch ('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.innerText = `${user.id} ${user.name}`;
            let a = document.createElement('a');
            a.innerText = `About`;
            a.href = `user-details.html?id=${user.id}`;
            div.appendChild(a);
            container.appendChild(div);
        }
        }
    )