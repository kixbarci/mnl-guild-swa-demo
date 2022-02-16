import { Component } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}}</div>`,
})
export class AppComponent implements OnInit {
  value = 'World';

  constructor(protected http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('/api/helloworld')
      .subscribe((data: any) => {
        this.value = data?.message;
      });
  }
}
