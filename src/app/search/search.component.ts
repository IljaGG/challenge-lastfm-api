import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  enteredSearchValue: string = '';

  @Output()
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  /**
 * Emits an event containing the entered search value when the search text is changed.
 * The search value is obtained from the enteredSearchValue property.
 * The event is outputted to the parent component using the searchTextChanged EventEmitter.
 */
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }

}
