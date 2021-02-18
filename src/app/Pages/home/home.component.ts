import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items!: any [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.api.getJson().subscribe(response => {
      this.items = response;
    })
  }

  addToCart(){
    console.log('added to cart');
  }

}
