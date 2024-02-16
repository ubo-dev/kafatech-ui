import { Card } from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';
import {
    fetchCardData,
  getGrades,
  getStudentsCount
} from '@/app/lib/data';
import GradeList from '../ui/dashboard/grade-list';
 
export default async function Page() {
  const grades = await getGrades();
  const {
    studentsCount,
    departmentsCount,
    instructorsCount,
    lecturesCount,
    gradesCount,
  } = await fetchCardData();
 
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          title="Total Students"
          value={studentsCount}
          type="customers"
        />
        <Card
          title="Total Departments"
          value={departmentsCount}
          type="customers"
        />
        <Card
          title="Total Lectures"
          value={lecturesCount}
          type="customers"
        />
        <Card
          title="Total Instructor"
          value={instructorsCount}
          type="customers"
        />
        <Card
          title="Total Grades"
          value={gradesCount}
          type="customers"
        />
      </div>
    </main>
  );
}