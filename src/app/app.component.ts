import { Component } from '@angular/core'; //component deklerasyonunu kullanmak icin böyle import etmemiz lazim

@Component({
  // bu deklerasyon yani sen bir componentsin diyoruz
  selector: 'app-root',
  templateUrl: './app.component.html', //sen buranin yoneticisi sin
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Northwind';
  username: string = 'Vedat';
}
