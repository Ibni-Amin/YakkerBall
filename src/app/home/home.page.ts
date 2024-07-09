import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { CsrfTokenService } from '../services/csrf.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isLoaderShow: boolean = false;
  openUrl: string = '';
  page: string = '';
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
  isAppData: string = 'no';
  constructor(private apiService: CsrfTokenService) {}

  ngOnInit(): void {
    this.apiService.get().subscribe((res: any) => {
      this.isAppData = res.apple;
      console.log('res:---', res);
    });
  }

  async openLinkInWebView(url: string, pageName: string) {
    this.isLoaderShow = true;
    if (url) {
      console.log('Url:--', url);
      // let timestamp = new Date().getTime();
      // const u = `${url}?key=${timestamp}`;
      this.openUrl = url;
      this.page = pageName;
    } else {
      this.isLoaderShow = false;
    }

    setTimeout(() => {
      this.isLoaderShow = false;
    }, 2000);
  }

  goBack() {
    this.openUrl = '';
    this.page = '';
  }
}
