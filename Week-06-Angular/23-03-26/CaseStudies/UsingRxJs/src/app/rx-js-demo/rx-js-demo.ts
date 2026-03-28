import { Component ,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  viewChild
} from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClient } from '@angular/common/http';
import {of, fromEvent ,BehaviorSubject  } from 'rxjs';
import {map,debounceTime,switchMap,mergeMap,filter} from 'rxjs/operators';
@Component({
  selector: 'app-rx-js-demo',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './rx-js-demo.html',
  styleUrl: './rx-js-demo.css',
})
export class RxJsDemo implements OnInit,AfterViewInit {
   @ViewChild('clickBtn') clickBTn !:ElementRef;
   @ViewChild('Searchbox') searchBox!:ElementRef;
  observableOutput:any[]=[];
  mapOutput:any[]=[];
  filterOutput:any[]=[];
  multiMapOutput:any[]=[];
  behaviourOutput:any[]=[];
  clickOutput:any[]=[];
  searchOutput:any[]=[];
  mergeMapOutput:any[]=[];
  loading =false;
  constructor(private http:HttpClient){}
     ngOnInit(): void {
    const observable$ = of(1, 2, 3, 4, 5);

    observable$.subscribe(val => this.observableOutput.push(val));
    observable$.pipe(
      map( x=> x*10)
    ).subscribe(res=>this.mapOutput.push(res));
  observable$.pipe(
    map(x=>x%2===0?x*100:null)
  ).subscribe(res=>{
    if(res!==null) this.filterOutput.push(res)
  });
  observable$.pipe(
    map(x=>x+1),
    map(x=>x*2),
    map(x=>`final: ${x}`)
  ).subscribe(res=>this.multiMapOutput.push(res));
   of(1,2,3).pipe(
    mergeMap(id=>
      this.http.get<any>(`https://jsonplaceholder.typicode.com/posts/${id}`)
    )
   ).subscribe(res=>{
    this.mergeMapOutput.push(res);
      } );
  }
ngAfterViewInit(): void {
  fromEvent(this.searchBox.nativeElement, 'input').pipe(
    debounceTime(500),
    map((event: any) => event.target.value.trim()),
    filter(text => text.length >= 3),
    switchMap(text => {
      this.loading = true;
      return this.http.get<any[]>(
        `https://jsonplaceholder.typicode.com/posts?q=${text}`
      );
    })
  ).subscribe({
    next: (res) => {
      this.searchOutput = res;
      this.loading = false;
    },
    error: (err) => {
      console.error('API error', err);
      this.searchOutput = [];
      this.loading = false;
    },
    complete: () => {
      console.log('Search stream completed');
    }
  });
}
}

