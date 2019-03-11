import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {of} from 'rxjs';

import { ContentpageComponent } from './contentpage.component';
import { InternsService } from '../services/interns/interns.service';
import { Content } from './content';
import { CONTENTS } from './mock-content';

describe('ContentpageComponent', () => {
  let component: ContentpageComponent;
  let contentPage: ContentpageComponent;
  let fixture: ComponentFixture<ContentpageComponent>;
  let service: InternsService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContentpageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    service = new InternsService();
    fixture = TestBed.createComponent(ContentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    contentPage = new ContentpageComponent(service);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have called getInterns`, () => {
    const mockResponse = [
      {
        id: 10,
        imageUrl: 'https://duck.jpg',
        article: 'mock description'
      },
      {
        id: 20,
        imageUrl: 'https://blackbird.jpg',
        article: 'mock description'
      },
      {
        id: 30,
        imageUrl: 'https://eagle.jpg',
        article: 'mock description'
      }];

    spy = spyOn(service, 'getInterns').and.returnValue(of(mockResponse));
    //let response;
    //service.getInterns().subscribe(res => {response = res; });
    //expect(response).toEqual(mockResponse);
    contentPage.getInterns();
    expect(contentPage.interns).toEqual(mockResponse);
    expect(service.getInterns).toHaveBeenCalled();

  });
});
