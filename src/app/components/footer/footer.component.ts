import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {


  
  slogan : string;
  tel : string;
  cellphone : string;
  email : string;
  year : string;
  company : string;

  social_media = []
  social_medi_data = {
    label : "",
    icon : "",
    link : "",
  }



  constructor() { }

  ngOnInit() {
    this.cellphone = "+33-34-4938-50s";
    this.slogan = "Me la pelan la verga todos!!!";
    this.tel = "*****";
    this.email = "diegoa.campaneron@gmail.com";
    this.company = "Diego Alejandro Campanero Negrete";
    this.year = new Date().getFullYear()+"";

    let social_medi_data = {
      label : "",
      icon : "",
      link : "",
    }
    /*
    social_medi_data.label = "Instragram";
    social_medi_data.link = "#";
    social_medi_data.icon = "fab fa-instagram icon-btn";//Instagram 
    this.social_media.push(social_medi_data);
    /*/////
    social_medi_data = {
      label : "",
      icon : "",
      link : "",
    }
    social_medi_data.label = "Github";
    social_medi_data.link = "#";
    social_medi_data.icon = "fab fa-github icon-btn";//Github 
    this.social_media.push(social_medi_data);
    ///////
    social_medi_data = {
      label : "",
      icon : "",
      link : "",
    }
    social_medi_data.label = "Linkedin";
    social_medi_data.link = "#";
    social_medi_data.icon = "fab fa-linkedin icon-btn";//Linkedin 
    this.social_media.push(social_medi_data);
    ////////
    social_medi_data = {
      label : "",
      icon : "",
      link : "",
    }
    social_medi_data.label = "Google +";
    social_medi_data.link = "#";
    social_medi_data.icon = "fab fa-google-plus icon-btn";//Instagram 
    this.social_media.push(social_medi_data);
    
  }

  cleanJson(){
    this.social_medi_data.label = "";
    this.social_medi_data.link = "";
    this.social_medi_data.icon = "";
  }



}

export interface Social_medi_data {
  label : string,
  icon : string,
  link : string
}