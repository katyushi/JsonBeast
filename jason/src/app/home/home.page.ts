import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public ima = Array<any>();
  public info: any;
  public image: any;
  public works: any;
  public baio: any;
  public name: any;
  public bday: any;
  public pob: any;
  public bio: any;

  constructor(
    public route: ActivatedRoute,
    public people: PeopleService
  ) {
    this.works = this.people.getToWork().subscribe(
      data => {
        const dataa = (data as any);
        const amy = JSON.parse(dataa._body);
        console.log(amy);
        this.baio = amy.cast;
      },
      error => {
        console.log(error);
      }
    );

    this.image = this.people.getTaiChi().subscribe(
      data => {
        const tada = (data as any);
        const yam = JSON.parse(tada._body);
        console.log(yam);
        this.ima = yam.profiles;
      },
      error => {
        console.log(error);
      }
    );

    this.info = this.people.getJohnWick().subscribe(
      data => {
        const atad = (data as any);
        const may = JSON.parse(atad._body);
        console.log(data as any);
        console.log(may);
        this.name = may.name;
        this.bday = may.birthday;
        this.pob = may.place_of_birth;
        this.bio = may.biography;
      },
      error => {
        console.log(error);
      }
    );
  }

}
