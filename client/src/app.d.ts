import type { Session } from '@auth/sveltekit/node_modules/@auth/core/types';
import type {
	Session as OGSession,
	DefaultSession
} from '@auth/sveltekit/node_modules/@auth/core/types';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface Locals {
			session: Session | undefined;
			locale: import('$lib/i18n/i18n-types.js').Locales;
		}
		// interface PageData {}
		// interface Platform {}
	}
}

declare module '@auth/sveltekit/node_modules/@auth/core/types' {
	interface Session extends OGSession {
		user?: {
			id: string;
			email: string;
		} & DefaultSession['user'];
	}
}

export {};
