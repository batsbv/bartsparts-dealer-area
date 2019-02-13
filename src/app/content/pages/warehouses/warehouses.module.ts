import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WarehousesComponent } from './warehouses.component';
import { LayoutModule } from '../../layout/layout.module';
import { PartialsModule } from '../../partials/partials.module';
import { WarehousesListComponent } from './warehouses-list/warehouses-list.component';
import { WarehousesCreateComponent } from './warehouses-create/warehouses-create.component';
import { WarehousesDetailsComponent } from './warehouses-details/warehouses-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { WarehousesService } from './warehouses.service';
import {InterceptService} from '../../../core/auth/httpIntercept.service';
// Material
import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatSelectModule,
	MatMenuModule,
	MatProgressBarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatAutocompleteModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
	MatSnackBarModule,
	MatTooltipModule
} from '@angular/material';


const routes: Routes = [
	{
		path: '',
		component: WarehousesComponent,
		children: [
			{
				path: '',
				redirectTo: 'list',
				pathMatch: 'full'
			},
			{
				path: 'list',
				component: WarehousesListComponent
			},
			{
				path: 'create',
				component: WarehousesCreateComponent
			},
			{
				path: 'details/:id',
				component: WarehousesDetailsComponent
			}
			/*,
			{
				path: 'warehouses',
				component: WarehousesListComponent,
			},
			{
				path: 'warehouses/add',
				component: WarehouseEditComponent
			},
			{
				path: 'warehouses/edit',
				component: WarehouseEditComponent
			},
			{
				path: 'warehouses/edit/:id',
				component: WarehouseEditComponent
			},*/
		]
	}
];

@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		PartialsModule,
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule,
		MatInputModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatSortModule,
		MatTableModule,
		MatSelectModule,
		MatMenuModule,
		MatProgressBarModule,
		MatButtonModule,
		MatCheckboxModule,
		MatDialogModule,
		MatTabsModule,
		MatNativeDateModule,
		MatCardModule,
		MatRadioModule,
		MatIconModule,
		MatDatepickerModule,
		MatAutocompleteModule,
		MatSnackBarModule,
		MatTooltipModule,
		HttpClientModule
	],
	providers: [
		WarehousesService,
		{
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackdrop: true,
				panelClass: 'm-mat-dialog-container__wrapper',
				height: 'auto',
				width: '900px'
			}
		},
		InterceptService,
			 {
				 provide: HTTP_INTERCEPTORS,
				 useClass: InterceptService,
				 multi: true
			 },
	],
	declarations: [
		WarehousesComponent,
		WarehousesListComponent,
		WarehousesCreateComponent,
		WarehousesDetailsComponent
	]
})
export class WarehousesModule {}
