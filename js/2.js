let orders=[
    {
        fio:"Ivan",
        tovar:"phone",
        price:10000,
        quantity:2
    },
    {
        fio:"Peter",
        tovar:"usb",
        price:2300,
        quantity:5
    },
    {
        fio:"Mary",
        tovar:"connector",
        price:100,
        quantity:100
    },
    ]

    function showOrder(){
        let str = (`Заказ покупателя ${this.fio} составил ${this.price*this.quantity}. Товар ${this.tovar}`);
        console.log(str);
    }

    orders.forEach(elem=>showOrder.call(elem));