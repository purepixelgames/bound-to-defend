import { Component } from '@angular/core';

interface DevlogEntry {
  version: string;
  date: string;
  title: string;
  body: string;
}

interface DevlogLine {
  text: string;
  heading: boolean;
}

@Component({
  selector: 'app-devlogs',
  imports: [],
  templateUrl: './devlogs.html',
  styleUrl: './devlogs.scss',
})
export class Devlogs {
  protected readonly entries: DevlogEntry[] = [
    {
      version: 'v0.1.1',
      date: '2026-AUG-10',
      title: 'Live on itch.io',
      body: `Window and linux download available!
6 language localization (still some missing keys)
Mine unlocked 
alchemist unlocked
Auto looter companions unlocked 
1 NEW starting class (total 5 classes) 
16+ unique gear (total unique gear exceeds 136 now) 
60+ different in game skill/stat upgrade choices 
Gear Upgrade system 
Gear Gacha pull system
Currency storage per wave interest added
Wave early start system 
Mid game save system 
Cosmetic equip system (permanent inventory)
End of season leaderboard permanent rewards 
Merge system revamp 
Hud revamp 
Many skill rebalancing 
More additions not even mentioned`,
    },
    {
      version: 'v0.2',
      date: 'TBA',
      title: "What's Coming",
      body: `Full localization overhaul 
Boss waves comes with easy/medium difficulty choice 
Manual/auto stage progression 
Button placeholder swops with npc sprites 
Leaderboard view from within the stage
Additional bosses 
Per run quests (hunting/crafting)rewards will be(skill points)`,
    },
    {
      version: 'v0.0.6',
      date: '2026-SEP-13',
      title: '',
      body: `--------UPDATE NODES----------

*Additional map added stage 2 with its own real time global leaderboard 

*persistant save alongside gear

*auto attack targetting assist mode (auto toggle)

*inventory gear assistance 

*inventory expanded filters  

*item locking and unlocking

*more enemies 

*summons now inherit knock back from player stats 

*summon upgrade now include attack range 

*poison damage life time extended and damage ticks faster 

*max mine traps reduced from 150 to 100and hard cap is 110

*merging gear costs has been largely increased, late gave this becomes trivial`,
    },
  ];

  protected bodyLines(body: string): DevlogLine[] {
    return body
      .split('\n')
      .map((raw) => raw.trim())
      .filter((line) => line.length > 0)
      .map((line) => {
        const heading = /^-{3,}.+-{3,}$/.test(line);
        return {
          text: heading ? line.replace(/^-+|-+$/g, '').trim() : line.replace(/^[-*]\s*/, ''),
          heading,
        };
      });
  }
}
