<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { io } from 'socket.io-client';

    let message: string = '';
	let clientMessages: string[] = [];

    onMount(() => {
        console.log('DOM fully loaded and parsed');
        const socket = new WebSocket('ws://localhost:8000/ws');
        console.log('socket', socket);

        // open the connection
        socket.addEventListener('open', function (event) {
            socket.send('Hello Server!');
            // Send message on form submission
            const form = document.querySelector('form')!;
            // add event listener
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const input = document.querySelector('#message') as HTMLInputElement;
                const text = input.value;
                console.log('text', text);
                socket.send(text);
                input.value = '';
                // append message to list
                clientMessages = [...clientMessages, text];
            });
        });
    });
</script>

<main class="container">
	<div class="my-10">
		<h1>WebSockets Echo</h1>
		<form>
			<input type="text" id="message" bind:value={message} placeholder="your message" />
			<button type="submit">Send</button>
		</form>
	</div>
</main>
