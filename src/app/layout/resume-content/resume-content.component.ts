import { Component, OnInit } from '@angular/core';

declare let $: any;
declare let WordCloud: any;

@Component({
  selector: 'app-resume-content',
  templateUrl: './resume-content.component.html',
  styleUrls: ['./resume-content.component.css']
})
export class ResumeContentComponent implements OnInit {

  constructor() { }

  private removeWordCloud = false;

  private entries = [

    { label: 'AngularJs', url: 'https://angularjs.org/', target: '_top' },
    { label: 'GitHub', url: 'https://github.com/', target: '_top' },
    { label: 'Javascript', url: '', target: '_top' },
    { label: 'JAVA', url: 'http://gamua.com/starling/', target: '_top' },
    { label: 'JSP', url: 'http://jsperf.com/', target: '_top' },
    { label: 'JAVA Enterprise Edition', url: 'http://foundation.zurb.com/', target: '_top' },
    { label: 'CSS3', url: 'http://createjs.com/', target: '_top' },
    { label: 'HTML5', url: 'http://julian.com/research/velocity/', target: '_top' },
    { label: 'Spring', url: 'https://greensock.com/docs/#/HTML5/GSAP/TweenLite/', target: '_top' },
    { label: 'jQuery', url: 'https://jquery.com/', target: '_top' },
    { label: 'Angular2/4', url: 'http://www.jqueryrain.com/', target: '_top' },
    { label: 'Bootstrap', url: 'http://jquery-plugins.net/', target: '_top' },
    { label: 'Salesforce', url: 'http://jquery-plugins.net/', target: '_top' },
    { label: 'Typescript', url: 'http://jquery-plugins.net/', target: '_top' },
    { label: 'Responsive', url: 'http://jquery-plugins.net/', target: '_top' },
    { label: 'WEB DEVELOPMENT', url: 'http://jquery-plugins.net/', target: '_top' },
    { label: 'LESS', url: 'http://jquery-plugins.net/', target: '_top' },
    { label: 'Styling', url: 'http://jquery-plugins.net/', target: '_top' },
    { label: 'Layout', url: 'http://jquery-plugins.net/', target: '_top' },
    { label: 'jQuery Plugins', url: 'http://jquery-plugins.net/', target: '_top' },
    { label: 'Highcharts', url: 'http://jquery-plugins.net/', target: '_top' },
    { label: 'AG grid', url: 'http://jquery-plugins.net/', target: '_top' }

  ];

  private settings = {

    entries: this.entries,
    width: 480,
    height: 300,
    radius: '70%',
    radiusMin: 130,
    bgDraw: false,
    bgColor: 'steelblue',
    opacityOver: 1.00,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 1000,
    speed: 1,
    fontFamily: 'Roboto',
    fontSize: '20',
    fontColor: 'black',
    fontWeight: 'bold', // bold
    fontStyle: 'italic', // italic
    fontStretch: 'ultra-expanded', // wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true,
    tooltipFontFamily: 'Roboto',
    tooltipFontSize: '11',
    tooltipFontColor: 'black',
    tooltipFontWeight: 'normal', // bold
    tooltipFontStyle: 'normal', // italic
    tooltipFontStretch: 'normal', // wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    tooltipFontToUpperCase: false,
    tooltipTextAnchor: 'left',
    tooltipDiffX: 0,
    tooltipDiffY: 10

  };

  public expertise = [
    {
      'name': 'Javascript',
      'skill': 70
    },
    {
      'name': 'AngularJS',
      'skill': 60
    },
    {
      'name': 'Angular',
      'skill': 70
    },
    {
      'name': 'HTML/CSS',
      'skill': 80
    },
    {
      'name': 'JAVA',
      'skill': 40
    }
  ];

  private list = [['Web Technologies', 20], ['HTML', 16], ['AngularJs', 12], ['CSS', 14], ['JavaScript', 13],
  ['Document Object Model', 12], ['GitHub', 10], ['Bootstrap', 12], ['XMLHttpRequest', 8],
  ['LESS', 12], ['JSON.parse()', 9], ['Typescript', 9], ['transition', 9], ['animation', 9], ['Responsive', 7], ['@font-face', 7], ['Highcharts', 7]];

  private options = {
    list: this.list,
    gridSize: 18,
    weightFactor: 3,
    fontFamily: 'Roboto, cursive, sans-serif',
    color: 'steelblue',
    click: function (item) {
      // alert(item[0] + ': ' + item[1]);
    },
    backgroundColor: '#efefef'
  };

  ngOnInit() {
    WordCloud(document.getElementById('skillCloud'), this.options);
  }

}
