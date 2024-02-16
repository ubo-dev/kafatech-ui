import { getStudents } from '@/app/lib/data';
import { customers } from '@/app/lib/placeholder-data';
import Breadcrumbs from '@/app/ui/shared/breadcrumbs';
import Form from '@/app/ui/shared/create-form';
 
export default async function Page() {
  const students = await getStudents();
 
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Grades', href: '/dashboard/grades' },
          {
            label: 'Create Grade',
            href: '/dashboard/grades/create',
            active: true,
          },
        ]}
      />
      <Form students={students?.data} />
    </main>
  );
}