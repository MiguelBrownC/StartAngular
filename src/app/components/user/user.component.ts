import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'userLLcomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input() occupation: string= "";
  @Output() greet: EventEmitter<string>= new EventEmitter<string>();
  username: string = "angel ";
  doesUserExist : boolean = true;
  operatingSystems = [{ id: 'win', name: 'Windows' }, { id: 'osx', name: 'MacOS' }, { id: 'linux', name: 'Linux' }];
  isEditable : boolean = true;

  onMouseOver(osName:string) : void{
    console.log(osName);
  }
}