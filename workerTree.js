addEventListener('message', ev => {
    let tree = ev.data;



    function fn(tree) {
        let result = '<ul>';
        for (let i in tree) {
            if (typeof tree[i] == 'string') {
                result += `<li><a href="${tree[i]}">${i}</a>`
            } else {
                result += `<li>${i} ${fn(tree[i])} </li>`
            }
        }
        return result += '</ul>'
    }
    let menu = fn(tree);
    //отправка HTML-строки в основной скрипт
    postMessage(menu);
})