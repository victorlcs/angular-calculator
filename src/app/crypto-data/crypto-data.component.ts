import { Component, OnInit } from '@angular/core';
import { CryptoService } from './crypto.service';

@Component({
  selector: 'app-crypto-data',
  templateUrl: './crypto-data.component.html',
  styleUrls: ['./crypto-data.component.scss']
})
export class CryptoDataComponent implements OnInit {

  constructor(private cryptoService : CryptoService) { }

  ngOnInit(): void {
    this.cryptoService.getCointMaketData({currency:'usd',order:'market_cap_desc',
  pageSize:10,currPage:1,sparkline:false}).subscribe(result => {
    console.log(result);
  })
  }

}
