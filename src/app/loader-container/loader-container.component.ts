import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-loader-container',
  templateUrl: './loader-container.component.html',
  styleUrls: ['./loader-container.component.scss'],
})
export class LoaderContainerComponent implements OnInit, AfterViewChecked {

  items: Array<string>;
  constructor() {
    this.items = Array(Math.floor(Math.random() * 10) + 5).fill('a');
  }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    const height = document.getElementById('loader-modal').clientHeight;
    const element = document.getElementById('myModal');
    element.style.setProperty('--height', `${height}px`);
  }

}
