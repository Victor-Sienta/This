function createLinkTovar(category){
    return function(artikul) {
        return (`https://myshop.ru/${category}/${artikul}`);
    }
}

let createPCLink = createLinkTovar('pc');
let createMonitorLink = createLinkTovar('monitors');
let createNotebookLink = createLinkTovar('notebooks');
console.log(createPCLink(1001));
console.log(createMonitorLink(345));
console.log(createNotebookLink(4004));