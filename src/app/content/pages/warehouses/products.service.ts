import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, forkJoin, BehaviorSubject, of, from } from 'rxjs';
import { map,tap,catchError } from 'rxjs/operators';
import { ProductModel,PagedModel } from './product.model';
const API_PROPERTIES_URL = 'localhost:9000/api/products';
// Real REST API
@Injectable()
export class ProductsService {

	constructor(private http: HttpClient) { }

	// CREATE =>  POST: add a new product to the server
	createProduct(product): Observable<ProductModel> {
		return this.http.post<ProductModel>('http://localhost:9000/api/products', product);
	}

	// READ
	getAllProducts(): Observable<PagedModel> {
		return this.http.get<PagedModel>('http://localhost:9000/api/products')
	}

	getProducts(){
		return this.http.get<PagedModel>('http://localhost:9000/api/products').pipe(
			map((result: any) => {
				return result.data;
			}),
			catchError(this.handleError('getProducts', []))
		);
	}
	getProductById(productId: number): Observable<ProductModel> {
		return this.http.get<ProductModel>(API_PROPERTIES_URL + `/${productId}`);
	}

	updateProduct(product: ProductModel): Observable<any> {
		return this.http.put(API_PROPERTIES_URL, product);
	}

	// DELETE => delete the product from the server
	deleteProduct(productId: number): Observable<ProductModel> {
		const url = `${API_PROPERTIES_URL}/${productId}`;
		return this.http.delete<ProductModel>(url);
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
