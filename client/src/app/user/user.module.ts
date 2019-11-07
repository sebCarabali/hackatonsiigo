import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './browser/search/search.component';
import { SearchService } from './browser/search/search.service';
import { BrowserComponent } from './browser/browser.component';
import { ResultsComponent } from './browser/results/results.component';



@NgModule({
    imports: [FormsModule],
    declarations: [SearchComponent, BrowserComponent, ResultsComponent],
    exports: [SearchComponent, BrowserComponent],
    providers: [SearchService]
})
export class UserModule { }