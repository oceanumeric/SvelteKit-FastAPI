import type { PageServerLoad } from './$types';
import { browser } from '$app/environment';

export const load: PageServerLoad = async ({ route, params, cookies }) => {
	console.log('page.server.ts load() route:', route.id);
	console.log('page.server.ts load() params:', params);
	console.log('page.server.ts load() cookies:', cookies);

	// set cookie
	cookies.set('colorTheme', 'dark', {
		path: '/',
		maxAge: 60 * 60 * 24 * 365
	});

    // load data from the database
};
