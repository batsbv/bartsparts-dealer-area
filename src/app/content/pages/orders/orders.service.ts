import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, BehaviorSubject, of, from } from 'rxjs';
import { map,tap,catchError } from 'rxjs/operators';
import { OrderModel,PagedModel } from './order.model';
const API_PROPERTIES_URL = 'localhost:9000/api/orders';
// Real REST API
@Injectable()
export class OrdersService {

	constructor(private http: HttpClient) { }

	// CREATE =>  POST: add a new order to the server
	createOrder(order): Observable<OrderModel> {
		return this.http.post<OrderModel>('http://localhost:9000/api/orders', order);
	}

	// READ
	getAllOrders(): Observable<PagedModel> {
		return this.http.get<PagedModel>('http://localhost:9000/api/orders')
	}

	getOrders(){
		return this.http.get<PagedModel>('http://localhost:9000/api/orders').pipe(
			map((result: any) => {
				return result.data;
			}),
			catchError(this.handleError('getOrders', []))
		);
	}
	getOrderById(orderId: number): Observable<OrderModel> {
		return this.http.get<OrderModel>(API_PROPERTIES_URL + `/${orderId}`);
	}

	updateOrder(order: OrderModel): Observable<any> {
		return this.http.put(API_PROPERTIES_URL, order);
	}

	// DELETE => delete the order from the server
	deleteOrder(orderId: number): Observable<OrderModel> {
		const url = `${API_PROPERTIES_URL}/${orderId}`;
		return this.http.delete<OrderModel>(url);
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
