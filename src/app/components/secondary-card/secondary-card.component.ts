import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-card',
  templateUrl: './secondary-card.component.html',
  styleUrls: ['./secondary-card.component.css'],
})
export class SecondaryCardComponent implements OnInit {
  category: string = 'development';
  date: string = 'July 2, 2020';
  title1: string =
    'Hybrid vs. Native - Heer is how tou can choose one over the other...';
  title2: string =
    'From monolithic to headless: how and why you should adapt your WordPress stack';
  description1: string =
    'There is no denying it, hybrid mobile development is booming and decaming the main option when considering developing a mobile application due to the lower costs and faster development time.';
  description2: string =
    'Every dynamic website consists of two main parts: the backend and the frontend. The backend, which in marketing websites is commonly a Content Management System (CMS), allows the website owners...';

  authorName1: string = 'Nayara Bastos';
  authorRole1: string = 'Front-end Developer';
  authorName2: string = 'Pedro Bastos';
  authorRole2: string = 'Back-end Developer';

  constructor() {}

  ngOnInit(): void {}
}
