import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewEncapsulation,
} from "@angular/core";
import { Course } from "../model/course";
import { CoursesService } from "../services/courses.service";
import { COURSES_SERVICE_TOKEN } from "../app.component";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  standalone: false,
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  constructor(
    @Inject(COURSES_SERVICE_TOKEN) private coursesService: CoursesService
  ) {}

  ngOnInit() {}

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
