const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080/pokemons";

const handleResponse = async (response: Response) => {
  if (!response.headers.get("content-type")?.includes("application/json")) {
    throw new Error("API response was not of type JSON");
  } else if (response.status === 401) {
    throw new Error("Unauthorized access");
  } else if (response.status === 403) {
    throw new Error("Forbidden access");
  } else if (response.status === 404) {
    throw new Error("Resource not found");
  } else if (response.status === 500) {
    throw new Error("Internal server error");
  } else if (response.status === 503) {
    throw new Error("Service unavailable");
  } else if (!response.ok) {
    throw new Error("API request was not successful");
  }
  return response.json();
};

export const apiFetch = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  let response: Response;
  try {
    response = await fetch(`${BASE_URL}${endpoint}`, options);
  } catch (error) {
    throw new Error("Network error: " + (error as Error).message);
  }
  return await handleResponse(response);
};
