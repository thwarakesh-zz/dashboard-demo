import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-bar3d',
  templateUrl: './chart-bar3d.component.html',
  styleUrls: ['./chart-bar3d.component.scss']
})
export class ChartBar3dComponent implements OnInit {

  @Input() id = 'chart1';
  @Input() width = 800;
  @Input() height = 450;
  @Input() type = 'column3d';
  @Input() dataFormat = 'json';
  @Input() dataSource: any;
  constructor() {}

  ngOnInit() {
  }

}
