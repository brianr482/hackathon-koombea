import { Injectable } from '@angular/core';
import { __spreadArrays } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  chunkOfDummyArr(total: number, chunkSize: number) {
    let rest = total;
    const arrNumber = Math.ceil(total / chunkSize);
    const arrs = [];
    for (let i = 0; i < arrNumber; i++) {
      const diff = rest - chunkSize;
      if (diff >= 0) {
        arrs.push(new Array(chunkSize));
        rest -= diff;
      } else {
        arrs.push(new Array(rest));
      }
    }
    return arrs;
  }

  fillArrayFromNumber(start: number, end: number) {
    const arr = new Array(end - start);
    for (let i = 0; i < arr.length; i++) {
      arr.push(i);
    }
  }
}
