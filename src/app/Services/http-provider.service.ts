import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var httpLink = {
  getAllPosts: 'https://jsonplaceholder.typicode.com/posts',
};

@Injectable({
  providedIn: 'root',
})
export class HttpProviderService {
  webAPIService = inject(WebApiService);

  public getAllEmployee(): Observable<any> {
    return this.webAPIService.get(httpLink.getAllPosts);
  }
}
