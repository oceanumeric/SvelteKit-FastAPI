
<script>
    import { DarkMode } from 'flowbite-svelte';
    import { onMount } from 'svelte';


    onMount(() => {
        const userTheme = localStorage.getItem('color-theme');
        console.log("--------localStorage theme: ", userTheme);

        const userTheme2 = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        console.log("----------user's default settings:", userTheme2);

        if (userTheme2 === "dark") {
            console.log("setting dark mode");
        } else {
            console.log("setting light mode");
        }
    });


 </script>


<div class="mx-28">
    <h1>Hello world</h1>
</div>


  
