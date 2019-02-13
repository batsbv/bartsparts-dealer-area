import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, forkJoin, from, of, BehaviorSubject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ProductModel } from '../product.model';
import { ProductsService } from '../products.service';

@Component({
	selector: 'm-products-create',
	templateUrl: './products-create.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsCreateComponent implements OnInit {
	product: ProductModel;
	loadingSubject = new BehaviorSubject<boolean>(false);
	loading$ = this.loadingSubject.asObservable();
	productForm: FormGroup;
	hasFormErrors: boolean = false;


	constructor(private activatedRoute: ActivatedRoute,
		private router: Router,
		private productsService: ProductsService,
		private productFB: FormBuilder,
		public dialog: MatDialog,

	) { }

	ngOnInit() {
		const newProduct = new ProductModel();
		newProduct.clear();
		this.loadingSubject.next(true);
		this.product = newProduct;
		this.createForm();
	}

	createForm() {
		this.productForm = this.productFB.group({
			name: [this.product.name, Validators.required],
			description: [this.product.description],
			street: [this.product.street, Validators.required],
			number: [this.product.number, Validators.required],
			zip: [this.product.zip, Validators.required],
			town: [this.product.town, Validators.required],
			state: [this.product.state],
			country: [this.product.country, Validators.required],
			caretaker_name: [this.product.caretaker_name],
			caretaker_phone: [this.product.caretaker_phone],
			caretaker_email: [this.product.caretaker_email]
		});
		this.loadingSubject.next(false);
	}

	onSumbit() {
		this.hasFormErrors = false;
		const controls = this.productForm.controls;
		/** check form */
		if (this.productForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			this.hasFormErrors = true;
			return;
		}

		this.addProduct(this.productForm.value);
	}

	addProduct(_product: ProductModel) {
		this.loadingSubject.next(true);
		this.productsService.createProduct(_product).subscribe(res => {
			this.loadingSubject.next(false);
			const message = `New product successfully has been added.`;
			// this.layoutUtilsService.showActionNotification(message, MessageType.Create, 10000, true, false);
			this.loadProduct(res._id);
		});
	}
	
	loadProduct(id = null) {
		const _refreshUrl = 'products/list'; //?id=' + id;
		this.router.navigateByUrl(_refreshUrl);
	}
}
