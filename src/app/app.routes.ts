import { Routes } from '@angular/router';
import { PortofolioWebComponent } from './template/portofolio-web/portofolio-web.component';
import { AdminComponent } from './template/admin/admin.component';
import { AboutComponent } from './component/about/about.component';
import { NewsComponent } from './component/news/news.component';

export const routes: Routes = [
    {
        path: '',
        component: PortofolioWebComponent, canActivateChild: [], children: [
            { path: '', component: PortofolioWebComponent },
            { path: 'about', component: AboutComponent },
            { path: 'news', component: NewsComponent }
        ]
    },
    {
        path: 'admin',
        component: AdminComponent
    },
];
