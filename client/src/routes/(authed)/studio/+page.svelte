<script lang="ts">
    import type { PageData } from './$types';
    import { signIn, signOut } from '@auth/sveltekit/client';
    export let data: PageData;
    import { page } from '$app/stores';
</script>


<div class="px-10 py-10">
    <h1 class="text-2xl">THIS is the STUDIO for logined user</h1>
</div>


<div class="h-screen flex items-center justify-center">
    <div class="grid grid-cols-1 place-items-center">
        <p>Signed in as {$page.data.session.user.name}</p>
        <button
            on:click={signOut}
            type="button"
            class="my-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >Signout</button
        >
        <img alt="car" src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
    </div>
</div>