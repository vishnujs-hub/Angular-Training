import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookSearchCacheService {
  private cache = new Map<string, string[]>();

  store(key: string, value: string[]) {
    this.cache.set(key, value);
  }

  retrieve(key: string): string[] | undefined {
    return this.cache.get(key);
  }
}
