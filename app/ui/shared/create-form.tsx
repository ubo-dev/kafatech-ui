import { Student } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  ArrowTopRightOnSquareIcon,
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  EyeIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createGrade } from '@/app/lib/actions';

export default function Form({ students }: { students: any }) {
  return (
    <form action={createGrade}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="student" className="mb-2 block text-sm font-medium">
            Choose student
          </label>
          <div className="relative">
            <select
              id="student"
              name="studentId"
              className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select a student
              </option>
              {students?.map((student: Student) => (
                <option key={student.studentId} value={student.studentId}>
                  {student.firstName} {student.lastName} - {student.department.departmentName} 
                </option>
              ))}
            </select>
            <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Enter the Grade Point
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="gradePoint"
                name="gradePoint"
                type="number"
                step="0.01"
                placeholder="Enter grade point"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
            <EyeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Enter the Letter Grade
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="letterGrade"
                name="letterGrade"
                type="text"
                step="0.01"
                placeholder="Enter letter grade"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
            <EyeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Enter the Lecture Code
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="lectureCode"
                name="lectureCode"
                type="text"
                step="0.01"
                placeholder="Enter letter grade"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
            <EyeIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/grades"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Grade</Button>
      </div>
    </form>
  );
}
