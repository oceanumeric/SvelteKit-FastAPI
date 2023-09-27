<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { io } from 'socket.io-client';

	let messages = [];

    onMount(() => {
        console.log('DOM fully loaded and parsed');
        const socket = new WebSocket('ws://localhost:8000/ws');
        console.log('socket', socket);

        // open the connection
        socket.addEventListener('open', function (event) {
            socket.send('Hello Server!');
        });
    });
</script>

<main class="container">
	<div class="my-10">
		<h1>WebSockets Echo</h1>
		<form>
			<input type="text" id="message" placeholder="your message" />
			<button type="submit">Send</button>
		</form>
	</div>
</main>
