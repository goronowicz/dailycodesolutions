import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class OrderService {
  constructor(http) {
    http.configure(config  => {
        config.withBaseUrl('http://localhost:2403/')
      });
    this.http = http;
  }

  loadRecords() {
    var self= this;
    return new Promise(function(resolve){
      self.http.get('order')
          .then(response => resolve(JSON.parse(response.response)));
        });
  }

  addOrder(destObject){
    let self = this;
    return new Promise(function(resolve){
      self.http.post('order', destObject).then(r => resolve(JSON.parse(r.response)));
    });
  }

  loadRestaurnats(){
    let self = this;
    return new Promise(function(resolve){
      self.http.get('restaurant').then(r => resolve(JSON.parse(r.response)));
    });
  }
}
