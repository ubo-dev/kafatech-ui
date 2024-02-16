import { Grade } from "@/app/lib/definitions";
import { Update, Delete, DeleteGrade } from "../shared/buttons";

export default async function GradeList(grade: Grade) {
    return (
        <tr
            key={grade.gradeId}
            className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
        >
            <td className="whitespace-nowrap px-3 py-3">
                {grade.gradePoint}
            </td>
            <td className="whitespace-nowrap px-3 py-3">
                {grade.letterGrade}
            </td>
            <td className="whitespace-nowrap px-3 py-3">
                {grade.student.firstName} {grade.student.lastName}
            </td>
            <td className="whitespace-nowrap px-3 py-3">
                {grade.lecture.lectureName}
            </td>
            <td className="whitespace-nowrap px-3 py-3">
                {grade.student.department.departmentName}
            </td>
            <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex justify-end gap-3">
                    <Update id={grade.gradeId} />
                    <DeleteGrade id={grade.gradeId} />
                </div>
            </td>
        </tr>
    )
}