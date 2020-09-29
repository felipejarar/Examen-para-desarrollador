import { Component, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent implements OnInit {

  constructor() { }

  faPencilAlt = faPencilAlt;

  card : any = {
    title : "Lorem Ipsum",
    description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu magna ut odio interdum sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed euismod interdum ex in tempus. Praesent eget nisi a neque fringilla rutrum. Maecenas orci lorem, euismod non placerat id, sollicitudin at nibh. Donec eu mauris condimentum, tincidunt nisl non, efficitur nisi. Maecenas ultricies ipsum in turpis finibus dapibus. Nullam porta eros sed urna dictum, et semper ex sagittis"
  }


  ngOnInit(): void {
  
  }


}
