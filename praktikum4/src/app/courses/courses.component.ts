import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = 'Belajar Angular';
  getTitle(){
    return this.title;
  }
  Courses;
  
  binding = 'property-binding';
  imageUrl = 'http://lorempixel.com/400/200/'
  colspan = 2;
  isActive = true;
  nama = 'Achmad';
  onSave($event){
    $event.stopPropagation();
    console.log("button sudah diklik",$event)
  }

  onDivClick($event){
    console.log("ini method div",$event)
  }

  onKeyUp(){
    console.log(this.nama);
  }

  constructor(private c:CoursesService) {
    this.Courses=c.getCourses();
   }

  ngOnInit() {
  }

}
