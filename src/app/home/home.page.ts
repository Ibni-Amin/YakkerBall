import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Browser } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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
      cate_name: 'Content',
      cate_img: '../../assets/images/content.png',
      cate_url: 'https://yakkerball.com/',
    },
  ];
  constructor() {}

  async openLinkInWebView(url: string) {
    await Browser['open']({ url: url });
  }

  openLink(){
    console.log('This is my Console');
  }
}
