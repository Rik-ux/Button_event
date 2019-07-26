import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous-template',
  templateUrl: './marvellous-template.component.html',
  styleUrls: ['./marvellous-template.component.css']
})
export class MarvellousTemplateComponent implements OnInit 
{
 public value = "Educating for Better tomorrow"
  constructor() { }

  ngOnInit() 
  {
  }

  // Event listener for button
   fun(value)
  {
    console.log(this.value);
  }
}
