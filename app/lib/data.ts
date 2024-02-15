import axios from 'axios';
import {

} from './definitions';
import { formatCurrency } from './utils';

const API_URL = 'http://localhost:8080/api';

export const getStudents = async () => {
  try {
    const response = await axios.get(API_URL + '/students');
    return response.data;
  } catch (error) {
    console.error('Error fetching students', error);
  }
};

export const getStudentsCount = async () => {
  try {
    const response = await getStudents();
    return response.data.length;
  } catch (error) {
    console.error('Error fetching students', error);
  }
};


export const getGrades = async () => {
  try {
    const response = await axios.get(API_URL + '/grades');
    return response.data;
  } catch (error) {
    console.error('Error fetching grades', error);
  }
};

export const getDepartments = async () => {
  try {
    const response = await axios.get(API_URL + '/departments');
    return response.data;
  } catch (error) {
    console.error('Error fetching departments', error);
  }
};

export const getDepartmentsCount = async () => {
  try {
    const response = await getDepartments();
    return response.data.length;
  } catch (error) {
    console.error('Error fetching departments', error);
  }
}

export const fetchCardData = async () => {
  const studentsCount = await getStudentsCount();
  const departmentsCount = await getDepartmentsCount();

  return {
    studentsCount,
    departmentsCount,
  };
}
