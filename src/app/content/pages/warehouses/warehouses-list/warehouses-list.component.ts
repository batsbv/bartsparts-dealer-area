import {
	Component, OnInit, ElementRef, ViewChild, ChangeDetectionStrategy,
	ChangeDetectorRef
} from '@angular/core';
import { Observable, forkJoin, from, of, BehaviorSubject } from 'rxjs';
import { WarehousesService } from '../warehouses.service';
import { MatChipInputEvent } from '@angular/material';
import { WarehouseModel, PagedModel } from '../warehouse.model';


@Component({
	selector: 'm-warehouses-list',
	templateUrl: './warehouses-list.component.html',
	styleUrls: ['./warehouses-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush

})
export class WarehousesListComponent implements OnInit {

	private warehouses: Observable<any[]>;
	public warehousesRes: Observable<any>;
	public resData = {}
	public pages = []

	constructor(
		private warehousesService: WarehousesService,
		private cdr: ChangeDetectorRef

	) { }

	ngOnInit() {
		// this.warehouses = [];
		this.getWarehouses()

		this.warehouses = this.warehousesService.getWarehouses()
		// this.propertiesRes$ = this.propertiesService.getWarehouses()
		// console.log(this.warehouses)
		// this.propertiesService.getAllWarehouses().subscribe(
		// 	data=>{
		// 		this.warehouses = data
		// 	}
		// )
		// console.log(this.warehouses)
	}

	getWarehouses() {
		this.warehousesService.getAllWarehouses().subscribe(
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
