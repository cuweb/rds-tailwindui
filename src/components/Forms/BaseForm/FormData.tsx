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
  fileUpload: {
    value: '',
    validation: yup
      .mixed()
      .nullable()
      .test(
        'FILE_SIZE',
        ' Uploaded file is too big ',
        value => !value || value.size <= 10 * 1024 * 1024
      ),
  },
};
