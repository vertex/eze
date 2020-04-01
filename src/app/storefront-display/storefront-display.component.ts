import { Component, OnInit, Input } from '@angular/core';
import { StorefrontUnfinished } from '../storefront-unfinished'

@Component({
  selector: 'app-storefront-display',
  templateUrl: './storefront-display.component.html',
  styleUrls: ['./storefront-display.component.scss']
})
export class StorefrontDisplayComponent implements OnInit {
  @Input() storefront: StorefrontUnfinished;

  constructor() { }

  ngOnInit(): void {
  }

}
