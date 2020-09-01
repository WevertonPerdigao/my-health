import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {TitleService} from "./title.service";

@Component({
    selector: 'app-system-layout',
    templateUrl: './system-layout.component.html',
    styleUrls: ['./system-layout.component.scss']
})
export class SystemLayoutComponent implements OnInit {
    mobileQuery: MediaQueryList;
    title: string;


    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef,
                media: MediaMatcher,
                private titleService: TitleService) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.titleService.title.subscribe(title => this.title = title);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }

    ngOnInit(): void {

    }

    onLogout() {

    }
}
