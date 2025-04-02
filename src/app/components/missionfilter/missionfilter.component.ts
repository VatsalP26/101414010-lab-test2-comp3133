// src/app/components/missionfilter/missionfilter.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Output() filterYear = new EventEmitter<string>();

  onFilterChange(event: Event): void {
    const year = (event.target as HTMLInputElement).value;
    this.filterYear.emit(year);
  }
}