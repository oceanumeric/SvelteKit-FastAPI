import { STUDENTS } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    // console.log('------THIS IS THE STUDENT PAGE-----');
    // console.log('params', params);

    // fetch data from the database
    const students = STUDENTS;
    // find out the for the student with the given id
    const student = students.find((s) => s.id === params.id);
    // console.log('student', student);

    // console.log(student)

    return {student}
}