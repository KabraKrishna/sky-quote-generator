export class Credit {

    constructor(
        id,
        customerId,
        orderId,
        points,
        description
    ) {
        this.id = id;
        this.customerId = customerId;
        this.orderId = orderId;
        this.points = points;
        this.description = description;
    }
}