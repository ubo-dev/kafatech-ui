import axios, { Axios } from 'axios';
import { Student } from './definitions';
import { formatCurrency } from './utils';

const API_URL = 'http://localhost:8080/api';

export const getStudents = async () => {
  try {
     return axios({
      method: 'get',
      url: API_URL + '/students/getAll',
      headers: {
        'Content-Type': 'application/json',
      },
     })
  } catch (error) {
    console.error('Error fetching students', error);
  }
};

export const getLectures = async () => {
  try {
     return axios({
      method: 'get',
      url: API_URL + '/lectures/getAll',
      headers: {
        'Content-Type': 'application/json',
      },
     })
  } catch (error) {
    console.error('Error fetching students', error);
  }
};

export const getGrades = async () => {
  try {
    return axios({
      method: 'get',
      url: API_URL + '/grades/getAll',
      headers: {
        'Content-Type': 'application/json',
      },
     })
  } catch (error) {
    console.error('Error fetching grades', error);
  }
};

export const getGradeById = async (id: string) => {
  try {
    return axios({
      method: 'get',
      url: API_URL + '/grades/findGradeById/' + id,
      headers: {
        'Content-Type': 'application/json',
      },
     })
  } catch (error) {
    console.error('Error fetching grades', error);
  }
}

export const getInstructors = async () => {
  try {
    return axios({
      method: 'get',
      url: API_URL + '/instructors/getAll',
      headers: {
        'Content-Type': 'application/json',
      },
     })
  } catch (error) {
    console.error('Error fetching grades', error);
  }
};

export const getDepartments = async () => {
  try {
    return axios({
      method: 'get',
      url: API_URL + '/departments/getAll',
      headers: {
        'Content-Type': 'application/json',
      },
     })
  } catch (error) {
    console.error('Error fetching grades', error);
  }
};

export const getInstructorsCount = async () => {
  try {
    const response = await getInstructors();
    return response?.data.length;
  } catch (error) {
    console.error('Error fetching instructors', error);
  }
}


export const getLecturesCount = async () => {
  try {
    const response = await getLectures();
    return response?.data.length;
  } catch (error) {
    console.error('Error fetching lectures', error);
  }
};

export const getGradesCount = async () => {
  try {
    const response = await getGrades();
    return response?.data.length;
  } catch (error) {
    console.error('Error fetching grades', error);
  }
};


export const getStudentsCount = async () => {
  try {
    const response = await getStudents();
    return response?.data.length;
  } catch (error) {
    console.error('Error fetching students', error);
  }
};

export const getDepartmentsCount = async () => {
  try {
    const response = await getDepartments();
    return response?.data.length;
  } catch (error) {
    console.error('Error fetching departments', error);
  }
}

export const fetchCardData = async () => {
  const studentsCount = await getStudentsCount();
  const departmentsCount = await getDepartmentsCount();
  const lecturesCount = await getLecturesCount();
  const gradesCount = await getGradesCount();
  const instructorsCount = await getInstructorsCount();

  return {
    studentsCount,
    departmentsCount,
    lecturesCount,
    gradesCount,
    instructorsCount,
  };
}
