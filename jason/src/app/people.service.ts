import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    private basicApiPath = 'https://api.themoviedb.org/3/person';

// tslint:disable-next-line: deprecation
    constructor(public http: Http) {
        console.log('hello beast');
    }

    getToWork() {
        return this.http.get(this.basicApiPath + '/6384/combined_credits?api_key=634232f1957195aa41bb453205010974&language=pt-BR');
    }

    getTaiChi() {
        return this.http.get(this.basicApiPath + '/6384/images?api_key=634232f1957195aa41bb453205010974');
    }

    getJohnWick() {
        return this.http.get(this.basicApiPath + '/6384?api_key=634232f1957195aa41bb453205010974&language=pt-BR');
    }
}
