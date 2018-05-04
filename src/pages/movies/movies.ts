import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';


/**
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  movies:any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, private mp:MoviesProvider) {
  }

  //searchbar
  search(event){
    this.mp.getFilteredMovies(event.target.value).subscribe(filteredMovies =>{
      this.movies = filteredMovies;
    });
    
  }


  ionViewDidLoad() {
    this.mp.GetMovieData().subscribe(data=>
      {

        this.movies = data.Search;

      })
      
  }



}
