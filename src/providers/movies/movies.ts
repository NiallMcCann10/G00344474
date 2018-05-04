import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Generated class for the MoviesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/


@Injectable()
export class MoviesProvider {

  filterItems: any;
  constructor(public http: HttpClient) {
    console.log('Hello MoviesProvider Provider');
  }
  
 
  //searchbar finding selected movies
  getFilteredMovies(searchText: string): Observable<any> {
    return Observable.create( observable => {
      this.GetMovieData().subscribe(movies => {
        if(searchText && searchText.length >0){
          const filter = movies.filter;
          let filteredMovies = movies.filter(m => m.movies.toLowerCase().indexOf(searchText.toLowerCase()));
        observable.next(filteredMovies);
        }
        else{
          observable.next(movies);
        }
        observable.complete();
      });

    });
  }

  GetMovieData():Observable<any>{
    return this.http.get('http://www.omdbapi.com/?apikey=2952678d&s=%27war%27');
  }

}


