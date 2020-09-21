import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DEV_URLS } from '../../../environments/environment';
// import {adfa} from '../../../assets/json/'
// import {}
@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css']
})
export class TabHeaderComponent implements OnInit, OnChanges {

  constructor(private http : HttpClient) { }
  @Input() type :string ;
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  
  data_dict : any = []
  date_difference : number;
  price_dict = {}
  game_name : string = '';
  game_count : string = ''; 


  ngOnInit(): void {
    
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

preview() {
  // Show preview 
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();      
  reader.readAsDataURL(this.fileData); 
  reader.onload = (_event) => { 
    this.previewUrl = reader.result; 
  }
}

onSubmit() {
  const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post('url/to/your/api', formData)
      .subscribe(res => {
        console.log(res);
        this.uploadedFilePath = res.data.filePath;
        alert('SUCCESS !!');
      })
}

startUpload(){
  document.getElementById('getFile').click();
}

  ngOnChanges(): void{
    // console.log(this.type);
    if(this.type==="upcoming"){

    }else if(this.type === "live"){

    }else if(this.type === "past"){

    }
  }

  ShowDatePicker():void{
    console.log("dwcads")
    
    document.getElementById("birthday").focus();
    
  }


  

  getCampaignList(value : number){
    // console.log(value);
    if(value === 0){
      this.http.get('../../../assets/json/upcoming_campaigns.json').subscribe(response =>{
        // console.log(response);
        this.data_dict = response['data'];
      })
    }else if(value == 1){
      this.http.get('../../../assets/json/live_campaigns.json').subscribe(response =>{
        // console.log(response);
        this.data_dict = response['data'];
      })
    }else if(value == 2){
      this.http.get('../../../assets/json/past_campaigns.json').subscribe(response =>{
        // console.log(response);
        this.data_dict = response['data'];
      })
    }
  }

  

  dayDifferenceCounter(currentDate){
    // console.log(currentDate);
    var date1 = new Date(currentDate); 
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var date2 =new Date(mm + '/' + dd + '/' + yyyy);
    // console.log("date1",date1, "date2", date2)
    if(date1.getTime() < date2.getTime()){
      var Difference_In_Time = date2.getTime() - date1.getTime();  
    }else{
      var Difference_In_Time = date1.getTime() - date2.getTime(); 
    }
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
    // console.log(Difference_In_Days);
    this.date_difference = Difference_In_Days
    return Difference_In_Days
  }

  passDataToModal(value, type){
    console.log(value, type)

    if(type === 'upcoming'){
      this.http.get('../../../assets/json/upcoming_campaigns.json').subscribe(response =>{
        this.price_dict = "";
        this.data_dict = response['data'];
        for(let data of response['data']){
          if(data['id'] === value){
            console.log(data['price']);
            this.game_name = data['campaign_name'];
            this.game_count = data['county'];
            this.price_dict = data['price']
          }
        }
      })
    }else if(type === 'live'){
      this.http.get('../../../assets/json/live_campaigns.json').subscribe(response =>{
        this.price_dict = "";
        this.data_dict = response['data'];
        for(let data of response['data']){
          if(data['id'] === value){
            console.log(data['price']);
            this.game_name = data['campaign_name'];
            this.game_count = data['county'];
            this.price_dict = data['price']
          }
        }
      })
    }else if(type === 'past'){
      this.http.get('../../../assets/json/past_campaigns.json').subscribe(response =>{
        this.price_dict = "";
        this.data_dict = response['data'];
        for(let data of response['data']){
          if(data['id'] === value){
            console.log(data['price']);
            this.game_name = data['campaign_name'];
            this.game_count = data['county'];
            this.price_dict = data['price']
          }
        }
      })
    }
    
  }
  

  

}

