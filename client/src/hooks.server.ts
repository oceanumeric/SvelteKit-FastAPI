export async function handle({ event, resolve }) {
	// get current user ip address
	const foo_ip = await event.getClientAddress();
	const foo_user_agent = event.request.headers.get('user-agent');
	const foo_url_path = event.url.pathname;

	console.log('::::::::foo_ip:::::::', foo_ip);
	console.log('::::::::foo_user_agent::::::::', foo_user_agent);
	console.log('::::::::foo_url_path::::::::', foo_url_path);

	if (foo_url_path === '/foo') {
		return new Response('Message: Bad Request', { status: 400 });
	}

	return resolve(event);
}
