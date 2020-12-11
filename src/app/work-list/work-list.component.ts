import { Component, OnInit } from '@angular/core';
import { results } from '../results';
import { GetApiService } from '../get-api.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.css'],
})
export class WorkListComponent implements OnInit {
  data = {
    results: Object,
  };
  prova: results[] = [];
  item: any;
  selectedId: any;
  $event: any;
  chosenMod: string = '';
  constructor(private api: GetApiService, private route: ActivatedRoute) {}

  modo() {
    switch (this.chosenMod) {
      case 'mod1':
        this.api.apiCallLev_entry().subscribe((data: any) => {
          this.prova = data.results;
          console.log(this.prova);
        });

        console.log('ciao');
        break;
      case 'mod2':
        this.api.apiCallLev_mid().subscribe((data: any) => {
          this.prova = data.results;
          console.log(this.prova);
        });
        console.log('ciao1');
        break;
      case 'mod3':
        this.api.apiCallLev_senior().subscribe((data: any) => {
          this.prova = data.results;
          console.log(this.prova);
        });
        console.log('ciao2');
        break;
      case 'mod4':
        this.api.apiCallLev_inter().subscribe((data: any) => {
          this.prova = data.results;
          console.log(this.prova);
        });

        console.log('ciao4');
        break;

      case 'mod5':
        this.api.apiCallLev_management().subscribe((data: any) => {
          this.prova = data.results;
          console.log(this.prova);
        });

        console.log('ciao5');
        break;
    }
  }

  ngOnInit() {
    this.api.apiCall().subscribe((data: any) => {
      this.prova = data.results;
      console.log(this.prova);
    });
  }
}
