import {
	Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy,
	ChangeDetectorRef
} from '@angular/core';
import { Observable, forkJoin, from, of, BehaviorSubject } from 'rxjs';
import { ProductsService } from '../products.service';
import { MatChipInputEvent } from '@angular/material';
import { ProductModel, PagedModel } from '../product.model';


@Component({
	selector: 'm-products-list',
	templateUrl: './products-list.component.html',
	styleUrls: ['./products-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush

})
export class ProductsListComponent implements OnInit {

	private products: Observable<any[]>;
	public productsRes: Observable<any>;
	public resData = {}
	public pages = []

	constructor(
		private productsService: ProductsService,
		private cdr: ChangeDetectorRef

	) { }

	ngOnInit() {
		// this.products = [];
		this.getProducts()

		this.products = this.productsService.getProducts()
		// this.propertiesRes$ = this.propertiesService.getProducts()
		// console.log(this.products)
		// this.propertiesService.getAllProducts().subscribe(
		// 	data=>{
		// 		this.products = data
		// 	}
		// )
		// console.log(this.products)
	}

	getProducts() {
		this.productsService.getAllProducts().subscribe(
			data => {

				this.resData = data;
			},
			err => { console.error(err); },
			() => {

				//  this.files[0].form = this.uploadSettings.fields;
			}
		);
}


}
