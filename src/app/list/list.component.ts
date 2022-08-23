import { Component, OnInit, ɵdevModeEqual } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import { ListService } from '../service/list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  token: any;
  breedList: any


  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private listService: ListService,
  ) {}

  ngOnInit() {
    this.token = this.localStorageService.get('token');
    this.listService.refreshToken()
    console.log(this.token);
    if (this.validToken(this.token)) {
      this.router.navigate(['/register']);
    }
    this.getAllPets('chihuahua')
  }
  validToken(token: any) {
    return Object.keys(token).length === 0;
  }

  getAllPets(breed:string) {
    this.listService.getAllPets(breed).subscribe((petList: any[]) => {
      this.breedList = petList;
    })
  }

}
