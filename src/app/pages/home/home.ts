import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  selectedProfile = 'pai';

  selectProfile(profile: string) {
    this.selectedProfile = profile;
  }

}