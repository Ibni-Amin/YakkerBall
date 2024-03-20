import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    SplashScreen.show({
      autoHide: false,
    });
    this.initializeApp();
  }

  // initialize app
  initializeApp() {
    this.platform.ready().then((p: any) => {
      console.log('platform ready:-', p);
      setTimeout(() => {
        SplashScreen.hide({
          fadeOutDuration: 500,
        });
        console.log('splash hidden');
      }, 4000);
    });
  }
}
