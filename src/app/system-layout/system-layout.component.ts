import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";

@Component({
    selector: 'app-system-layout',
    templateUrl: './system-layout.component.html',
    styleUrls: ['./system-layout.component.scss']
})
export class SystemLayoutComponent implements OnInit {
    mobileQuery: MediaQueryList;


    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    ngOnInit(): void {
    }

    onLogout() {

    }
}
