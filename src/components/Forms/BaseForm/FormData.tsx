import * as yup from 'yup';
export const FormSchema = {
  firstname: {
    value: '',
    validation: yup
      .string()
      .min(3, 'Name must be at least 3 characters long')
      .required('Required'),
  },
  lastname: {
    value: '',
    validation: yup
      .string()
      .min(3, 'Name must be at least 3 characters long')
      .required('Required'),
  },
  address: {
    value: '',
    validation: yup.string().min(3, 'Name must be at least 3 characters long'),
  },
  description: {
    value: '',
    validation: yup.string(),
  },
  dateTime: {
    value: '',
    validation: yup.date(),
  },
  location: {
    value: '',
    validation: yup.string(),
  },
};
