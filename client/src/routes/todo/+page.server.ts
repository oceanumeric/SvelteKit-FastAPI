import { db } from '$lib/server/database';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// when the page is loaded, we need to fetch from the database
	// and return the data to the page
	const todos = await db.todo.findMany();

	return { todos };
};

export const actions = {
	// when the user do some actions like create, update, delete
	addTodo: async ({ request }) => {
		const todoFormData = await request.formData();
		const todoItem = todoFormData.get('todo');
		console.log(todoItem);

		// save to database
		const todo = await db.todo.create({
			data: {
				title: todoItem,
				completed: false
			}
		});
	},
	// delte todo
    deleteTodo: async ({ request }) => {
        const todoFormData = await request.formData();
        const todoId = todoFormData.get('todoId');
        console.log(todoId);
        // convert to number
        const todoIdNumber = parseInt(todoId as string);

        // delete from database
        const todo = await db.todo.delete({
            where: {
                id: todoIdNumber
            }
        });
    }
};
