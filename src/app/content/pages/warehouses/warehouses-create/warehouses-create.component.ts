import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, forkJoin, from, of, BehaviorSubject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { WarehouseModel } from '../warehouse.model';
import { WarehousesService } from '../warehouses.service';

@Component({
	selector: 'm-warehouses-create',
	templateUrl: './warehouses-create.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class WarehousesCreateComponent implements OnInit {
	warehouse: WarehouseModel;
	loadingSubject = new BehaviorSubject<boolean>(false);
	loading$ = this.loadingSubject.asObservable();
	warehouseForm: FormGroup;
	hasFormErrors: boolean = false;


	constructor(private activatedRoute: ActivatedRoute,
		private router: Router,
		private warehousesService: WarehousesService,
		private warehouseFB: FormBuilder,
		public dialog: MatDialog,

	) { }

	ngOnInit() {
		const newWarehouse = new WarehouseModel();
		newWarehouse.clear();
		this.loadingSubject.next(true);
		this.warehouse = newWarehouse;
		this.createForm();
	}

	createForm() {
		this.warehouseForm = this.warehouseFB.group({
			name: [this.warehouse.name, Validators.required],
			description: [this.warehouse.description],
			street: [this.warehouse.street, Validators.required],
			number: [this.warehouse.number, Validators.required],
			zip: [this.warehouse.zip, Validators.required],
			town: [this.warehouse.town, Validators.required],
			state: [this.warehouse.state],
			country: [this.warehouse.country, Validators.required],
			caretaker_name: [this.warehouse.caretaker_name],
			caretaker_phone: [this.warehouse.caretaker_phone],
			caretaker_email: [this.warehouse.caretaker_email]
		});
		this.loadingSubject.next(false);
	}

	onSumbit() {
		this.hasFormErrors = false;
		const controls = this.warehouseForm.controls;
		/** check form */
		if (this.warehouseForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			this.hasFormErrors = true;
			return;
		}

		this.addWarehouse(this.warehouseForm.value);
	}

	addWarehouse(_warehouse: WarehouseModel) {
		this.loadingSubject.next(true);
		this.warehousesService.createWarehouse(_warehouse).subscribe(res => {
			this.loadingSubject.next(false);
			const message = `New warehouse successfully has been added.`;
			// this.layoutUtilsService.showActionNotification(message, MessageType.Create, 10000, true, false);
			this.loadWarehouse(res._id);
		});
	}
	
	loadWarehouse(id = null) {
		const _refreshUrl = 'warehouses/list'; //?id=' + id;
		this.router.navigateByUrl(_refreshUrl);
	}
}
