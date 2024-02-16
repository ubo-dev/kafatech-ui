export type Student = {
  studentId: string;
  firstName: string;
  lastName: string;
  department: Department;
};

export type Grade = {
  gradeId: string;
  gradePoint: number;
  letterGrade: string;
  student: Student;
  lecture: Lecture;
};

export type Department = {
  id: string;
  departmentName: string;
};

export type Lecture = {
  id: string;
  lectureName: string;
  department: Department;
};

export type Instructor = {
  id: string;
  firstName: string;
  lastName: string;
  department: Department;
};

export type CreateGradeRequest = {
  student: Student;
  gradePoint: number;
  letterGrade: string;
};