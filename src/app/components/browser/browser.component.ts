import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '\@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html'
})
export class BrowserComponent implements OnInit {
  heroes: any[] = [];
  termino: string;
  constructor(
    private activateRoute: ActivatedRoute,
    private _heroesService: HeroesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params)=>{
      this.termino=params['term'];
      this.heroes = this._heroesService.buscarHeroes(params['term']);
    });
  }
  verHeroe(i: number){
    this.router.navigate(['/heroe', i]);
  }

}
