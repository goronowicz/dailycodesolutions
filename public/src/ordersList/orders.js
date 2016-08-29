import {inject} from 'aurelia-framework';
import {OrderService} from '/src/services/orderService';
import * as io from 'socket.io-client';
import {Router} from 'aurelia-router';

@inject(OrderService,io, Router)
export class Orders {

  constructor(service, io, router){
        this.service = service;
        this.isEdit = false;
        this.io = io;
        this.router = router;
    };

    loadRecords() {
        this.service.loadRecords().then(response => {
          this.orders = response
        });
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

        let newOrder = this.service.addOrder(destObject);
        if (newOrder == null) {
          return;
        }
        this.orders.push(newOrder);
        this.newItem = this.plainObject;
        this.goToOrder(newOrder);
    };

    goToOrder(order){
      if (order == undefined || order.Status == '') return;

        this.router.navigateToRoute(order.Status, {id: order.id} );
    };

    creatOrder(){

    };
}



/*<option>New</option>
<option>Collecting</option>
<option>Ordering</option>
<option>Await</option>
<option>Delivered</option>
*/
