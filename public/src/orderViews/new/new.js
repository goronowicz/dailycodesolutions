import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {OrderService} from '/src/services/orderService';

@inject(Router, OrderService)
export class New {
  Notify = true;
  Recepients = '';
  Restaurants = null;
  Deadline = new Date();
  Subject = null;
  Description = null;

  constructor(router, orderService){
      this.router = router;
      this.orderService = orderService;
  };

  activate(id){
      this.orderService.loadOrder(id).then(o => order = o);
      this.orderService.loadRestaurnats().then(r => Restaurants = r );
  }

  collect(){
    let order = {
      Deadline = Deadline,

    } 
    this.orderService.addOrder(order);
  }

  cancel(){

  }
};
