import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Paginator } from '@shared/models';
import { UtilsService } from '@core/services/utils.service';

declare const CHUNK_SIZE = 5;

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  public partsOfPages: any[];
  private paginatorO: Paginator;
  @Output() pageEvent = new EventEmitter<Paginator>();
  @Input() paginator: Paginator;
  // @Input() set paginator(paginator: Paginator) {
  //   this.partsOfPages = this.utilsService
  //     .chunkOfDummyArr(paginator.total, CHUNK_SIZE);
  // }
  constructor(
    private utilsService: UtilsService
  ) { }

  ngOnInit() {
  }

  selectPage(index: number) {
    this.paginator.index = index;
    this.pageEvent.emit(this.paginator);
  }

  get dummyIterator() {
    // const page = Math.ceil(this.paginator.index / CHUNK_SIZE) - 1;
    // return this.partsOfPages[page];
    return new Array(this.paginator.total);
  }

  get pageDescription() {
    return `Página ${this.paginator.index} de ${this.paginator.total}`;
  }

}
