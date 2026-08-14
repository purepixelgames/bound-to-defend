import { TestBed } from '@angular/core/testing';
import { Gallery } from './gallery';

describe('Gallery', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gallery],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(Gallery);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should advance to the next screenshot', () => {
    const fixture = TestBed.createComponent(Gallery);
    const gallery = fixture.componentInstance as unknown as {
      index: () => number;
      step: (dir: number) => void;
    };
    gallery.step(1);
    expect(gallery.index()).toBe(1);
  });

  it('should wrap around when going backwards from the first shot', () => {
    const fixture = TestBed.createComponent(Gallery);
    const gallery = fixture.componentInstance as unknown as {
      index: () => number;
      shots: () => unknown[];
      step: (dir: number) => void;
    };
    gallery.step(-1);
    expect(gallery.index()).toBe(gallery.shots().length - 1);
  });
});
