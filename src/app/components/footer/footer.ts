import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ITCH_URL } from '../../constants';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly itchUrl = ITCH_URL;
  protected readonly year = new Date().getFullYear();
}
