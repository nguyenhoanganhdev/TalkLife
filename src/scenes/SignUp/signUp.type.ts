import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from '@routes/utils/enum';
import * as Yup from 'yup';

export const validationSignUp = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .min(MIN_PASSWORD_LENGTH, 'Password must be at least 6 characters')
    .max(MAX_PASSWORD_LENGTH, 'Password must be at most 18 characters'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
});
