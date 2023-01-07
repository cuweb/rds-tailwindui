import * as yup from 'yup';
export const FormSchema = {
  name: {
    value: '',
    validation: yup
      .string()
      .min(3, 'Name must be at least 3 characters long')
      .required('Required'),
  },
  role: {
    value: '',
    validation: yup
      .string()
      .oneOf(['designer', 'developer', 'manager', 'other'], 'Invalid Job Type')
      .required('Required'),
  },
  tos: {
    value: false,
    validation: yup
      .boolean()
      .oneOf([true], 'Please accept the terms of service'),
  },
};
