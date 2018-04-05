import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  sub_hidden = true;
  deep_hidden = true;

  menu_items = [
    {
      name: 'Overall',
      icon: 'home',
    }, {
      name: 'Regional',
      icon: 'map-marker-alt',
      sub_items: [
        {
          name: 'India',
          deep: [
            {
              name: 'Central India'
            }, {
              name: 'East India'
            }, {
              name: 'North India'
            }, {
              name: 'Northeast India'
            }, {
              name: 'South India'
            }, {
              name: 'Western India'
            }
          ]
        }, {
          name: 'Sri Lanka'
        }, {
          name: 'Bangaladesh',
        }, {
          name: 'Philipines'
        }, {
          name: 'Vietnam'
        }
      ]
    }, {
      name: 'Customer',
      icon: 'user',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleSub() {
    this.sub_hidden = this.sub_hidden ? false : true;
  }

  toggleDeep() {
    this.deep_hidden = this.deep_hidden ? false : true;
    console.log('toggled Deep!');
  }

}
