import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

	const { images, isLoading } = useFetchGifs(category);

	return (
		<div>
			<h2>{isLoading ? 'Cargando...' : category}</h2>
			{/* El null react no lo renderiza */}
			{/* { isLoading && <h3>Cargando...</h3> } */}

			<div className="card-grid">

				{images.map((img) =>
					<GifItem
						key={img.id}
						{...img}
					/>
				)}

			</div>
		</div>
	)
}
