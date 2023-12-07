import { Component } from '@angular/core';
import { Root2 } from '../model/food_model';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Component({
  selector: 'app-card',
  template: `
    <div class="card" style="width: 18rem;" *ngFor="let info of pizza">
      <img src="{{ info.image }}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ info.name }}</h5>
        <p class="card-text">{{info.price}}</p>
        <a href="#" class="btn btn-primary">Ordina</a>
      </div>
    </div>
  `,
  styles: [],
})
export class CardComponent {
  pizza: Root2[] = [];
  constructor(http: HttpClient) {
    http
      .get<Root2[]>(
        'https://my-json-server.typicode.com/zoelounge/menupizza/cards'
      )
      .subscribe((res) => {
        {
          console.log(res);
          this.pizza = res;
        }
      });
  }
}
