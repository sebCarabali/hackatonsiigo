import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  query: string;
  results: string[];

  constructor(private service: SearchService) { }

  ngOnInit() {

  }

  onKeyPressed() {
    this.service.getSuggestions(this.query).subscribe(response => {
      this.results = response;
    });
  }

  onClickResult(index: number) {
    // find the result selected by the user
    this.query = this.results[index];//.find((current, idx, array) => idx === index);
  }
}
