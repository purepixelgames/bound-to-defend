import { Component } from '@angular/core';

interface WikiSection {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-wiki',
  imports: [],
  templateUrl: './wiki.html',
  styleUrl: './wiki.scss',
})
export class Wiki {
  protected readonly sections: WikiSection[] = [
    {
      icon: '⚡',
      title: 'Skills & Builds',
      description:
        'Draft skills every run and discover synergies. Guides on each skill, best-in-slot combos and how to scale into the endless waves.',
    },
    {
      icon: '💎',
      title: 'Gear & Loot',
      description:
        'Everything about weapons, armor and permanent loot: how upgrading works, merging recipes and when it pays to sell.',
    },
    {
      icon: '🐺',
      title: 'Enemies',
      description:
        'Profiles for every horde type and boss, with behavior notes and tips for countering them as wave difficulty scales.',
    },
  ];
}
