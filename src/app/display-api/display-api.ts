import { Component, inject, OnInit } from '@angular/core';
import { HttpProviderService } from '../Services/http-provider.service';

interface Object {
  userId: number;
  id: number;
  body: string;
  title: string;
}

@Component({
  selector: 'display-api',
  standalone: false,
  templateUrl: './display-api.html',
  styleUrl: './display-api.css',
})
export class DisplayApi implements OnInit {
  httpProvider = inject(HttpProviderService);
  postList: Object[] = [];
  ngOnInit(): void {
    this.getAllPosts();
  }
  async getAllPosts() {
    this.httpProvider.getAllEmployee().subscribe(
      (data: any) => {
        if (data != null && data.body != null) {
          console.log('data', data);
          var resultData = data.body;
          if (resultData) {
            this.postList = resultData;
          }
        }
      },
      (error: any) => {
        if (error) {
          if (error.status == 404) {
            if (error.error && error.error.message) {
              this.postList = [];
            }
          }
        }
      }
    );
  }
}
