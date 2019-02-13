import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, forkJoin, from, of, BehaviorSubject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { OrderModel } from '../order.model';
import { OrdersService } from '../orders.service';

@Component({
	selector: 'm-orders-details',
	templateUrl: './orders-details.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersDetailsComponent implements OnInit {
	order: OrderModel;
	loadingSubject = new BehaviorSubject<boolean>(false);
	loading$ = this.loadingSubject.asObservable();
	orderForm: FormGroup;
	hasFormErrors: boolean = false;


	constructor(private activatedRoute: ActivatedRoute,
		private router: Router,
		private ordersService: OrdersService,
		private orderFB: FormBuilder,
		public dialog: MatDialog,

	) { }

	ngOnInit() {
		const newOrder = new OrderModel();
		newOrder.clear();
		this.loadingSubject.next(true);
		this.order = newOrder;
		this.createForm();
	}

	createForm() {
		this.orderForm = this.orderFB.group({
			name: [this.order.name, Validators.required],
			description: [this.order.description],
			street: [this.order.street, Validators.required],
			number: [this.order.number, Validators.required],
			zip: [this.order.zip, Validators.required],
			town: [this.order.town, Validators.required],
			state: [this.order.state],
			country: [this.order.country, Validators.required],
			caretaker_name: [this.order.caretaker_name],
			caretaker_phone: [this.order.caretaker_phone],
			caretaker_email: [this.order.caretaker_email]
		});
		this.loadingSubject.next(false);
	}

	onSumbit() {
		this.hasFormErrors = false;
		const controls = this.orderForm.controls;
		/** check form */
		if (this.orderForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			this.hasFormErrors = true;
			return;
		}

		this.addOrder(this.orderForm.value);
	}

	addOrder(_order: OrderModel) {
		this.loadingSubject.next(true);
		this.ordersService.createOrder(_order).subscribe(res => {
			this.loadingSubject.next(false);
			const message = `New order successfully has been added.`;
			// this.layoutUtilsService.showActionNotification(message, MessageType.Create, 10000, true, false);
			this.loadOrder(res._id);
		});
	}

	loadOrder(id = null) {
		const _refreshUrl = 'orders/list'; //?id=' + id;
		this.router.navigateByUrl(_refreshUrl);
	}

}
