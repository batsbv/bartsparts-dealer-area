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
						title: 'Orders',
						desc: 'My orders',
						root: true,
						icon: 'flaticon-line-graph',
						page: '/orders',
						//badge: {type: 'm-badge--danger', value: ''},
						translate: 'MENU.ORDERS'
					},
					{
						title: 'Products',
						desc: 'All products',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-business',
						translate: 'MENU.PRODUCTS',
						submenu:[
							{
								title: 'List',
								page: '/products',
								translate: 'MENU.DASHBOARD'
							},
							{
								title: 'Create',
								page: '/products/create',
								translate: 'MENU.DASHBOARD'
							}
						]
					},
					{section: 'Tools'},
					{
						title: 'Layout Builder',
						root: true,
						icon: 'flaticon-settings',
						page: '/builder'
					}
				]
			}
		};
	}
}
