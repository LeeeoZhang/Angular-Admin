import {Component, OnInit, Input} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;

    hero$;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: HeroService
    ) {}

    ngOnInit() {
        this.hero$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) => this.service.getHero(params.get('id')))
        );
    }

    gotoHeroes() {
        this.router.navigate(['/heroes']);
    }

}
