import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLoaderShow: boolean = false;
  cateType: any[] = [
    {
      cate_name: 'Home',
      cate_img: '../../assets/images/home.png',
      cate_url: 'https://yakkerball.com/',
    },
    {
      cate_name: 'Log In',
      cate_img: '../../assets/images/login.png',
      cate_url: 'https://yakkerball.com/login',
    },
    {
      cate_name: 'Sign Up',
      cate_img: '../../assets/images/signup.png',
      cate_url: 'https://yakkerball.com/register',
    },
    {
      cate_name: 'Terms & Conditions',
      cate_img: '../../assets/images/terms.png',
      cate_url: 'https://yakkerball.com/terms-and-conditions',
    },
    {
      cate_name: 'Privacy',
      cate_img: '../../assets/images/privay.png',
      cate_url: 'https://yakkerball.com/privacy-policy',
    },
    {
      cate_name: 'Contact',
      cate_img: '../../assets/images/content.png',
      cate_url: 'https://yakkerball.com/',
    },
  ];
  constructor(private loadingCtrl: LoadingController) { }



  async openLinkInWebView(url: string) {
    this.isLoaderShow = true;
    if (url) {
      console.log('Url:--', url);
      const browser = await Browser.open({ url: url });

      Browser.addListener('browserPageLoaded', () => {
        this.isLoaderShow = false;
        console.log('Url: Page Loaded',);
      })

    } else {
      this.isLoaderShow = false;
    }
  }

}
