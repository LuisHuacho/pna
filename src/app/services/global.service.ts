import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ConfigApi } from '../services/config.api';

import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  configApi:any = new ConfigApi();

  constructor(
    private http: HttpClient
  ) { }

  getIpJson() {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.configApi.getEndpoint().ipjson)
        .toPromise()
        .then(
          (res:any) => {
            resolve(res);
          }
        )
        .catch(
          (err:any) => {
            reject(err);
          }
        );
    });
    return promise;
  }

  generatePdf(action = 'open', data, element) {
    
    switch (action) {
      case 'open': 
        html2canvas(element)
        .then(function(canvas) {
          var data = canvas.toDataURL();
          var imgWidth = 500;
          var pageHeight = 842;
          var imgHeight = canvas.height * imgWidth / canvas.width;
          var heightLeft = imgHeight;

          var docDefinition = {
              content: [{
                  image: data,
                  width: imgWidth,
                  height: imgHeight
              }]
          };
          pdfMake.createPdf(docDefinition).open();
        });
        break;

      case 'print': 
        html2canvas(element)
        .then(function(canvas) {
          var data = canvas.toDataURL();
          var docDefinition = {
              content: [{
                  image: data,
                  width: 500,
              }]
          };
          pdfMake.createPdf(docDefinition).print();
        });
        break;

      case 'download':
        html2canvas(element)
        .then(function(canvas) {
          var data = canvas.toDataURL();
          var docDefinition = {
              content: [{
                  image: data,
                  width: 500,
              }]
          };
          pdfMake.createPdf(docDefinition).download();
        });
        break;

      default: 
        html2canvas(element)
        .then(function(canvas) {
          var data = canvas.toDataURL();
          var docDefinition = {
              content: [{
                  image: data,
                  width: 500,
              }]
          };
          pdfMake.createPdf(docDefinition).open();
        });
        break;
    }
  }
}
