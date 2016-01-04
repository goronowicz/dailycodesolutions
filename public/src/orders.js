import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import * as io from 'socket.io-client';
@inject(HttpClient,io)
export class Orders {
    constructor(http, io){

        http.configure(config  => {
            config.withBaseUrl('http://localhost:2403/')});

        this.http = http;
        this.isEdit = false;
        this.io = io;
    };

    loadRecords() {
        this.http.get('order')
            .then(response => this.orders = JSON.parse(response.response));
    }

    activate() {
        this.loadRecords();
         this.socket = io.connect('http://localhost:2403/');
         this.socket.on('order:create', () => this.loadRecords());
         this.socket.on('order:update', () => this.loadRecords());
         this.socket.on('order:delete', () => this.loadRecords());
    };

    plainObject = {
        RestaurantName : '',
        Deadline : '',
        Status : ''
    };

    newItem = this.plainObject;

    addOrder()
    {
        var valid = true;
        var destObject = {
            Restaurant : {
                Name: this.newItem.RestaurantName
            },
            Deadline : this.newItem.Deadline,
            Status : this.newItem.Status
        }

        this.http.post('order', destObject).then(r =>
        {
            if (r.isSuccess)
            {
                this.orders.push(JSON.parse(r.response));
                this.newItem = this.plainObject;
            }
        })
    };

    editOrder(order){
        order.isEdit = true;
    };

    saveOrder(order){
      this.http.put('order/'+order.id, order).then(r => {if (r.isSuccess){
        order.isEdit = false;
        this.loadRecords();
      }});
    }

    deleteOrder(order) {
        this.http.delete('order/'+order.id).then(r => {
            if (r.isSuccess)
            {
                this.loadRecords();
            }
        });
    };
}
