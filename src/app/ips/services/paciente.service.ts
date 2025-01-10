import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  catchError,
  map,
  Observable,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { Entry, Patient, Resource } from '../interfaces/patient.interface';
import { TokenResponse } from '../interfaces/tokenResponse.interface';
import { PacienteID } from '../interfaces/patientId.interface';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  // TODO  INJECT SERVICES
  private http = inject(HttpClient);
  private baseUrl: string = 'https://gateway.onfhir.cl/hl7cl/fhir';

  private tokenUrl =
    'https://auth.onfhir.cl/realms/conectaton-dev/protocol/openid-connect/token';

  getToken(): Observable<string> {
    const formData = new HttpParams().set('grant_type', 'client_credentials');
    const basicAuth =
      'Basic ' + btoa('equipo32:O9TEjGN6NkcHvvIyNqwUZvR6N8yh2bkb');

    const headers = new HttpHeaders({
      Authorization: basicAuth,
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http
      .post<TokenResponse>(this.tokenUrl, formData, { headers })
      .pipe(
        map(({ access_token }) => {
          return access_token;
        }),
        catchError((err) => throwError(err.error.message))
      );
  }

  getAllPatients(): Observable<Entry[]> {
    return this.getToken().pipe(
      switchMap((res) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${res}`,
        });
        return this.http
          .get<Patient[]>(`${this.baseUrl}/Patient`, { headers })
          .pipe(
            tap(console.log),
            map((res) => res.entry)
          );
      })
    );
  }

  getPatientById(id: string): Observable<PacienteID> {
    console.log('pat');
    return this.getToken().pipe(
      switchMap((res) => {
        const headers = new HttpHeaders({
          Authorization: `Bearer ${res}`,
        });
        return this.http.get<PacienteID>(`${this.baseUrl}/Patient/${id}`, {
          headers,
        });
      })
    );
  }
}
