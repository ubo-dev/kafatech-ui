import { Grade, Instructor, Student } from '@/app/lib/definitions';
import { Update, Delete } from '../shared/buttons';
import { getGrades, getInstructors, getStudents } from '@/app/lib/data';
import InstructorList from './instructor-list';

export default async function InstructorTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const instructors = await getInstructors();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  Instructor Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Department
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {instructors?.data.map((instructor: Instructor) => (
                InstructorList(instructor)
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
