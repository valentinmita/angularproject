import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { results } from '../results';
import { GetApiService } from '../get-api.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css'],
})
export class WorkDetailsComponent implements OnInit {
  companiId: any;
  item: any;
  constructor(private route: ActivatedRoute, private api: GetApiService) {}

  ngOnInit() {
    const id: any = this.route.snapshot.paramMap.get('selectedId');
    console.log(typeof id);

    this.api.apiCallid(+id).subscribe((item) => {
      this.item = item;
      console.log(item);
    });
  }
}
