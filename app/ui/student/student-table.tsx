import { Student } from '@/app/lib/definitions';
import { Update, Delete } from '../shared/buttons';
import { getStudents } from '@/app/lib/data';
import StudentList from './student-list';

export default async function StudentTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  
  const students = await getStudents();
  console.log(students);
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {/*students?.map((student: Student) => (
              <div
                key={student.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{student.firstName}</p>
                    </div>
                    <p className="text-sm text-gray-500">{student.lastName}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                        {student.departmentId}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Update id={student.id} />
                    <Delete id={student.id} />
                  </div>
                </div>
              </div>
            ))*/} 
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  First Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Last Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Department ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Department Name
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {students?.data.map((student: Student) => (
                StudentList(student)
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
