const apiKey = "a0683e7b9fbf8e050d37e26d457644cc";
const accessToken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDY4M2U3YjlmYmY4ZTA1MGQzN2UyNmQ0NTc2NDRjYyIsInN1YiI6IjY1ODIzMjA1MzRlMTUyMDg0NTA4OWQ3MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fixc96wYw6NNS8x58NwhkfdLTbxNVDQ_iBr6SPcF_Dg";
const apiUrl = "https://api.themoviedb.org/3";

// Función para obtener películas por categoría
export const getMoviesByCategory = async (category) => {
    // Función auxiliar para obtener el ID de género según el nombre de la categoría
    const getGenreId = (categoryName) => {
        switch (categoryName.toLowerCase()) {
            case "drama":
                return 18;
            case "science fiction":
                return 878;
            case "fantasy":
                return 14;
            case "adventure":
                return 12;
            case "action":
                return 28;
            case "animation":
                return 16;
            case "music":
                return 10402;
            case "horror":
                return 27;
            case "romance":
                return 10749;
            default:
                return "";
        }
    };

    const language = "en-US"; // Idioma de los resultados
    const genreId = getGenreId(category);

    const endpoint = `${apiUrl}/discover/movie?api_key=${apiKey}&language=${language}&with_genres=${genreId}&page=1&include_adult=false&vote_average.gte=6&sort_by=popularity.desc&vote_count.gte=100`;

    try {
        const response = await fetch(endpoint, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        return data.results.slice(0, 10); // Obtener las primeras 10 películas
    } catch (error) {
        console.error("Hubo un problema con la solicitud:", error);
        return []; // En caso de error, devolvemos un arreglo vacío
    }
};
