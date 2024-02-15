export type Student = {
  id: string;
  firstName: string;
  lastName: string;
  departmentId: number;
};

export type Grade = {
  id: string;
  grade: number;
  letterGrade: string;
  studentId: string;
  lectureId: string;
};