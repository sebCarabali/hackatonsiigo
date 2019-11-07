import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { Observable } from 'rxjs';

const LOCALSTORAGEKEY = 'searchHistory';

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
    this.results = [];
  }

  onKeyUp() {
    if (this.query) {
      this.service.getSuggestions(this.query).subscribe(response => {
        this.results = this._getLocalStorageSuggestions();
      });
    }
  }

  onClickSearch() {
    this._saveLocalStorage();
    this._loadRelatedDataToQuery();
  }

  _loadRelatedDataToQuery() {

  }

  _saveLocalStorage() {
    let searchHistory = localStorage.getItem(LOCALSTORAGEKEY);
    if (searchHistory) {
      if (!this._isSavedInLocalStorage(searchHistory, this.query)) {
        searchHistory += ';' + this.query;
      }
    } else {
      searchHistory = this.query;
    }
    localStorage.setItem(LOCALSTORAGEKEY, searchHistory);
  }

  _isSavedInLocalStorage(history: string, query: string) {
    let isSaved = false;
    history
      .split(';')
      .map(s => s.toLowerCase())
      .forEach(element => {
        if (element == query.toLowerCase()) {
          isSaved = true;
        }
      });
    return isSaved
  }

  _getLocalStorageSuggestions(): string[] {
    if (this.query) {
      let suggestions: string[] = [];
      let searchHistory = localStorage.getItem(LOCALSTORAGEKEY);
      if (searchHistory) {
        let allSearch = searchHistory.split(';').map(s => s.toLowerCase());
        allSearch.forEach(element => {
          if (element.startsWith(this.query.toLowerCase())) {
            suggestions.push(element);
          }
        });
      }
      return suggestions;
    }
  }

  getResults() {
    return this.results;
  }

  onClickResult(index: number) {
    // find the result selected by the user
    this.query = this.results[index];//.find((current, idx, array) => idx === index);
    this.onKeyUp();
  }
}
