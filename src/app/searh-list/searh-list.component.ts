import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetApiService } from '../get-api.service';
@Component({
  selector: 'app-searh-list',
  templateUrl: './searh-list.component.html',
  styleUrls: ['./searh-list.component.css'],
})
export class SearhListComponent implements OnInit {
  company: any;
  companiId: any;
  constructor(private route: ActivatedRoute, private api: GetApiService) {}

  ngOnInit(): void {
    const id2: any = this.route.snapshot.paramMap.get('companiId');

    console.log(typeof id2);

    this.api.apiCallComp(+id2).subscribe((data) => {
      this.company = data;
      console.log(this.company);
    });
  }
}
