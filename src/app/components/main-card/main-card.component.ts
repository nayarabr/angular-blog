import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css'],
})
export class MainCardComponent implements OnInit {
  category: string = 'product';
  date: string = 'July 24, 2020';
  title: string =
    "Interview - What it's like to work remotely in big-sized product development?";
  description: string =
    "People say tha developing products isn't easy. Neither it is to builf long-distance relationships. But, how about doing both, simultaneously?";
  authorName: string = 'Bruno Teixeira';
  authorRole: string = 'Lead Product Owner';

  constructor() {}

  ngOnInit(): void {}
}
