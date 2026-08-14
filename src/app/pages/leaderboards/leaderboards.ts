import { Component } from '@angular/core';
import { ITCH_URL } from '../../constants';

@Component({
  selector: 'app-leaderboards',
  imports: [],
  templateUrl: './leaderboards.html',
  styleUrl: './leaderboards.scss',
})
export class Leaderboards {
  protected readonly itchUrl = ITCH_URL;
}
