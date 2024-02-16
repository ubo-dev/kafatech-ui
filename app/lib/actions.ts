'use server';
 
import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const API_URL = 'http://localhost:8080/api';

export async function createGrade(formData: FormData) {
    const CreateGradeRequest = {
        student: formData.get('studentId'),
        gradePoint: formData.get('gradePoint'),
        letterGrade: formData.get('letterGrade'),
        lecture: formData.get('lectureCode'),
      }
      console.log(CreateGradeRequest);

    const student = await axios({
        method: 'get',
        url: API_URL + '/students/getStudentById/' + CreateGradeRequest.student,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const lecture = await axios({
        method: 'get',
        url: API_URL + '/lectures/getLectureByCode/' + CreateGradeRequest.lecture,
        headers: {
            'Content-Type': 'application/json',
        },
    });


    console.log(student.data);
   
    axios({
        method: 'post',
        url: API_URL + '/grades/createGrade',
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            gradePoint: CreateGradeRequest.gradePoint,
            letterGrade: CreateGradeRequest.letterGrade,
            student: student.data,
            lecture: lecture.data,
        },
    });

    revalidatePath('/dashboard/grades');
    redirect('/dashboard/grades');
}

export async function updateGrade(formData: FormData) {
    const CreateGradeRequest = {
        student: formData.get('studentId'),
        gradePoint: formData.get('gradePoint'),
        letterGrade: formData.get('letterGrade'),
        lecture: formData.get('lectureCode'),
      }
      console.log(CreateGradeRequest);

    const student = await axios({
        method: 'get',
        url: API_URL + '/students/getStudentById/' + CreateGradeRequest.student,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const lecture = await axios({
        method: 'get',
        url: API_URL + '/lectures/getLectureByCode/' + CreateGradeRequest.lecture,
        headers: {
            'Content-Type': 'application/json',
        },
    });


    console.log(student.data);
   
    axios({
        method: 'put',
        url: API_URL + '/grades/updateGrade/' + formData.get('gradeId'),
        headers: {
            'Content-Type': 'application/json',
        },
        data: {
            gradePoint: CreateGradeRequest.gradePoint,
            letterGrade: CreateGradeRequest.letterGrade,
            student: student.data,
            lecture: lecture.data,
        },
    });

    revalidatePath('/dashboard/grades');
    redirect('/dashboard/grades');
}

export async function deleteGrade(gradeId: string) {
    axios({
        method: 'delete',
        url: API_URL + '/grades/deleteGradeById/' + gradeId,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    revalidatePath('/dashboard/grades');
    redirect('/dashboard/grades');
}