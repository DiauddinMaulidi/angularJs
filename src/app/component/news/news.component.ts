import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SwiperContainer } from "swiper/element";
import { DatFormatPipe } from '../../pipes/dat-format.pipe';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    MatButtonModule,
    DatFormatPipe
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsComponent {
  @ViewChild('newsSwiper') swiper!: ElementRef<SwiperContainer>;

  listNews = [
    {
      title: 'Contoh 1',
      tag: 'berita 1',
      dataPost: new Date('2023-05-02'),
      author: "Dia'",
      image: './foto1.jpeg'
    },
    {
      title: 'Contoh 2',
      tag: 'berita 2',
      dataPost: new Date('2024-05-02'),
      author: "uddin",
      image: './foto2.jpeg'
    },
    {
      title: 'Contoh 3',
      tag: 'berita 3',
      dataPost: new Date('2025-05-02'),
      author: "Maulidi",
      image: './foto3.jpeg'
    },
  ]

  onPrev() {
    this.swiper.nativeElement.swiper.slidePrev()
  }
  onNext() {
    this.swiper.nativeElement.swiper.slideNext()
  }
}
