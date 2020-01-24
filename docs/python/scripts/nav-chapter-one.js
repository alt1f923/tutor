Vue.component('nav-chapter-one-todo-item', {
    props: ['todo'],
    template: '<li><a :href="todo.url">{{ todo.text }}</a></li>'
})

var navChapterOneData = {
    navList: [
        { id: 0, text: '1.1 - Getting Started', url: "https://tutor.duncy.nz/python" },
        { id: 1, text: '1.11 - Installation', url: "https://tutor.duncy.nz/python#Installation"},
        { id: 2, text: '1.12 - Editors and Linters', url: "https://tutor.duncy.nz/python#Editors-and-Linters"},
        { id: 3, text: '1.2 - What is Python?', url: "https://tutor.duncy.nz/python/what-is-python.html"},
        { id: 4, text: '1.21 - Python the Interpreter', url: "https://tutor.duncy.nz/python/what-is-python.html#Python-the-Interpreter"},
        { id: 5, text: '1.22 - The Python shell', url: "https://tutor.duncy.nz/python/what-is-python.html#The-Python-shell"},
        { id: 6, text: '1.3 - Expressions', url: "https://tutor.duncy.nz/python/expressions.html"},
        { id: 7, text: '1.4 - Variables', url: "https://tutor.duncy.nz/python/variables.html"}
    ]
}

var navChapterOne = new Vue({
    el: 'body > section > nav',
    data: navChapterOneData
})