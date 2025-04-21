import { apiFetch } from '@/api/fetchApi';

export const optionsFetch = async (endpoint: string): Promise<Response> => {
  const options: RequestInit = {
    method: 'OPTIONS',
  };

  const response = await apiFetch<Response>(endpoint, options);
  return response;
};

export const checkCorsOptions = async () => {
  try {
    const response = await optionsFetch("");
    console.log('Allowed Methods:', response.headers.get('allow'));
  } catch (error) {
    console.error('Error sending OPTIONS request:', error);
  }
};