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
                'value': '880000'
            },
            {
                'label': 'Vietnam',
                'value': '730000'
            },
            {
                'label': 'Sri Lanka',
                'value': '590000'
            },
            {
                'label': 'Philipines',
                'value': '520000'
            },
            {
                'label': 'Bangaladesh',
                'value': '330000'
            }
        ]
    };

    this.dataSource_sub = {
      'chart': {
        'caption': 'Revenue',
        'subCaption': 'Revenue Across All Locations',
          'numberprefix': '$',
          'theme': 'ocean'
      },
      'data': [
          {
              'label': 'Air Frieght',
              'value': '880000'
          },
          {
              'label': 'Sea Freight',
              'value': '730000'
          },
          {
              'label': 'Inland Logistics',
              'value': '590000'
          },
      ]
  };

  this.dataSource_main2 = {
    'chart': {
        'caption': 'Gross Profit',
        'subCaption': 'GP Accross all sectors',
        'numbersuffix': '%',
        'theme': 'ocean'
    },
    'data': [
        {
            'label': 'India',
            'value': '6'
        },
        {
            'label': 'Vietnam',
            'value': '7'
        },
        {
            'label': 'Sri Lanka',
            'value': '10'
        },
        {
            'label': 'Philipines',
            'value': '8'
        },
        {
            'label': 'Bangaladesh',
            'value': '3'
        }
    ]
};

this.dataSource_sub2 = {
  'chart': {
    'caption': 'Gross Profit',
    'subCaption': 'GP Across all Locations',
    'numbersuffix': '%',
    'theme': 'ocean'
  },
  'data': [
      {
          'label': 'Air Frieght',
          'value': '9',
          'link': 'www.google.com'
      },
      {
          'label': 'Sea Freight',
          'value': '8'
      },
      {
          'label': 'Inland Logistics',
          'value': '16'
      },
  ]
};

  }

  ngOnInit() {
  }

}
