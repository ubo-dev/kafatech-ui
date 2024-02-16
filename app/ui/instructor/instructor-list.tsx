import { Grade, Instructor } from "@/app/lib/definitions";
import { Update, Delete } from "../shared/buttons";

export default async function InstructorList(instructor: Instructor) {
    return (
        <tr
            key={instructor.id}
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
        >
            <td className="whitespace-nowrap px-3 py-3">
                {instructor.firstName} {instructor.lastName}
            </td>
            <td className="whitespace-nowrap px-3 py-3">
                {instructor.department.departmentName}
            </td>
        </tr>
    )
}