import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Document } from '../models/document.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentServiceService {

  constructor() { }

  getDocuments(): Observable<Document[]> {
    return of([
      {
        id: '1',
        name: 'Annual Report 2024',
        description: 'Financial summary and company performance metrics for fiscal year 2024.',
        createdAt: '15 Jan, 2024',
      },
      {
        id: '2',
        name: 'Employee Handbook v3.2',
        description: 'Updated company policies and procedures for all employees to follow.',
        createdAt: '24 Feb, 2024',
      },
      {
        id: '3',
        name: 'Project Proposal - Website Redesign',
        description: 'Comprehensive proposal for updating company website with new branding and improved user experience.',
        createdAt: '18 Mar, 2024',
      },
      {
        id: '4',
        name: 'Marketing Strategy Q2',
        description: 'Second quarter marketing initiatives and budget allocation for the year.',
        createdAt: '8 Apr, 2024',
      },
      {
        id: '5',
        name: 'Client Contract - ABC Corp',
        description: 'Service agreement and scope of work for ABC Corporation project.',
        createdAt: '15 May, 2024',
      },
      {
        id: '6',
        name: 'Technical Documentation',
        description: 'System architecture overview and implementation details for the new CRM platform.',
        createdAt: '12 Jun, 2024',
      },
      {
        id: '7',
        name: 'HR Recruitment Plan',
        description: 'Strategic hiring plan for expanding the development team in Q3 and Q4.',
        createdAt: '21 Jul, 2024',
      },
      {
        id: '8',
        name: 'Sales Presentation',
        description: 'Product demonstration and sales pitch for enterprise clients with detailed pricing information and competitive analysis.',
        createdAt: '5 Aug, 2024',
      },
      {
        id: '9',
        name: 'Research Findings',
        description: 'Market research data and analysis of consumer behavior trends in the target demographic.',
        createdAt: '11 Sep, 2024',
      },
      {
        id: '10',
        name: 'Budget Forecast 2025',
        description: 'Financial projections and expense planning for the upcoming fiscal year.',
        createdAt: '2 Oct, 2024',
      },
    ]);
  }
}
