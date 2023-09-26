<script lang="ts">
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	export let data: PageData;

	// console.log("client side", data.todos);
</script>

<!-- component -->
<div class="h-screen w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class="bg-white rounded shadow p-6 m-4 w-full lg:w-5/6 lg:max-w-lg">
		<div class="mb-4">
			<h1 class="text-grey-darkest">Todo List</h1>
			<form method="POST" action="?/addTodo" use:enhance>
				<div class="flex mb-4 items-center">
					<input
						type="text"
						name="todo"
						autocomplete="off"
						class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
						placeholder="Add Todo"
					/>
					<button
						class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
						>Add</button
					>
				</div>
			</form>
		</div>
		<div>
			<div class="grid grid-cols-1">
				{#each data.todos as todo, idx}
				<p class="w-full text-grey-darkest">{idx+1}-{todo.title}</p>
				<form method="POST" action="?/deleteTodo" use:enhance>
				<input type="hidden" name="todoId" value="{todo.id}" />
				<button
					class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
					>Remove</button
				>
				</form>
				{/each}
			</div>
		</div>
	</div>
</div>
