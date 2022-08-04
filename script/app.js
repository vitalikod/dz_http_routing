async function getres() {
    let req = await fetch('https://jsonplaceholder.typicode.com/photos');
    let content = await req.json();
    // response.text() – читает ответ и возвращает как обычный текст,
    // response.json() – декодирует ответ в формате JSON,
    // response.formData() – возвращает ответ как объект FormData (разберём его в следующей главе),
    // response.blob() – возвращает объект как Blob (бинарные данные с типом),
    // response.arrayBuffer() – возвращает ответ как ArrayBuffer (низкоуровневое представление бинарных данных)
    content = content.splice(0, 10);
    
    let list = document.querySelector('.posts');
    
    let key;
    for (key in content) {
        list.innerHTML += 
        `<li class="post">
            <h3>${content[key].title}</h3>
            <img src= '${content[key].url}'>
        </li>`
        console.log(content[key]);
    }
}
const btn = document.querySelector('.btn').addEventListener('click', getres);