import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CryptoService {
  private cryptoApiUrl = 'https://api.coingecko.com/api/v3';

  constructor(private http:HttpClient) { 

  }
//https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false
  getCointMaketData(param:{currency:string,order:string,pageSize:number,currPage:number,sparkline:boolean}) {
    return this.http.get(`${this.cryptoApiUrl}/coins/markets?vs_currency=${param.currency}&order=${param.order}&per_page=${param.pageSize}&page=${param.currPage}&sparkline=${param.sparkline}`);
  }
}
