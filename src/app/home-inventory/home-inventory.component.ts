import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-inventory',
  templateUrl: './home-inventory.component.html',
  styleUrls: ['./home-inventory.component.css']
})
export class HomeInventoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      const trigger = $('.hamburger');
      const  overlay = $('.overlay');
      let  isClosed = false;

      trigger.click(function () {
        hamburger_cross();
      });

      function hamburger_cross() {

        if (isClosed === true) {
          // overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {
          // overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
      }

      $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
      });
    });
  }

}
