import { Component, HostListener, input, signal } from '@angular/core';

export interface Shot {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  readonly shots = input<Shot[]>([

    {
      src: 'screenshots/horde.png',
      alt: 'The main menu in the forest',
    },
            {
      src: 'screenshots/classes.png',
      alt: 'showcase 5 classes',
    },
            {
      src: 'screenshots/gear.png',
      alt: 'showcase gear',
    },
        {
      src: 'screenshots/skills.png',
      alt: 'The main menu in the forest',
    },
     {
      src: 'screenshots/shrineee.png',
      alt: 'The main menu in the forest',
    },
       {
      src: 'screenshots/cover-art.png',
      alt: 'Bound to Defend cover art, the hero before and after gearing up',
    },
  ]);

  protected readonly index = signal(0);
  protected readonly lightboxOpen = signal(false);

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (this.lightboxOpen()) {
      if (event.key === 'Escape') {
        this.closeLightbox();
      }
    } else {
      if (event.key === 'ArrowLeft') this.step(-1);
      if (event.key === 'ArrowRight') this.step(1);
    }
  }

  protected show(i: number): void {
    const length = this.shots().length;
    if (length === 0) return;
    this.index.set((i + length) % length);
  }

  protected step(dir: number): void {
    this.show(this.index() + dir);
  }

  protected openLightbox(): void {
    this.lightboxOpen.set(true);
  }

  protected closeLightbox(): void {
    this.lightboxOpen.set(false);
  }
}
