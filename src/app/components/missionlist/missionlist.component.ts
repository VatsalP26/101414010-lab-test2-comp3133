import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list'; // Add this
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule, // Add this
    RouterLink,
    MissionfilterComponent
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];

  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.getAllLaunches().subscribe((data) => {
      this.launches = data;
      this.filteredLaunches = data;
    });
  }

  getLaunchYear(launch: Launch): string {
    return new Date(launch.date_utc).getFullYear().toString();
  }

  filterByYear(year: string): void {
    if (!year) {
      this.filteredLaunches = this.launches;
    } else {
      this.filteredLaunches = this.launches.filter(launch => 
        this.getLaunchYear(launch) === year
      );
    }
  }
}