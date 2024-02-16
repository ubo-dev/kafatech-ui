import { Department, Grade, Student } from '@/app/lib/definitions';
import { Update, Delete } from '../shared/buttons';
import { getDepartments, getGrades, getStudents } from '@/app/lib/data';
import DepartmentList from './department-list';

export default async function GradeTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const departments = await getDepartments();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
        
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Department ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Department Name
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {departments?.data.map((department: Department) => (
                DepartmentList(department)
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
