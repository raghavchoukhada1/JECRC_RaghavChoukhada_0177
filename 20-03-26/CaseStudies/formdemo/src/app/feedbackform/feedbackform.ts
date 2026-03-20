import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-feedbackform',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './feedbackform.html',
  styleUrl: './feedbackform.css',
})
export class Feedbackform {
  department = ['Sales', 'Support', 'HR', 'IT'];
  allskills = ['angular', 'react', 'vue', 'svelte'];
  feedback = {
    name: '',
    email: '',
    departments: '',
    skills: [] as string[],
    ratings:'',
    comments:''
  };
  submitForm(form:NgForm){
    if(form.valid){
      console.log('Form Submitted',this.feedback);
      alert(JSON.stringify(this.feedback,null,2));
      form.resetForm();
      this.feedback.skills=[];
    }else{
      console.log('Form is invalid');
    }
}
updateSkills(skill:string,isChecked:boolean){
  if(isChecked){
    this.feedback.skills.push(skill);
  }else{
    const index = this.feedback.skills.indexOf(skill);
    if(index>=0) this.feedback.skills.splice(index,1);

  }
}}