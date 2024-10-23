import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CharacterSelectComponent implements OnInit {
  public activeCharacter = 'Rengoku';
  public characters = [
    { name: 'Rengoku', image: 'assets/icons/rengoku.svg' },
    { name: 'Tokito', image: 'assets/icons/tokito.svg' },
    { name: 'Uzui', image: 'assets/icons/uzui.svg' },
    { name: 'Sanemi', image: 'assets/icons/sanemi.svg' },
    { name: 'Mitsuri', image: 'assets/icons/mitsuri.svg' },
    { name: 'Shinobu', image: 'assets/icons/shinobu.svg' },
    { name: 'Gyomei', image: 'assets/icons/gyomei.svg' },
    { name: 'Tomioka', image: 'assets/icons/tomioka.svg' },
    { name: 'Obanai', image: 'assets/icons/obanai.svg' },
  ];

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['characters/rengoku']);
  }

  public selectCharacter(character: string): void {
    this.activeCharacter = character;
    this.router.navigate([`characters/${character.toLowerCase()}`]);
  }
}
