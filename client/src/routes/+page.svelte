<script lang="ts">
	import type { PageData } from './$types';
	import debounce from 'lodash.debounce';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data: PageData;

	const updateSearch = debounce((search:string) => {
    goto(`?search=${search}`, { replaceState: true, keepFocus: true });
  }, 300);

  const handleInput = (event: Event) => {
		updateSearch(event.target.value)
	}
</script>

<div class="ml-20 my-10">
	<h1 class="text-4xl font-bold">Page</h1>
	<p class="mt-5">This is a page.</p>

	<form method="GET" class="mt-10">
		<input type="text" 
		name="search" 
		value = {$page.url.searchParams.get('search') || ''}
		on:input={handleInput}
		autocomplete="off" />
		<button type="submit">Search</button>
	</form>

	<div class="pt-4">
		{#each data.students as student}
			<a href="/student/{student.id}" class="underline">{student.name}</a>
		{/each}
	</div>
</div>

<style>
	a {
		display: block;
	}
</style>
