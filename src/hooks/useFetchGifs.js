import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    // En básicas palabras los hooks, no son más que funciones que regresan algo

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

	const newGifs = async () => {

		setImages(await getGifs(category));

		setIsLoading(false);
	}

	// Se utiliza para disparar efectos secundarios cuando algo sucede, por ejemplo cuando la variable de algun useState cambia, useEffect dispara con su callback
	useEffect(() => {
		newGifs();
	}, []); 
	// El segundo argumento, si lo dejamos vacío quiere decir que se va a disparar por única vez cuando se crea y se renderiza el componente

	// Con este hook podemos permanecer el estado de cierta parte del componente cuando otra parte de componente sufre cambios y se re-renderiza todo, con useEffect evitamos
	// re-renderizar toda la parte que no queremos

    return {
        images,
        isLoading
    }
}
