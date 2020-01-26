import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Map } from '../entity/map';
import { Observable } from 'rxjs';
import { Agglomeration } from '../entity/agglomeration';
import { Building } from '../entity/building';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL = 'https://localhost:8000/';

  constructor(private http: HttpClient) { }

// Maps

  public getAllMaps(): Observable<Map[]> {
    return this.http.get<Map[]>(this.URL + 'maps/', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public getOneMap(id: number): Observable<Map> {
    return this.http.get<Map>(this.URL + 'maps/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public deleteMap(id: number): Observable<any> {
    return this.http.delete(this.URL + 'maps/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public createMap(): Observable<Map> {
    return this.http.post<Map>(this.URL + 'maps', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public updateMap(id: number): Observable<Map> {
    return this.http.put<Map>(this.URL + 'maps/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Agglomerations


  public getAllAgglomerations(): Observable<Agglomeration[]> {
    return this.http.get<Agglomeration[]>(this.URL + 'agglomerations/', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public getOneAgglomeration(id: number): Observable<Agglomeration> {
    return this.http.get<Agglomeration>(this.URL + 'agglomerations/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public deleteAgglomeration(id: number): Observable<any> {
    return this.http.delete(this.URL + 'agglomerations/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public createAgglomeration(): Observable<Agglomeration> {
    return this.http.post<Agglomeration>(this.URL + 'agglomerations', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public updateAgglomeration(id: number): Observable<Agglomeration> {
    return this.http.put<Agglomeration>(this.URL + 'agglomerations/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Buildings

  public getAllBuildings(): Observable<Building[]> {
    return this.http.get<Building[]>(this.URL + 'buildings/', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public getOneBuilding(id: number): Observable<Building> {
    return this.http.get<Building>(this.URL + 'buildings/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public deleteBuilding(id: number): Observable<any> {
    return this.http.delete(this.URL + 'buildings/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public createBuilding(): Observable<Building> {
    return this.http.post<Building>(this.URL + 'buildings', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public updateBuilding(id: number): Observable<Building> {
    return this.http.put<Building>(this.URL + 'buildings/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Users


  public getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.URL + 'users/', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public getOneUser(id: number): Observable<User> {
    return this.http.get<User>(this.URL + 'users/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public deleteUser(id: number) {
    return this.http.delete(this.URL + 'users/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public createUser(): Observable<User> {
    return this.http.post<User>(this.URL + 'users', {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  public updateUser(id: number): Observable<User> {
    return this.http.put<User>(this.URL + 'users/' + id, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
