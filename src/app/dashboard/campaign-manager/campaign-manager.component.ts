import { Component, OnInit,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-campaign-manager',
  templateUrl: './campaign-manager.component.html',
  styleUrls: ['./campaign-manager.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class CampaignManagerComponent implements OnInit {

  constructor() { }

  upcoming_value : string = '';
  past_value : string = '';
  live_value : string = '';

  text_value :string ;

  ngOnInit(): void {
    document.getElementById("defaultOpen").click();
  }

  opencampaign(evt, value) {
    
    if(value === "upcoming"){
      this.text_value = "upcoming"
      console.log(this.upcoming_value);
    }else if(value === "past"){
      this.text_value = "past"
    }else if(value === "live"){
      this.text_value = "live"
    }else{
      console.log(value)
    }

    

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(value).style.display = "block";
    evt.currentTarget.className += " active";
  }

}
