import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() {}

  getUsers(): Observable<any[]> {
    return of([
      {
        id: '1',
        name: 'David Wagner',
        username: 'davidWagnerGG',
        email: 'david_wagner@example.com',
        phoneNumber: '0999999999',
        role: { id: '1', name: 'Super Admin', description: 'Has full access' },
        createdAt: '24 Oct, 2015',
        updateAt: '24 Oct, 2015',
      },
      {
        id: '2',
        name: 'Ina Hogan',
        username: 'inaHogan007',
        email: 'windler.warren@runte.net',
        phoneNumber: '0888888888',
        role: { id: '2', name: 'Admin', description: 'Admin privileges' },
        createdAt: '24 Oct, 2015',
        updateAt: '24 Oct, 2015',
      },
      {
        id: '3',
        name: 'Devin Harmon',
        username: 'devinTheHR',
        email: 'wintheiser_enos@yahoo.com',
        phoneNumber: '0877777777',
        role: { id: '3', name: 'HR Admin', description: 'HR admin privileges' },
        createdAt: '18 Dec, 2015',
        updateAt: '18 Dec, 2015',
      },
      {
        id: '4',
        name: 'Lena Page',
        username: 'lenaPage',
        email: 'camila_ledner@gmail.com',
        phoneNumber: '0866666666',
        role: { id: '4', name: 'Employee', description: 'Standard employee' },
        createdAt: '8 Oct, 2016',
        updateAt: '8 Oct, 2016',
      },
      {
        id: '5',
        name: 'Eula Horton',
        username: 'eulaH',
        email: 'edula_dorton1221@gmail.com',
        phoneNumber: '0855555555',
        role: { id: '1', name: 'Super Admin', description: 'Has full access' },
        createdAt: '15 Jun, 2017',
        updateAt: '15 Jun, 2017',
      },
      {
        id: '6',
        name: 'Victoria Perez',
        username: 'vperez_hr',
        email: 'terrill.wiza@hotmail.com',
        phoneNumber: '0844444444',
        role: { id: '3', name: 'HR Admin', description: 'HR admin privileges' },
        createdAt: '12 Jan, 2019',
        updateAt: '12 Jan, 2019',
      },
      {
        id: '7',
        name: 'Cora Medina',
        username: 'coraM',
        email: 'hagenes.isai@hotmail.com',
        phoneNumber: '0833333333',
        role: { id: '4', name: 'Employee', description: 'Standard employee' },
        createdAt: '21 July, 2020',
        updateAt: '21 July, 2020',
      },
      {
        id: '8',
        name: 'Felix Chen',
        username: 'felixDev',
        email: 'felix.chen@company.com',
        phoneNumber: '0822222222',
        role: { id: '2', name: 'Admin', description: 'Admin privileges' },
        createdAt: '5 Sep, 2021',
        updateAt: '5 Sep, 2021',
      },
      {
        id: '9',
        name: 'Amy Wu',
        username: 'amyW',
        email: 'amy.wu@corp.io',
        phoneNumber: '0811111111',
        role: { id: '4', name: 'Employee', description: 'Standard employee' },
        createdAt: '11 Apr, 2022',
        updateAt: '11 Apr, 2022',
      },
      {
        id: '10',
        name: 'Jonathan Miles',
        username: 'jmiles_admin',
        email: 'jonathan.miles@admin.com',
        phoneNumber: '0800000000',
        role: { id: '2', name: 'Admin', description: 'Admin privileges' },
        createdAt: '2 Feb, 2023',
        updateAt: '2 Feb, 2023',
      },
    ]);
  }
}
