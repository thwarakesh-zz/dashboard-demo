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
  sub_type = 'column3d';

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
          'caption': 'Harrys SuperMart',
          'subCaption': 'Top 5 stores in last month by revenue',
          'numberprefix': '$',
          'theme': 'ocean'
      },
      'data': [
          {
              'label': 'Bakersfield Central',
              'value': '880000'
          },
          {
              'label': 'Garden Groove harbour',
              'value': '730000'
          },
          {
              'label': 'Los Angeles Topanga',
              'value': '590000'
          },
          {
              'label': 'Compton-Rancho Dom',
              'value': '520000'
          },
          {
              'label': 'Daly City Serramonte',
              'value': '330000'
          }
      ]
  };
  }

  ngOnInit() {
  }

}
