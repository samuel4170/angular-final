import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent {

  tutorial: Tutorial = {
    nombre: '',
    apellido: '',
    edad: '',
    telefono: '',
    direccion: '',
    nit: '',
    dpi: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService) { }

  saveTutorial(): void {
    const data = {
      nombre: this.tutorial.nombre,
      apellido: this.tutorial.apellido,
      edad: this.tutorial.edad,
      telefono: this.tutorial.telefono,
      direccion: this.tutorial.direccion,
      nit: this.tutorial.nit,
      dpi: this.tutorial.dpi
    };

    this.tutorialService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      nombre: '',
      apellido: '',
      edad: '',
      telefono: '',
      direccion: '',
      nit: '',
      dpi: '',
      published: false
    };
  }

}