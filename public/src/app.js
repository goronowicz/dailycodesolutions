import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
        { route: ['','orders'],  name: 'orders',      moduleId: 'ordersList/orders',      nav: true, title:'Orders' },
        { route: '/order/:id',  name: 'orderDetails', moduleId: 'orderDetails/orderDetails', nav:false },
        ]);

    this.router = router;
  }
}
