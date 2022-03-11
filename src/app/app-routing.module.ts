import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";

const routes:Routes = [
    {path:'', component:LoginComponent},
    {path:'calculator', loadChildren:()=> import('./calculator/calculator.module').then(m => m.CalculatorModule)},
    {path:'readfile',loadChildren:()=>import('./local-file-reader/local-file-reader.module').then(m => m.LocalFileReaderModule)},
    {path:'crypto',loadChildren:()=>import('./crypto-data/crypto.module').then(m => m.CryptoModule)}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    providers:[]
})
export class AppRoutingModule {}