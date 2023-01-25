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
    validation: yup
      .string()
      .min(3, 'Name must be at least 3 characters long')
      .required('Required'),
  },
  dateTime: {
    value: '',
    // validation: yup
    //   .date()
    //   .required('Required'),
  },
};
