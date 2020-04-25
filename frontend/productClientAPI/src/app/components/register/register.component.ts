import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from 'src/app/services/user-registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  show: boolean;

  constructor(private service: UserRegistrationService) {
    this.show = false;
  }

  ngOnInit() {
  }

  public postUser(data) {
    this.service.postUser(data).subscribe(
      response => {
        this.show = true;
      }
    )
  }

}
