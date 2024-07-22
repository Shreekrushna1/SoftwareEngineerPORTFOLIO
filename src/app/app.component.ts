import { isPlatformBrowser, NgIf } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  constructor(private router:Router,private activatedRoute:ActivatedRoute,@Inject(PLATFORM_ID) private platformId: any){}
  title = 'portfolio';
  isHome:boolean=false;
  isExperience:boolean=false;
  isProjects:boolean=false;
  isContact:boolean=false;
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      let urlSplit = window.location.href.split('/');
      if(!urlSplit.includes('Experience') && !urlSplit.includes('About') && !urlSplit.includes('Contact')){
        this.isHome = true;
      }
      if(urlSplit.includes('Experience')){
        this.isExperience = true;
      }
    }
    
  }
  changePage(name:string){
    if(name === 'Experience'){
      this.isHome = false;
      this.isExperience = true;
      this.isContact = false;
      this.isProjects = false;
    }
    if(name ==='Home'){
      this.isExperience =false;
      this.isContact = false;
      this.isProjects = false;
      this.isHome = true;
    }
    if(name ==='Contact'){
      this.isExperience =false;
      this.isHome = false;
      this.isProjects = false;
      this.isContact = true;
    }
    if(name ==='Projects'){
      this.isExperience =false;
      this.isHome = false;
      this.isProjects = true;
      this.isContact = false;
    }

  }
  downloadCV() {
    const link = document.createElement('a');
    link.href = './ShreekrushnaShinde.pdf'; 
    link.download = 'ShreekrushnaShindeCV.pdf';
    link.click();
  }

  makeCall() {
    window.location.href = 'tel:+918055060124'; 
  }

  sendEmail() {
    window.location.href = 'mailto:krushnaproducts@gmail.com';
  }
}
