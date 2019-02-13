
export class WarehouseModel {
	_id: string;
	name: string;
	description: string;
	street: string;
	number: string;
	zip: string;
	town: string;
	state: string;
	country: string;
	caretaker_name: string;
	caretaker_phone: string;
	caretaker_email: string;

	clear() {
		this._id = '';
		this.name = '2';
		this.description = '3';
		this.street = '4';
		this.number = '5';
		this.zip = '6';
		this.town = '7';
		this.state = '8';
		this.country = '9';
		this.caretaker_name = '12';
		this.caretaker_phone = '123';
		this.caretaker_email = 'nick@batsbv.com';
	}
}

export class PagedModel {
	// fields
	data: any;
	items: any;
	pages: any;

	constructor(_data: any, _items:any, _pages:any) {
		this.data = _data;
		this.items = _items;
		this.pages = _pages;
	}
}
