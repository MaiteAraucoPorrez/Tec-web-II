export type Pelicula = {
  id?: number;
  title: string;
  rating: number;
};

type ApiResponse = {
  products: Pelicula[];
};

const URL = "https://dummyjson.com/products";

export const getPeliculas = async (): Promise<Pelicula[]> => {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("Error al obtener películas");
    }

    const data: ApiResponse = await response.json();

    return data.products;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const createPelicula = async (pelicula: Omit<Pelicula, "id">): Promise<Pelicula> => {
  try {
    const response = await fetch(`${URL}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pelicula),
    });

    if (!response.ok) {
      throw new Error("Error al registrar película");
    }

    const data: Pelicula = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
