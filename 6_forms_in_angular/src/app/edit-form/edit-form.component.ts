import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent {
user = {
name: 'John Doe',
email: 'johndoe@example.com'
};
onSubmit() {
console.log('User data submitted: ', this.user);

}}
