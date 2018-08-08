import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, startWith } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import { TransferState, makeStateKey } from '@angular/platform-browser';

const ANIMAL_KEY = makeStateKey<any>('animal');

import { SeoService } from '../seo.service';
import { Animal } from '../interface';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {

  animals$: Observable<Animal>;
  animal: Animal;

  constructor(
    private afs: AngularFirestore,
    private seo: SeoService,
    private route: ActivatedRoute,
    private state: TransferState
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('name').toLowerCase();
    this.animals$ = this.ssrFirestoreDoc(`/animal/${id}`);
    this.animals$.subscribe(data => {
      this.animal = data;
    })
  }

  ssrFirestoreDoc(path: string) {
    const exists = this.state.get(ANIMAL_KEY, this.animal);
    
    return this.afs.doc<Animal>(path).valueChanges().pipe(
      tap(animal => {
        console.log('value changes: ', animal);
        this.state.set(ANIMAL_KEY, animal)
        this.seo.generateTags({
          title: animal.name,
          description: animal.bio,
          image: animal.imageURL
        });
      }),
      startWith(exists)
    )

  //  return this.afs.doc<Animal>(path).ref.get().then(snapshop => {
  //    return snapshop.data();
  //  });


  }
}
