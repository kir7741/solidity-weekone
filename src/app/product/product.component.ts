import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products = [
    { imgUrl: '../../assets/image/brenda-godinez.jpg' },
    { imgUrl: '../../assets/image/heather-schwartz.jpg' },
    { imgUrl: '../../assets/image/brooke-lark2.jpg' },
    { imgUrl: '../../assets/image/food-photographer2.jpg' },
    { imgUrl: '../../assets/image/food-cake.jpg' },
    { imgUrl: '../../assets/image/brenda-godinez.jpg' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
