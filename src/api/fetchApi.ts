const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080/pokemons";

const handleResponse = async (response: Response) => {
  const unknownError = { message: "Unknown error", status: response.status }

  if (!response.ok) {
    const error = response.headers.get("content-type")?.includes("application/json")
      ? await response.json()
      : unknownError;
    throw new Error(error.message || unknownError.message);
  }

  return response.json();
};

export const apiFetch = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);
  return await handleResponse(response);
};
