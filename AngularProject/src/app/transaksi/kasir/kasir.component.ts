import { Component, OnInit } from '@angular/core';
export interface item {id: number, name: string, price: number};
export interface selecteditem {id: number, name: string, price: number,amount: number};

@Component({
  selector: 'app-kasir',
  templateUrl: './kasir.component.html',
  styleUrls: ['./kasir.component.scss']
})
export class KasirComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  public items: item[] = [
    {id: 1, name: 'Keset', price: 2500},
    {id: 2, name: 'Lemari', price: 450000},
    {id: 3, name: 'Meja', price: 250000},
    {id: 4, name: 'kursi', price: 100000},
    {id: 5, name: 'Keranjang baju', price: 20000},
    {id: 6, name: 'rak piring', price: 100000},
  ]

  public selectedItems: selecteditem[]=[];

  addItem(item:item){
    const duplicate = this.selectedItems.findIndex(({id}) => id === item.id);
    if(duplicate >= 0){this.selectedItems[duplicate].amount += 1}
    else{this.selectedItems.push({...item, amount: 1})}
  }
}