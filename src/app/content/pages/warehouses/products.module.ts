import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { LayoutModule } from '../../layout/layout.module';
import { PartialsModule } from '../../partials/partials.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProductsService } from './products.service';
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
		component: ProductsComponent,
		children: [
			{
				path: '',
				redirectTo: 'list',
				pathMatch: 'full'
			},
			{
				path: 'list',
				component: ProductsListComponent
			},
			{
				path: 'create',
				component: ProductsCreateComponent
			},
			{
				path: 'details/:id',
				component: ProductsDetailsComponent
			}
			/*,
			{
				path: 'products',
				component: ProductsListComponent,
			},
			{
				path: 'products/add',
				component: ProductEditComponent
			},
			{
				path: 'products/edit',
				component: ProductEditComponent
			},
			{
				path: 'products/edit/:id',
				component: ProductEditComponent
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
		ProductsService,
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
		ProductsComponent,
		ProductsListComponent,
		ProductsCreateComponent,
		ProductsDetailsComponent
	]
})
export class ProductsModule {}
