import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  backgroundIMG: string =
    'url(https://www.advantour.com/img/georgia/symbolics/georgia-flag.jpg)';
  title = 'angular-1';
  country: string = 'Georgia is';
  countryArray: string[] = ['Georgia', 'Germany', 'USA', 'Italy'];
  flagArray: string[] = [
    'https://www.advantour.com/img/georgia/symbolics/georgia-flag.jpg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/640px-Flag_of_Germany.svg.png',
    'https://img.freepik.com/premium-vector/realistic-united-states-national-flag_518397-2471.jpg',
    'https://t4.ftcdn.net/jpg/07/13/73/15/360_F_713731549_HRzSnBKnbvW3rrOcI8OU7n6duG32PRQp.jpg',
  ];
  flag: string =
    'https://www.advantour.com/img/georgia/symbolics/georgia-flag.jpg';
  country2: string = 'Europe';
  flag2: string =
    'https://t3.ftcdn.net/jpg/05/54/83/16/360_F_554831642_2I3IqkHjsb9GOcCVQJq9H56xzGD8r0H9.jpg';

  randomCountry() {
    const randomIndex = Math.floor(Math.random() * this.countryArray.length);
    this.country = this.countryArray[randomIndex] + ' says';
    this.flag = this.flagArray[randomIndex];
    this.country2 = 'არა რუსულ კანონს';
    this.flag2 =
      'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/3e/5d/0b/3e5d0bea-56d3-837a-44df-7d9ef617486d/artwork.jpg/1200x1200bf-60.jpg';
    // Bonus
    this.backgroundIMG = `url(${this.flagArray[randomIndex]})`;
  }
}
