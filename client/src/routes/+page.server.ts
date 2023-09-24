// retrieve the data from the server (database) 
// and pass it to the page component
// onload
import { STUDENTS } from '$lib/server/db';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ url }) => {
    let students = STUDENTS;
    // server side
    // console.log('students', students);
    let search:string | null = url.searchParams.get('search');

    if (search) {
		search = search.toLowerCase();
		students = students.filter((s) => s.name.toLowerCase().includes(search));
	}

    return {students}
}



