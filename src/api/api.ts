const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const handleResponse = async (response: Response) => {
    
const isJson = response.headers.get("content-type")?.includes("application/json");
const unknownError = { message: "Unknown error", status: response.status }

  if (!response.ok) {
    const error = isJson? await response.json() : unknownError;
    throw new Error(error.message || unknownError.message);
  }

  return response.json();
};

export const apiFetch = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  return await handleResponse(response);
};
