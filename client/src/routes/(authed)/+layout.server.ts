import { error } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

export async function load({ locals, route, cookies }) {
	const session = await locals.getSession();
	// console.log("------session-------", session);
	// console.log("------cookies-------", cookies);
	if (!session?.user) {
		throw redirect(307, '/');
	}

	return {
		session: locals.session,
		locale: locals.locale
	};
}
