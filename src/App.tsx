

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';




export function App() {


  

  return (
    // <div style={{ display: 'flex', flexDirection: 'row' }}>
    //   <nav className="sidebar">
    //     <span>Watch<p>Me</p></span>

    //     <div className="buttons-container">
    //       {genres.map(genre => (
    //         <Button
    //           key={String(genre.id)}
    //           title={genre.title}
    //           iconName={genre.name}
    //           onClick={() => handleClickButton(genre.id)}
    //           selected={selectedGenreId === genre.id}
    //         />
    //       ))}
    //     </div>

    //   </nav>

    //   <div className="container">
    //     <header>
    //       <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    //     </header>

    //     <main>
    //       <div className="movies-list">
    //         {movies.map(movie => (
    //           <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
    //         ))}
    //       </div>
    //     </main>
    //   </div>
    // </div>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
    <SideBar /> 
    <Content />
    </div>
  )
}