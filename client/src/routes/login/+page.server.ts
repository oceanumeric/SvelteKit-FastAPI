import { redirect } from '@sveltejs/kit';

export async function load({ locals, route, cookies }) {
	const session = await locals.getSession();

	if (session?.user) {
		// if user is logged in, redirect to studio
		throw redirect(307, '/studio');
	}

	return {
		session: locals.session,
		locale: locals.locale
	};
}
