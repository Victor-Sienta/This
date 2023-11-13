function main(){
    function Menu(navList, nameList){
        this.navList=navList;
        this.nameList=nameList;
        this.wrapperA=function(){
            return this.navList.map(function(elem,i){
                return `<a href='${elem}'>${this.nameList[i]}</a>`;
            }.bind(this));
        }
    }
    a = ["home.html","services.html","price.html","about.html"]
    b = ["Главная", "Сервис", "Прайс-лист", "О нас"]
    let mainMenu=new Menu(a,b);
    for (elem of mainMenu.navList)
        console.log(elem);
        console.log(mainMenu.wrapperA());
    
    a = ["newPage.html","checkPage.html","seoPage.html"]
    b = ["Новая", "Проверка", "Сео"]
    let footerMenu=new Menu(a,b);
    for (elem of footerMenu.navList)
        console.log(elem);
        console.log(footerMenu.wrapperA()); 

}



