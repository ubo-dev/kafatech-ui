import { Student } from "@/app/lib/definitions";
import { Delete, Update } from "../shared/buttons";

export default async function StudentList(student: Student) {
    return (
        <tr
        key={student.studentId}
        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
      >
        <td className="whitespace-nowrap px-3 py-3">
          {student.firstName}
        </td>
        <td className="whitespace-nowrap px-3 py-3">
          {student.lastName}
        </td>
        <td className="whitespace-nowrap px-3 py-3">
          {student.department.id}
        </td>
        <td className="whitespace-nowrap px-3 py-3">
          {student.department.departmentName}
        </td>
        <td className="whitespace-nowrap py-3 pl-6 pr-3">
          <div className="flex justify-end gap-3">
            <Update id={student.studentId} />
            <Delete id={student.studentId} />
          </div>
        </td>
      </tr>
    )
}