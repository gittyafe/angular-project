import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // ייבוא הקומפוננטה
import { ModuleRegistry, AllCommunityModule, ColDef, ICellRendererParams } from 'ag-grid-community';
import { themeQuartz } from 'ag-grid-community';
// import { provideGlobalGridOptions } from 'ag-grid-community';

// // Mark all grids as using legacy themes
// provideGlobalGridOptions({
//     theme: "legacy",
// });

// 2. רישום המודולים (זה חייב לקרות מחוץ למחלקה או ב-Constructor)
ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  myTheme = themeQuartz; // הגדרת ערכת עיצוב

  // הגדרת העמודות
  columnDefs: ColDef[] = [
    { field: 'firstName', headerName: 'שם פרטי', filter: 'agTextColumnFilter' },
    { field: 'lastName', headerName: 'שם משפחה', filter: 'agTextColumnFilter' },
    { field: 'phone', headerName: 'טלפון', filter: 'agTextColumnFilter' },
    { field: 'idNumber', headerName: 'תעודת זהות', filter: 'agTextColumnFilter' },
    { field: 'lesson', headerName: 'שיעור', filter: 'agTextColumnFilter' },
    {
      field: 'price',
      headerName: 'מחיר',
      filter: 'agNumberColumnFilter',
      valueFormatter: params => `₪${params.value}`
    },
    {
      field: 'isPaid',
      headerName: 'האם שולם',
      cellDataType: false,
      filter: true,
      valueFormatter: params => params.value ? '✅ שולם' : '❌ לא שולם'
    },
    {
      headerName: 'פעולות',
      field: 'details',
      cellRenderer: (params: ICellRendererParams) => {
        // יצירת כפתור בתוך התא
        const button = document.createElement('button');
        button.innerText = 'פרטים';
        button.classList.add('details-btn');
        button.addEventListener('click', () => this.showDetails(params.data));
        return button;
      }
    }
  ];

  // נתוני הנרשמות
  public rowData: any[] = [
    { firstName: 'שרה', lastName: 'לוי', phone: '050-1234567', idNumber: '123456789', lesson: 'ציור', price: 200, isPaid: true },
    { firstName: 'רבקה', lastName: 'כהן', phone: '052-7654321', idNumber: '987654321', lesson: 'נגינה', price: 350, isPaid: false },
    { firstName: 'רחל', lastName: 'אברהם', phone: '054-1112233', idNumber: '444555666', lesson: 'תפירה', price: 150, isPaid: true },
  ];

  // הגדרות ברירת מחדל לעמודות (חוסך חזרתיות)
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
    sortable: true
  };

    showDetails(data: any) {
    alert(`פרטי נרשמת:
    שם מלא: ${data.firstName} ${data.lastName}
    ת.ז: ${data.idNumber}
    שיעור: ${data.lesson}
    סטטוס תשלום: ${data.isPaid ? 'שולם' : 'לא שולם'}`);
  }
}
