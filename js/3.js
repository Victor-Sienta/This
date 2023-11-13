function main(){
    let orders=[
    {
        fio:"Ivan",
        tovar:"phone",
        price:10000,
        quantity:2,
        discount:20
    },
    {
        fio:"Peter",
        tovar:"usb",
        price:2300,
        quantity:5,
        discount:10
    },
    {
        fio:"Mary",
        tovar:"connector",
        price:100,
        quantity:100,
        discount:5
    },
    ]

    function showOrder(){
        let str = (`Заказ покупателя ${this.fio} составил ${this.price*this.quantity*((100-this.discount)*0.01)} Товар ${this.tovar}. Скидка составила ${this.discount}%`);
        console.log(str);
    }

    orders.forEach(elem=>showOrder.call(elem));

}