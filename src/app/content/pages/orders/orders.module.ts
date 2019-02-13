import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';
import { LayoutModule } from '../../layout/layout.module';
import { PartialsModule } from '../../partials/partials.module';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { OrdersCreateComponent } from './orders-create/orders-create.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { OrdersService } from './orders.service';
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
		component: OrdersComponent,
		children: [
			{
				path: '',
				redirectTo: 'list',
				pathMatch: 'full'
			},
			{
				path: 'list',
				component: OrdersListComponent
			},
			{
				path: 'create',
				component: OrdersCreateComponent
			},
			{
				path: 'details/:id',
				component: OrdersDetailsComponent
			}
			/*,
			{
				path: 'orders',
				component: OrdersListComponent,
			},
			{
				path: 'orders/add',
				component: OrderEditComponent
			},
			{
				path: 'orders/edit',
				component: OrderEditComponent
			},
			{
				path: 'orders/edit/:id',
				component: OrderEditComponent
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
		OrdersService,
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
		OrdersComponent,
		OrdersListComponent,
		OrdersCreateComponent,
		OrdersDetailsComponent
	]
})
export class OrdersModule {}
