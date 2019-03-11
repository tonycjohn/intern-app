import { Component, OnInit } from '@angular/core';
//import { CONTENTS } from './mock-content';
import {InternsService} from '../services/interns/interns.service';
import {Content} from './content';

@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.css']
})
export class ContentpageComponent implements OnInit {

  interns: Content[];
  title = "Intern Profiles";

  constructor( private internsService: InternsService) {}

  getInterns(): void {
    this.internsService.getInterns().subscribe(interns => this.interns = interns);
  }

  ngOnInit() {
    this.getInterns();
  }

}
