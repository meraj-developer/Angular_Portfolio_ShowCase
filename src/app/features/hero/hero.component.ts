import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

  @Input() NameTitle!:string;

  downloadResume()
  {
    const link = document.createElement('a')
    link.href = 'assets/MerajResume.pdf'
    link.download = 'MerajResume.pdf'
    link.click()
  }

}
