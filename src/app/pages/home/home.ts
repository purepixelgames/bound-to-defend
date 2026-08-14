import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Gallery } from '../../components/gallery/gallery';
import { ITCH_URL } from '../../constants';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [Gallery],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly itchUrl = ITCH_URL;
  protected readonly trailerUrl: SafeResourceUrl;

  /** Swap the trailer by changing the YouTube video id below. */
  private readonly trailerId = 'mQm6aJgodL4';

  constructor(sanitizer: DomSanitizer) {
    this.trailerUrl = sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${this.trailerId}`,
    );
  }

  protected readonly features: Feature[] = [
    {
      icon: '⚔️',
      title: 'Roguelite Runs',
      description:
        'Start at level 1 every run and draft new skills as you survive, so no two builds play the same.',
    },
    {
      icon: '💎',
      title: 'Loot That Stays',
      description:
        'Weapons and armor are saved permanently. Upgrade, merge and sell gear between attempts.',
    },
    {
      icon: '⚡',
      title: 'Active or Relaxed',
      description:
        'Auto attacks and passives carry you, or take control with manual skills on QWERT.',
    },
    {
      icon: '🏆',
      title: 'Monthly Top 100',
      description:
        'A live cross-platform leaderboard resets every month. Climb it before the timer runs out.',
    },
  ];
}
