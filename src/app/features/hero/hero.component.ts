import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {

  @Input() NameTitle!:string;
  // protected socialLinks:string=''

  downloadResume()
  {
    const link = document.createElement('a')
    link.href = 'assets/MerajResume.pdf'
    link.download = 'MerajResume.pdf'
    link.click()
  }

  protected socialLinks = 
  [
    {link:'https://www.linkedin.com/in/md-meraj-75a97520a/',icon:'bi bi-linkedin me-5 text-white'},
    {link:'https://github.com/meraj-developer',icon:'bi bi-git me-5 text-white'},
    {link:'https://github.com/meraj-developer',icon:'bi bi-git me-5 text-white'},
    {link:'https://x.com/',icon:'bi bi-twitter text-white'}
  ]

  protected skills = 
  [
    'Angular',
    'Javascript',
    'Typescript',
    'Bootstrap',
    'Angular Material',
    'HTML5/CSS3',
  ]



}
