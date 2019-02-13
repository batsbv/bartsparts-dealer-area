import {
	Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy,
	ChangeDetectorRef
} from '@angular/core';
import { Observable, forkJoin, from, of, BehaviorSubject } from 'rxjs';
import { OrdersService } from '../orders.service';
import { MatChipInputEvent } from '@angular/material';
import { OrderModel, PagedModel } from '../order.model';


@Component({
	selector: 'm-orders-list',
	templateUrl: './orders-list.component.html',
	styleUrls: ['./orders-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush

})
export class OrdersListComponent implements OnInit {

	private orders: Observable<any[]>;
	public ordersRes: Observable<any>;
	public resData = {}
	public pages = []

	constructor(
		private ordersService: OrdersService,
		private cdr: ChangeDetectorRef

	) { }

	ngOnInit() {
		// this.orders = [];
		this.getOrders()

		this.orders = this.ordersService.getOrders()
		// this.propertiesRes$ = this.propertiesService.getOrders()
		// console.log(this.orders)
		// this.propertiesService.getAllOrders().subscribe(
		// 	data=>{
		// 		this.orders = data
		// 	}
		// )
		// console.log(this.orders)
	}

	getOrders() {
		this.ordersService.getAllOrders().subscribe(
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
