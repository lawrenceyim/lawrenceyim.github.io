import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AboutMe} from './components/about-me/about-me';
import {Projects} from './components/projects/projects';
import {Experience} from './components/experience/experience';
import {Education} from './components/education/education';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutMe, Projects, Experience, Education],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
