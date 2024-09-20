import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatButtonModule, NgFor],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent {
  listImg = [
    './foto1.jpeg',
    './foto2.jpeg',
    './foto3.jpeg',
    './foto4.jpeg',
    './foto7.jpeg'
  ]
}
