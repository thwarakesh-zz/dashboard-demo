import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-bar3d',
  templateUrl: './chart-bar3d.component.html',
  styleUrls: ['./chart-bar3d.component.scss']
})
export class ChartBar3dComponent implements OnInit {

  id = 'chart1';
  width = 800;
  height = 450;
  type = 'column3d';
  dataFormat = 'json';
  dataSource;
  title = 'Angular4 FusionCharts Sample';
  constructor() {
    this.dataSource = {
        'chart': {
            'caption': 'Harrys SuperMart',
            'subCaption': 'Top 5 stores in last month by revenue',
            'numberprefix': '$',
            'theme': 'fint'
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
