import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import Discord from '@auth/core/providers/discord';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';
// import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from '$env/static/private';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from '$lib/server/database';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

// export const handle = SvelteKitAuth({
//   providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })],
// })

const handleAuth: Handle = async (...args) => {
	const [{ event }] = args;

	return SvelteKitAuth({
		adapter: PrismaAdapter(db),
		providers: [
			GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })
			// Discord({ clientId: DISCORD_CLIENT_ID, clientSecret: DISCORD_CLIENT_SECRET })
		],
		callbacks: {
			async session({ user, session }) {
				session.user = {
					id: user.id,
					name: user.name,
					image: user.image,
					email: user.email
				};

				event.locals.session = session;
				return session;
			}
		}
		// pages to redirect to on sign in/sign out
		// pages for sveletekit hooks not for auth js
		// pages: {
		// 	signIn: '/login',
		// 	signOut: '/auth/signOut',
		// }
	})(...args);
};

export const handle = sequence(handleAuth);
