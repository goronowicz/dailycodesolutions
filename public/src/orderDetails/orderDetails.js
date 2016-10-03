import {inject} from 'aurelia-framework';
import {OrderService} from '/src/services/orderService';

@inject(OrderService)
export class OrderDetails {

    constructor(service){
        this.Service = service;
        this.order = null;
    }

    activate(id){
        let self = this;
        this.Service.loadOrder(id).then(order => {
            self.order= order;    
        });   
    }
}