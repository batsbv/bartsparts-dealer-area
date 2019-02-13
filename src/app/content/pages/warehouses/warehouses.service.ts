import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, BehaviorSubject, of, from } from 'rxjs';
import { map,tap,catchError } from 'rxjs/operators';
import { WarehouseModel,PagedModel } from './warehouse.model';
const API_PROPERTIES_URL = 'localhost:9000/api/warehouses';
// Real REST API
@Injectable()
export class WarehousesService {

	constructor(private http: HttpClient) { }

	// CREATE =>  POST: add a new warehouse to the server
	createWarehouse(warehouse): Observable<WarehouseModel> {
		return this.http.post<WarehouseModel>('http://localhost:9000/api/warehouses', warehouse);
	}

	// READ
	getAllWarehouses(): Observable<PagedModel> {
		return this.http.get<PagedModel>('http://localhost:9000/api/warehouses')
	}

	getWarehouses(){
		return this.http.get<PagedModel>('http://localhost:9000/api/warehouses').pipe(
			map((result: any) => {
				return result.data;
			}),
			catchError(this.handleError('getWarehouses', []))
		);
	}
	getWarehouseById(warehouseId: number): Observable<WarehouseModel> {
		return this.http.get<WarehouseModel>(API_PROPERTIES_URL + `/${warehouseId}`);
	}

	updateWarehouse(warehouse: WarehouseModel): Observable<any> {
		return this.http.put(API_PROPERTIES_URL, warehouse);
	}

	// DELETE => delete the warehouse from the server
	deleteWarehouse(warehouseId: number): Observable<WarehouseModel> {
		const url = `${API_PROPERTIES_URL}/${warehouseId}`;
		return this.http.delete<WarehouseModel>(url);
	}

	/**
	 * Handle Http operation that failed.
	 * Let the app continue.
	 * @param operation - name of the operation that failed
	 * @param result - optional value to return as the observable result
	 */
	private handleError<T>(operation = 'operation', result?: any) {
		return (error: any): Observable<any> => {
			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// Let the app keep running by returning an empty result.
			return from(result);
		};
	}

}
