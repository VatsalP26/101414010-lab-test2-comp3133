import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { SpacexService } from '../../services/spacex.service';
import { Launch } from '../../models/launch';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-missionlist',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    RouterLink,
    MissionfilterComponent
  ],
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: Launch[] = [];
  filteredLaunches: Launch[] = [];

  constructor(
    private spacexService: SpacexService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.spacexService.getAllLaunches().subscribe((data) => {
        this.launches = data;
        this.filteredLaunches = data;
      });
    }
  }

  getLaunchYear(launch: Launch): string {
    return new Date(launch.date_utc).getFullYear().toString();
  }

  applyFilters(filters: { year: string; launchStatus: string; landingStatus: string }): void {
    this.filteredLaunches = this.launches.filter(launch => {
      const matchesYear = filters.year ? this.getLaunchYear(launch) === filters.year : true;
      const matchesLaunchStatus = filters.launchStatus
        ? launch.success.toString() === filters.launchStatus
        : true;
      const matchesLandingStatus = filters.landingStatus
        ? (launch.cores && launch.cores[0] && launch.cores[0].landing_success !== null
          ? launch.cores[0].landing_success.toString() === filters.landingStatus
          : filters.landingStatus === 'unknown')
        : true;
      return matchesYear && matchesLaunchStatus && matchesLandingStatus;
    });
  }
}