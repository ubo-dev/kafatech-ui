import Pagination from '@/app/ui/shared/pagination';
import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { Create } from '@/app/ui/shared/buttons';
import StudentTable from '@/app/ui/student/student-table';
 
export default async function Page({
   searchParams,
 }: {
   searchParams?: {
     query?: string;
     page?: string;
   };
 }) {
   const query = searchParams?.query || '';
   const currentPage = Number(searchParams?.page) || 1;
  
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Students</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search grades..." />
        <Create name={'Student'} />
      </div>
      {<Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <StudentTable query={query} currentPage={currentPage} />
      </Suspense>}
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}