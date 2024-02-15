import { Card } from '@/app/ui/dashboard/cards';
import { lusitana } from '@/app/ui/fonts';
import {
  getGrades
} from '@/app/lib/data';
import GradeList from './ui/dashboard/grade-list';
 
export default async function Page() {
  const grades = await getGrades();
 
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <GradeList grades={grades} />
      </div>
    </main>
  );
}