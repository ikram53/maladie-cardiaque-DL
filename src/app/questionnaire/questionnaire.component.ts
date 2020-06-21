import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import * as tf from "@tensorflow/tfjs";
import Swal from 'sweetalert2';

import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: "app-questionnaire",
  templateUrl: "./questionnaire.component.html",
  styleUrls: ["./questionnaire.component.css"],
})
export class QuestionnaireComponent implements OnInit {

  
  model: tf.LayersModel;
  predictions: any;
  input:Array<number>
  result:number;


  public sexe :number;
  public age: number;
  public cp :number;
  public trestbps: number;
  public chol: number;
  public fbs:number;
  public restecg :number;
  public thalach: number;
  public exang :number;
  public oldpeak: number;
  public slope:number ;
  public ca:number;
  public thal:number;

  constructor(public http: HttpClient) { }


  public ngOnInit(): void {
  
 // this.loadModel()
  
  
   
  }

 /* public onSave() {
    this.input=new Array(this.age,Math.floor(this.sexe),Math.floor(this.cp),Math.floor(this.trestbps),
      this.chol,Math.floor(this.fbs),Math.floor(this.restecg),Math.floor(this.thalach),
      Math.floor(this.exang),this.oldpeak,Math.floor(this.slope),Math.floor(this.ca),Math.floor(this.thal));
      console.log(this.input)
    this.loadModel(this.input);
  }*/
  public onSave(){
   
    this.input=new Array(this.age,Number(this.sexe),Number(this.cp),this.trestbps,
    this.chol,Number(this.fbs),Number(this.restecg),this.thalach,
   Number(this.exang),this.oldpeak,Number(this.slope),Number(this.ca),Number(this.thal));
    console.log(this.input)
  this.loadModel(this.input);
  }

  public resultMessage(result){
    console.log("resultat")
    console.log(result)
    let res;
    if(result == 1){
      res='Sur la base de vos réponses , il apparait que vous êtes malade . Vous devriez consulter vos docteur en urgent';
      
    }
    else{
      res='Sur la base de vos réponses , il apparait que vous étes en bonne santé . '
    }
    Swal.fire({
      title: 'Resultat du test ',
      text:res,
      width: 600,
      padding: '3em',
      background: '#fff',
      confirmButtonColor: '#FF8080',
      confirmButtonText: "Quitter",
      backdrop: `
      rgba(51,51,51,0.4)
      `
    })
    .then(function (result) {
      if (result.value) {
        
       window.location.href="/acceuil";
        
         
      }})
    }
  
    /*if( result == 1){

      Swal.fire({
        title: 'Resultat du test ',
        text:'Sur la base de vos réponses , il apparait que vous malade . Vous devriez consulter vos docteur en urgent ',
        width: 600,
        padding: '3em',
        background: '#fff',
        confirmButtonColor: '#FF8080',
        confirmButtonText: "Quitter",
        backdrop: `
        rgba(51,51,51,0.4)
        `
      })
      
    }
    else{
      
  
     Swal.fire({
        
        title: 'Resultat du test',
        text:'Sur la base de vos réponses , il apparait que vous étes en bonne santé . ',
        width: 600,
        padding: '3em',
        background: '#fff ',
        confirmButtonColor: '#FF8080',
        confirmButtonText: "Quitter",
        backdrop: `
        rgba(51,51,51,0.4)
        `
      })
      .then(function (result) {
        if (result.value) {
          
         window.location.href="/acceuil"
          
           
        }
    })
      
     
     

    }*/
  
 /* loadModel(data){
    this.http.get<tf.LayersModel>('assets/modelAncien/model.json')
    .subscribe(resp =>{
      this.model=resp;
      console.log(this.model)
      this.predictions=this.model.predict(tf.tensor(data).reshape([1, 13]));
      console.log(Math.floor(this.predictions.dataSync()[0]))
      this.resultMessage(this.predictions)
    })
  }*/


loadModel(data){
 
tf.loadLayersModel('assets/modelPrediction/model.json').then(model => {
 console.log(model)
 
  this.predictions=model.predict(tf.tensor(data).reshape([1, 13]));

  console.log((Math.round(this.predictions.dataSync()[0])));
  console.log(this.predictions.dataSync()[0]);
 this.result=Math.round(this.predictions.dataSync()[0]);
  this.resultMessage(this.result)
   
  
});
}

  public numericOnly(event): boolean { // restrict e,+,-,E characters in  input type number

    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode === 101 || charCode === 69 || charCode === 45 || charCode === 43) {
      return false;
    }
    return true;

  }

}
