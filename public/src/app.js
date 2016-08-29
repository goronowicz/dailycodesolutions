import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
        { route: ['','orders'],  name: 'orders',      moduleId: 'ordersList/orders',      nav: true, title:'Orders' },
        { route: ['new'],  name: 'New',               moduleId: 'orderViews/new/new',      nav: false, title:'New' },
        { route: ['await'],  name: 'Await',           moduleId: 'orderViews/await/await',      nav: false, title:'Await' },
        { route: ['collecting'],  name: 'Collecting', moduleId: 'orderViews/collecting/collecting',      nav: false, title:'Collecting' },
        { route: ['delivered'],  name: 'Delivered',   moduleId: 'orderViews/delivered/delivered',      nav: false, title:'Delivered' },
        { route: ['ordering'],  name: 'Ordering',     moduleId: 'orderViews/ordering/ordering',      nav: false, title:'Ordering' },
        ]);

    this.router = router;
  }
}
