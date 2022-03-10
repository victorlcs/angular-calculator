import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LocalFileReaderComponent } from "./local-file-reader.component";
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from "../directives/highlight.directive";
const routes:Routes = [
    {path:'',component:LocalFileReaderComponent}
]

@NgModule({
    declarations:[
        LocalFileReaderComponent,
        HighlightDirective
    ],
    imports:[
        RouterModule.forChild(routes),
        HttpClientModule
    ],
})
export class LocalFileReaderModule {}