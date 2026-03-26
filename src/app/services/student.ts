import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Student {
  idEmpleado: number;
  nombreCompleto: string;
  correo: string;
  sueldo: number;
  fechaContrato: string;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService  {
  //MiWebAPI 
  private apiUrl = 'http://localhost:5259/api/Empleado'; 

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}`);
  }

   getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.apiUrl}/${id}`);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl, student);
  }

  // updateStudent(student: Student): Observable<Student> {
  //   return this.http.post<Student>(this.apiUrl, student);
  //   //  your API uses POST for Add/Edit together
  // }

    updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(this.apiUrl, student);
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
