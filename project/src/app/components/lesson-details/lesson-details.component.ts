import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // בשביל פייפים ותנאים
import { MatCardModule } from '@angular/material/card'; // ייבוא ה-Card של מטיריאל

@Component({
  selector: 'app-lesson-details',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.css'
})
export class LessonDetailsComponent implements OnInit {
  @Input() lesson: any;
  isStarted = false;

  ngOnInit(): void {
    const today = new Date();
    const startDate = new Date(this.lesson.startDate);
    this.isStarted = today >= startDate;
    if (this.isStarted && this.lesson.hour < today.getHours()) {
      this.isStarted = false;
    }
  }

}
