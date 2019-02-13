// tslint:disable-next-line:no-shadowed-variable
import { ConfigModel } from '../core/interfaces/config';

// tslint:disable-next-line:no-shadowed-variable
export class MenuConfig implements ConfigModel {
	public config: any = {};

	constructor() {
		this.config = {
			header: {
				self: {},
				items: [

				]
			},
			aside: {
				self: {},
				items: [
					{
						title: 'Dashboard',
						desc: 'Some description goes here',
						root: true,
						icon: 'flaticon-line-graph',
						page: '/',
						//badge: {type: 'm-badge--danger', value: ''},
						translate: 'MENU.DASHBOARD'
					},
					{
						title: 'Dealers',
						desc: 'All our dealers',
						root: true,
						icon: 'flaticon-line-graph',
						page: '/dealers',
						// badge: {type: 'm-badge--danger', value: ''},
						translate: 'MENU.DEALERS'
					},
					{
						title: 'Orders',
						desc: 'All our orders',
						root: true,
						icon: 'flaticon-line-graph',
						page: '/orders',
						badge: {type: 'm-badge--danger', value: '1'},
						translate: 'MENU.ORDERS'
					},
					{
						title: 'Products',
						desc: 'All our products',
						root: true,
						icon: 'flaticon-line-graph',
						page: '/products',
						// badge: {type: 'm-badge--danger', value: ''},
						translate: 'MENU.PRODUCTS'
					}
					/*,
					{section: 'Tools'},
					{
						title: 'Layout Builder',
						root: true,
						icon: 'flaticon-settings',
						page: '/builder'
					}*/
				]
			}
		};
	}
}
