import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: Launch[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.getAllLaunches().subscribe((data) => {
      this.launches = data;
    });
  }
}