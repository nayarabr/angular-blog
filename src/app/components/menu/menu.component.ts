import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItens: string[] = [
    "work",
    "approach",
    "culture",
    "careers",
    "blog"
  ]
  constructor() { }

  ngOnInit(): void {
  }


}
