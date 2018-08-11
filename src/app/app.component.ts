import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
ngOnInit(){
  $('li').removeClass();

  $('.navbar-nav > li > a').click(function() {
    $('li').removeClass();
    $(this).parent().addClass('active');
});

$('.navbar-nav2 > li > a').click(function() {
  $('li').removeClass();
  $(this).parent().addClass('active2');
});
}
 


}
