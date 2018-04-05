import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Main Chart Configurations
  dataSource_main;
  main_id = 'chart1';
  main_width = 800;
  main_height = 450;
  main_type = 'column3d';

  // Sub Chart Configurations
  dataSource_sub;
  sub_id = 'chart2';
  sub_width = 800;
  sub_height = 450;
  sub_type = 'doughnut3D';

    // Main Chart Configurations
    dataSource_main2;
    main_id2 = 'chart3';
    main_width2 = 800;
    main_height2 = 450;
    main_type2 = 'column3d';

    // Sub Chart Configurations
    dataSource_sub2;
    sub_id2 = 'chart4';
    sub_width2 = 800;
    sub_height2 = 450;
    sub_type2 = 'doughnut3D';

  constructor() {
    this.dataSource_main = {
        'chart': {
            'caption': 'Revenue',
            'subCaption': 'Revenue Across All Locations',
            'numberprefix': '$',
            'theme': 'ocean'
        },
        'data': [
            {
                'label': 'India',
                'value': String(400000 + Math.round(Math.random() * 400000)),
                'link': 'India'
            },
            {
                'label': 'Vietnam',
                'value': String(400000 + Math.round(Math.random() * 400000)),
                'link': 'Vietnam'
            },
            {
                'label': 'Sri Lanka',
                'value': String(400000 + Math.round(Math.random() * 400000)),
                'link': 'Sri%20Lanka'
            },
            {
                'label': 'Philipines',
                'value': String(400000 + Math.round(Math.random() * 400000)),
                'link': 'Philipines'
            },
            {
                'label': 'Bangaladesh',
                'value': String(400000 + Math.round(Math.random() * 400000)),
                'link': 'Bangaladesh'
            }
        ]
    };

    this.dataSource_sub = {
      'chart': {
        'caption': 'Revenue',
        'subCaption': 'Revenue Across All Sectorss',
          'numberprefix': '$',
          'theme': 'ocean'
      },
      'data': [
          {
              'label': 'Air Frieght',
              'value': String(400000 + Math.round(Math.random() * 400000))
          },
          {
              'label': 'Sea Freight',
              'value': String(400000 + Math.round(Math.random() * 400000))
          },
          {
              'label': 'Inland Logistics',
              'value': String(400000 + Math.round(Math.random() * 400000))
          },
      ]
  };

  this.dataSource_main2 = {
    'chart': {
        'caption': 'Gross Profit',
        'subCaption': 'GP Accross all Sectors',
        'numbersuffix': '%',
        'theme': 'ocean'
    },
    'data': [
        {
            'label': 'India',
            'value': String(3 + Math.round(Math.random() * 8)),
            'link': 'India'
        },
        {
            'label': 'Vietnam',
            'value': String(3 + Math.round(Math.random() * 8)),
            'link': 'Vietnam'
        },
        {
            'label': 'Sri Lanka',
            'value': String(3 + Math.round(Math.random() * 8)),
            'link': 'Sri%20Lanka'
        },
        {
            'label': 'Philipines',
            'value': String(3 + Math.round(Math.random() * 8)),
            'link': 'Philipines'
        },
        {
            'label': 'Bangaladesh',
            'value': String(3 + Math.round(Math.random() * 8)),
            'link': 'Bangaladesh'
        }
    ]
};

this.dataSource_sub2 = {
  'chart': {
    'caption': 'Gross Profit',
    'subCaption': 'GP Across all Sectors',
    'numbersuffix': '%',
    'theme': 'ocean'
  },
  'data': [
      {
          'label': 'Air Frieght',
          'value': String(3 + Math.round(Math.random() * 8)),
      },
      {
          'label': 'Sea Freight',
          'value': String(3 + Math.round(Math.random() * 8))
      },
      {
          'label': 'Inland Logistics',
          'value': String(3 + Math.round(Math.random() * 8))
      },
  ]
};

  }

  ngOnInit() {
  }

}
