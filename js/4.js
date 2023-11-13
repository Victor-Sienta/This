function main(){
    function Menu(navList, nameList){
        this.navList=navList;
        this.nameList=nameList;
        this.wrapperA=function() {
            return this.navList.map(function(elem,i){
                return `<a href='${elem}'>${this.nameList[i]}</a>`;
            });
        }
    }

    a = ["home.html","services.html","price.html","about.html"]
    b = ["Главная", "Сервис", "Прайс-лист", "О нас"]
    let mainMenu=new Menu(a,b);

    for (elem of mainMenu.navList)
        console.log(elem);
        console.log(mainMenu.wrapperA());
    // let footerMenu=new Menu("newPage.html","checkPage.html","seoPage.html");
    // for (elem of footerMenu.navList)
    //     console.log(elem);
    //     console.log(footerMenu.wrapperA()); 
}




// function main(){
//     function Menu(...navList){
//         this.navList=navList;
//         this.wrapperA=function(){
//             return this.navList.map(elem=>`<a href='${elem}'>item</a>`);
//         }
//     }
//     let mainMenu=new Menu("home.html","services.html","price.html","about.html");
//     for (elem of mainMenu.navList)
//         console.log(elem);
//         console.log(mainMenu.wrapperA());
//     let footerMenu=new Menu("newPage.html","checkPage.html","seoPage.html");
//     for (elem of footerMenu.navList)
//         console.log(elem);
//         console.log(footerMenu.wrapperA()); 

// }



