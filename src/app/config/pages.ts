import { ConfigModel } from '../core/interfaces/config';

export class PagesConfig implements ConfigModel {
	public config: any = {};

	constructor() {
		this.config = {
			'/': {
				page: {
					title: 'Dashboard',
					desc: 'Latest updates and statistic charts'
				}
			},
			'dealers':{
				page:{
					title: 'Dealers',
					desc: 'All our dealers'
				},
			},
			'orders':{
				page:{
					title: 'Orders',
					desc: 'All our orders'
				},
			},
			'products':{
				page:{
					title: 'Products',
					desc: 'All our products'
				},
			},
			builder: {
				page: { title: 'Layout Builder', desc: 'Layout builder' }
			},
			header: {
				actions: {
					page: { title: 'Actions', desc: 'actions example page' }
				}
			},
			profile: {
				page: { title: 'User Profile', desc: '' }
			},
			404: {
				page: { title: '404 Not Found', desc: '', subheader: false }
			}
		};
	}
}
