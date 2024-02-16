
import { getGradeById, getStudents } from '@/app/lib/data';
import { customers } from '@/app/lib/placeholder-data';
import Breadcrumbs from '@/app/ui/shared/breadcrumbs';
import Form from '@/app/ui/shared/create-form';
import EditGradeForm from '@/app/ui/shared/edit-form';
import EditInvoiceForm from '@/app/ui/shared/edit-form';
 
export default async function Page({ params }: { params: { id: string } }) {
const id = params.id;
const [grade, students] = await Promise.all([
    getGradeById(id),
    getStudents(),
  ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Grades', href: '/dashboard/grades' },
          {
            label: 'Edit Grades',
            href: `/dashboard/grades/${id}/edit`,
            active: true,
          },
        ]}
      />
      <EditGradeForm grade={grade} students={students} />
    </main>
  );
}