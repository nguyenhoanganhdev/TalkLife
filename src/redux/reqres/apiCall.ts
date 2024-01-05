import ApiClient from '@api';
import { SignUpRequest, SignUpSuccessPayload } from './types';

export async function SignUp(payload: SignUpRequest) {
  console.log('payload', payload.params);

  try {
    const response = await ApiClient.post<SignUpSuccessPayload>(
      `http://streaming.nexlesoft.com:3001/auth/signup`,
      payload.params,
    );
    return response.data;
  } catch (error) {
    console.error('SignUp - Error: ', error);
    throw error;
  }
}
