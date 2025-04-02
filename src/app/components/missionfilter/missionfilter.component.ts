import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; // Add this
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule, // Add this
    FormsModule
  ],
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Output() filterYear = new EventEmitter<string>();
  year: string = ''; // Bind to the input

  applyFilter(): void {
    this.filterYear.emit(this.year);
  }

  clearFilter(): void {
    this.year = '';
    this.filterYear.emit('');
  }
}