import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-scroll-to-top',
    templateUrl: './scroll-to-top.component.html',
    styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent {
    ScrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    showElement = false;
    @HostListener('window:scroll', [])
    onWindowScroll() {
        let valorScroll = window.scrollY
        if (valorScroll < 100) {
            this.showElement = false
        } else if (valorScroll >= 100) {
            this.showElement = true
        }
    }
}



