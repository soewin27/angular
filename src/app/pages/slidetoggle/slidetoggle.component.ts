import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-slidetoggle',
  templateUrl: './slidetoggle.component.html',
  styleUrls: ['./slidetoggle.component.scss']
})
export class SlidetoggleComponent implements OnInit {

  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  ngOnInit(): void {
  }

}
