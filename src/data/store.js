import { s } from 'vite/dist/node/types.d-aGj9QkWt'
import {reactive} from 'vue'

//scrivo import {reactive} from 'vue' per importare la funzione reactive da vue che mi permette di creare un oggetto reattivo

export const store = reactive({
  apiMoviePop:'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
  moviePopArray:[],
  apiSeriesPop:'https://api.themoviedb.org/3/discover/tv?include_adult=false&language=en-US&page=1&sort_by=popularity.desc',
  seriesPopArray:[],
  apiMovie:'https://api.themoviedb.org/3/search/movie',
  movieArray:[],
  apiSeries:'https://api.themoviedb.org/3/search/tv',
  seriesArray:[],
  queryParams:{
    api_key: '9269e4696eb5f1f8ef1c67d5c1abd16c',
  }
})
