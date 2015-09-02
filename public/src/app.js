import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','orders'],  name: 'orders',      moduleId: 'orders',      nav: true, title:'Orders' },
    ]);

    this.router = router;
  }
}
