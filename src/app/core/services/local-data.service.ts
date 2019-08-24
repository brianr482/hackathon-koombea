import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  public localFavs = [];
  constructor() {
    const localFavs = localStorage.getItem('localFav');
    if (localFavs) {
      this.localFavs = JSON.parse(localFavs);
    }
  }

  addLocalFavs(itemId: string) {
    this.localFavs.push(itemId);
    this.syncLocalStorage();
  }

  removeLocalFav(itemId: string) {
    this.localFavs.push(itemId);
    this.localFavs = this.localFavs
      .filter((id: string) => id !== itemId);
    this.syncLocalStorage();
  }

  private syncLocalStorage() {
    localStorage.setItem('localFav', JSON.stringify(this.localFavs));
  }
}
