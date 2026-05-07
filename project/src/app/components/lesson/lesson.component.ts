import { Component } from '@angular/core';
import { LessonDetailsComponent } from '../lesson-details/lesson-details.component';

@Component({
  selector: 'app-lesson',
  standalone: true,
  imports: [LessonDetailsComponent],
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.css'
})
export class LessonComponent {
  lessonsList = [
    {
      name: 'נגינה',
      teacher: 'מורה 1',
      price: 100,
      day: 1,
      hour: '09:00',
      meetings: 5,
      startDate: '2023-01-01'
    },
    {
      name: 'ציור',
      teacher: 'מורה 2',
      price: 150,
      day: 2,
      hour: '10:00',
      meetings: 5,
      startDate: '2023-01-01'
    },
    {
      name: 'אפיה',
      teacher: 'מורה 3',
      price: 200,
      day: 3,
      hour: '23:00',
      meetings: 5,
      startDate: '2026-05-05'
    }, {
      name: 'אפיה',
      teacher: 'מורה 3',
      price: 200,
      day: 3,
      hour: '23:00',
      meetings: 5,
      startDate: '2026-10-12'
    },{
      name: 'אנגלית',
      teacher: 'מורה 5',
      price: 200,
      day: 3,
      hour: '23:00',
      meetings: 5,
      startDate: '2026-10-10'
    },

  ];
}
