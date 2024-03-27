export class Order {

    constructor(
        id,
        date,
        customerId,
        products,
        total
    ) {
        this.id = id;
        this.date = date;
        this.customerId = customerId;
        this.products = products;
        this.total = total;
    }
}