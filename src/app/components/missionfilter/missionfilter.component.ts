import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Output() filterChange = new EventEmitter<{
    year: string;
    launchStatus: string;
    landingStatus: string;
  }>();

  year: string = '';
  launchStatus: string = '';
  landingStatus: string = ''; 

  applyFilter(): void {
    this.filterChange.emit({
      year: this.year,
      launchStatus: this.launchStatus,
      landingStatus: this.landingStatus
    });
  }

  clearFilter(): void {
    this.year = '';
    this.launchStatus = '';
    this.landingStatus = '';
    this.filterChange.emit({
      year: '',
      launchStatus: '',
      landingStatus: ''
    });
  }
}