import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eatab-web';

  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer){
    this.registerSvgs();
  }

  private registerSvgs(){
    this.matIconRegistry.addSvgIcon(
      "eatab",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/eatab-logo.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "github",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/github.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "linkedin",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/linkedin.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "material",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/material.svg")
    );
  }

}
