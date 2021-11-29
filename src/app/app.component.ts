import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface Company {
  id: string,
  business_name: string,
  industry: string,
  phone_number: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "PWA - DEMO";
  displayedColumns: string[] = ['id', 'business_name', 'industry', 'phone_number'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource?: MatTableDataSource<Company>;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {

    this.http.get("https://random-data-api.com/api/company/random_company?size=50").subscribe((x: any) => {
      this.dataSource = new MatTableDataSource(x);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    })
  }
}
