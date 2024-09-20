import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from '../../component/header/header.component';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { BannerComponent } from '../../component/banner/banner.component';
import { AboutComponent } from '../../component/about/about.component';
import { NewsComponent } from '../../component/news/news.component';

@Component({
  selector: 'app-portofolio-web',
  standalone: true,
  imports: [
    HeaderComponent,
    NavbarComponent,
    BannerComponent,
    AboutComponent,
    NewsComponent,
  ],
  templateUrl: './portofolio-web.component.html',
  styleUrl: './portofolio-web.component.css'
})
export class PortofolioWebComponent implements OnInit {

  navbarId: any;
  bannerId: any;

  bannerIsScroll: boolean = false
  aboutIsScroll: boolean = false

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.navbarId = this.el.nativeElement.querySelector('#navbarId').offsetTop;
    this.bannerId = this.el.nativeElement.querySelector('#bannerId').offsetTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.bannerIsScroll = window.scrollY > this.bannerId

  }

}
