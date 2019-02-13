import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'm-orders',
	templateUrl: './orders.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
