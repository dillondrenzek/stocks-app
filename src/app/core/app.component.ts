import { Component, Inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as tokens from './tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stocks';

  get version(): string {
    return this.appVersion;
  }

  constructor(
    @Inject(tokens.APP_VERSION) private appVersion: string,
    private titleService: Title
  ) { }

  ngOnInit() {
    let existingTitle = this.titleService.getTitle();
    this.titleService.setTitle(existingTitle + ' | ' + this.version);
  }
}
