import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'm-products',
	templateUrl: './products.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
