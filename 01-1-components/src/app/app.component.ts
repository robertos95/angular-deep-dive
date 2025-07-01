import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {
    courses = [...COURSES];


    @ViewChild(CourseCardComponent)
    card: CourseCardComponent;

    onCourseSelected(course: Course) {
        console.log('Course selected: ', this.card);
    }

    ngAfterViewInit() {
        console.log('Card component: ', this.card);
        console.log('Card component course: ', this.card.course);
        console.log('Card component index: ', this.card.index);
    }
}
