import { Grade, Student } from '@/app/lib/definitions';
import { Update, Delete } from '../shared/buttons';
import { getGrades, getStudents } from '@/app/lib/data';

export default async function GradeTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const grades = await getGrades();

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {grades?.map((grade: Grade) => (
              <div
                key={grade.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <p>{grade.grade}</p>
                    </div>
                    <p className="text-sm text-gray-500">{grade.letterGrade}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                        {grade.studentId}
                    </p>
                    <p className="text-xl font-medium">
                        {grade.lectureId}
                    </p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Update id={grade.id} />
                    <Delete id={grade.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Grade Point
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Letter Grade
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Student ID
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Lecture ID
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {grades?.map((grade: Grade) => (
                <tr
                  key={grade.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap px-3 py-3">
                    {grade.grade}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {grade.letterGrade}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {grade.studentId}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {grade.lectureId}
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <Update id={grade.id} />
                      <Delete id={grade.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
