import { Department, Student } from "@/app/lib/definitions";
import { Delete, Update } from "../shared/buttons";

export default async function DepartmentList(department: Department) {
    return (
        <tr
        key={department.id}
        className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
      >
        <td className="whitespace-nowrap px-3 py-3">
          {department.id}
        </td>
        <td className="whitespace-nowrap px-3 py-3">
          {department.departmentName}
        </td>
      </tr>
    )
}