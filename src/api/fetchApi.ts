const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8080/pokemons";

const handleResponse = async (response: Response) => {
  if (!response.headers.get("content-type")?.includes("application/json")) {
    throw new Error("API response was not of type JSON");
  } else if (response.status >= 400 && response.status < 500) {
    throw new Error(`Client error: ${response.status}`);
  } else if (response.status >= 500 && response.status < 600) {
    throw new Error(`Server error: ${response.status}`);
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
