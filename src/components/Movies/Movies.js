import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies ({ 
    isLoading, 
    activeCheckbox, 
    handleCheckbox, 
    movies, 
    handleSearchMovie, 
    saveMovie, 
    deleteMovie,
    notFound
}) {

  return (
    <main>
      <SearchForm 
        activeCheckbox={activeCheckbox} 
        handleCheckbox={handleCheckbox} 
        handleSearchMovie={handleSearchMovie}
      />
      <MoviesCardList 
        activeCheckbox={activeCheckbox} 
        isLoading={isLoading} 
        cards={movies} 
        notFound={notFound} 
        saveMovie={saveMovie} 
        deleteMovie={deleteMovie}
      />
    </main>
  )
}

export default Movies;