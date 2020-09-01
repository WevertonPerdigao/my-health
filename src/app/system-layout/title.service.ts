import {BehaviorSubject} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TitleService {

    title = new BehaviorSubject<string>('');


    setTitle(title: string) {
        this.title.next(title);
    }
}
