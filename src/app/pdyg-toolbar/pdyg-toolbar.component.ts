import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdyg-toolbar',
  templateUrl: './pdyg-toolbar.component.html',
  styleUrls: ['./pdyg-toolbar.component.scss']
})
export class PdygToolbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
