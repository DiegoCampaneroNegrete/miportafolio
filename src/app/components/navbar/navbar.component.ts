import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private vps: ViewportScroller) { }

  ngOnInit() {
  }

  scroll(id) {
    
    console.log('el id: ', id);
    const el = document.getElementById(id);
    console.log(el);
    el.scrollIntoView();
    ///*
    console.log('el id: ', id);
    this.vps.scrollToAnchor(id);
    //*/
  }

    @HostListener("window:scroll", ['$event'])
    doSomethingOnWindowsScroll($event:Event){
      this.scrollFunction();
    }

  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

}
