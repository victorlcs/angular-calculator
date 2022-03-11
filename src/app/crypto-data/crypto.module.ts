import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CryptoDataComponent } from "./crypto-data.component";
import { CryptoService } from './crypto.service';
import {MatTableModule} from '@angular/material/table';
const routes:Routes = [
    {path:'', component:CryptoDataComponent}
]

@NgModule({
    declarations:[CryptoDataComponent],
    imports:[
        HttpClientModule,
        RouterModule.forChild(routes),
        MatTableModule
    ],
    providers:[CryptoService]
})


export class CryptoModule {

}