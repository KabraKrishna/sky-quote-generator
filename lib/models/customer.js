export class Customer {

    constructor(
        id,
        company,
        name,
        phone,
        address,
        orders,
        created,
        updated,
        active,
        creditTotal,
        referedById,
        referedBy
    ) {

        this.id = id;
        this.company = company;
        this.name = name;
        this.phone = phone;

        if(address) this.address = address;
        if(created) this.created = created;
        if(updated) this.updated = updated;

        this.active = !!active;

        this.orders = orders;
        this.creditTotal = creditTotal;
        this.referedById = referedById;
        this.referedBy = referedBy;
    }

}