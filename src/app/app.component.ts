import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { filter, Subscription, windowWhen } from 'rxjs';
import { AppService } from './Service/app.service';
import { TokenStorageService } from './Service/User/token-storage.service';



var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    isEmployee = false;
    currentUserVar: any
    isLoggedIn = false;

    constructor(private tokenStorage: TokenStorageService, private renderer: Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element: ElementRef, public location: Location, private app: AppService, private http: HttpClient) {
     /*this.app.authenticate(undefined, undefined)*/;

    }
    public get currentUser(): any {
        return this.tokenStorage.getUser;
    }


    @HostListener('window:scroll', ['$event'])
    hasScrolled() {

        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        var navbar = document.getElementsByTagName('nav')[0];

        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        } else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }

        lastScrollTop = st;
    };
    ngOnInit() {
        //Test log in 
        this.isLoggedinorNot();

        //End test

        //Test admin
        this.currentUserVar = this.tokenStorage.getUser();
        console.log("User :" + JSON.stringify(this.currentUserVar.authorities))
        var authorityString = JSON.stringify(this.currentUserVar.authorities);
        if (authorityString.indexOf("ROLE_ADMIN") === -1) {
            this.isEmployee = true;
        } else
            this.isEmployee = false;


        //End test admin


        var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            } else {
                window.document.activeElement.scrollTop = 0;
            }
            this.renderer.listen('window', 'scroll', (event) => {
                const number = window.scrollY;
                if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    navbar.classList.add('headroom--not-top');
                } else {
                    // remove logic
                    navbar.classList.remove('headroom--not-top');
                }
            });
        });
        this.hasScrolled();
    }


    isLoggedinorNot() {
        if (this.tokenStorage.getUser() === null) {
            this.isLoggedIn = false;
            console.log("Log in   = = " + this.isLoggedIn)



        }
        else {
            this.isLoggedIn = true;
            console.log("Log in   = = " + this.isLoggedIn)
            //  window.location.reload() ;

        }

    }

    testAdmin() {
        //Test admin
        this.currentUserVar = this.tokenStorage.getUser();
        console.log("User :" + JSON.stringify(this.currentUser.authorities))
        var authorityString = JSON.stringify(this.currentUser.authorities);
        if (authorityString.indexOf("ROLE_ADMIN") === -1) {
            this.isEmployee = true;
        } else
            this.isEmployee = false;


        //End test admin
    }



}
