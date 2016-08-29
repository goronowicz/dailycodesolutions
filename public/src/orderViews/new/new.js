import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {OrderService} from '/src/services/orderService';

@inject(Router, OrderService)
export class New {

  RestaurantName = '';
  Deadline = new Date();
  Notify = true;
  Recepients = '';
  Subject = null;
  Description = null;

  Restaurants = null;

  constructor(router, orderService){
      this.router = router;
      this.orderService = orderService;
  };

  activate(){
    //todo bind restaurant to popup
      this.orderService.loadRestaurnats().then(r => Restaurants = r );
  }

  collect(){

  }

  cancel(){

  }
};
