import * as CryptoJS from 'crypto-js';
import * as toastr from 'toastr';
import Swal from 'sweetalert2';

import * as moment from 'moment';
import 'moment/locale/es';

export default class Tools {
    constructor() {
        
    }

    getOperatingSystem() :string {
        // let OS = 'Unknown';
        // if (window.navigator.userAgent.indexOf('Windows NT 10.0')!= -1) OS='Windows 10';
        // if (window.navigator.userAgent.indexOf('Windows NT 6.2') != -1) OS='Windows 8';
        // if (window.navigator.userAgent.indexOf('Windows NT 6.1') != -1) OS='Windows 7';
        // if (window.navigator.userAgent.indexOf('Windows NT 6.0') != -1) OS='Windows Vista';
        // if (window.navigator.userAgent.indexOf('Windows NT 5.1') != -1) OS='Windows XP';
        // if (window.navigator.userAgent.indexOf('Windows NT 5.0') != -1) OS='Windows 2000';
        // if (window.navigator.userAgent.indexOf('Mac')            != -1) OS='Mac/iOS';
        // if (window.navigator.userAgent.indexOf('X11')            != -1) OS='UNIX';
        // if (window.navigator.userAgent.indexOf('Linux')          != -1) OS='Linux';
        
        let OS = window.navigator.userAgent;
        return OS.toUpperCase();
    }

    cryptrData(data) {
        let encrypt_data = CryptoJS.AES.encrypt(data, 'XVkIjoid3d3LmV4YW1wbGUuY29tIiwic3Vi').toString();
        return encrypt_data;
    }

    decryptrData(data) {
        let decrypt_data = CryptoJS.AES.decrypt(data.toString(), 'XVkIjoid3d3LmV4YW1wbGUuY29tIiwic3Vi');
        let decrypt_tostring = decrypt_data.toString(CryptoJS.enc.Utf8);
        return decrypt_tostring;
    }

    showToastr(title, message, type, time = 1500) {
        toastr.options.closeButton = true;
        toastr.options.positionClass = 'toast-top-center';
        toastr.options.timeOut = time;
        switch (type) {
            case 'success':
                toastr.success(title, message);
                break;
            case 'error':
                toastr.error(title, message);
                break;
            case 'warning':
                toastr.warning(title, message);
                break;
        }
    }

    showAlert (title, message, type, btext = 'Ok') {
        Swal.fire({
            title: title,
            icon: type,
            html: message,
            showCloseButton: true,
            showCancelButton: false,
            confirmButtonText: btext
        }).then((result) => {
            // if(  localStorage.getItem('inscrito') ) {
            //     let _ins = cryptr.decrypt(  localStorage.getItem('inscrito') );
            //     if( _ins == 'si' ) {
            //         localStorage.setItem('inscrito', Tools.cryptrData(''));
            //         window.location.href = '/';
            //     }
            //     else{
            //         localStorage.setItem('inscrito', Tools.cryptrData(''));
            //     }
            // }
        });
    }

    listToTree(arr:any = null) {
        var tree = [],
            mappedArr = {},
            arrElem,
            mappedElem;

        // First map the nodes of the array to an object -> create a hash table.
        for(var i = 0, len = arr.length; i < len; i++) {
            arrElem = arr[i];
            mappedArr[arrElem.id] = arrElem;
            mappedArr[arrElem.id]['key'] = arrElem.id;
            mappedArr[arrElem.id]['title'] = arrElem.label;
            mappedArr[arrElem.id]['children'] = [];
        }

        for (var id in mappedArr) {
            if (mappedArr.hasOwnProperty(id)) {
                mappedElem = mappedArr[id];
                // If the element is not at the root level, add it to its parent array of children.
                if (mappedElem.parentid) {
                    mappedArr[mappedElem['parent_id']]['children'].push(mappedElem);
                }
                // If the element is at the root level, add it to first level elements array.
                else {
                    tree.push(mappedElem);
                }
            }
        }
        return tree;
    }

    convertDate(value, type = 'DD/MM/YYYY') {
        let _val = moment(value, 'YYYY-MM-DD');
        value = moment(_val, 'DD/MM/YYYY');
        return value.format(type);
    }

    checkExtensionFiles(sFileName:string, from:string = 'SU') {
        var _validFileExtensions = [];
        if(from == 'SU') {
            _validFileExtensions = ['.pdf', '.docx', '.xlsx', '.png', '.PNG', '.jpg', '.JPG', '.mp4'];
        }
        else if(from == 'IR') {
            _validFileExtensions = ['.png', '.PNG', '.jpg', '.JPG', '.jpeg', '.JPEG'];
        }

        var blnValid = false;
        for (var j = 0; j < _validFileExtensions.length; j++) {
            var sCurExtension = _validFileExtensions[j];
            if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                blnValid = true;
                break;
            }
        }

        return blnValid;
    }

    checkMimeType(extension) {
        let mimetypes = {
            pdf: 'application/pdf',
            png: 'image/png',
            jpg: 'image/jpeg',
            gif: 'image/gif',
            svg: 'image/svg+xml',
            docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            xls: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        };

        return mimetypes[extension];
    }

    validateFileSize(size, from:string = 'SU') {
        let sValid = false;
        var FileSize = size / 1024 / 1024; // in MB

        if( from == 'SU' ) {
            if (FileSize > 10) {
                sValid = false
            } else {
                sValid = true;
            }
        }
        else if( from == 'IR' ) {
            if (FileSize > 2) {
                sValid = false
            } else {
                sValid = true;
            }
        }

        return sValid;
    }

    getHostname() {
        return window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
    }

    showPreloader() {
        if( document.getElementById('preloader-page') ) {
            document.getElementById('preloader-page').style.display = 'flex';
        }
    }

    hidePreloader() {
        setTimeout(() => {
            document.getElementById('preloader-page').style.display = 'none';
        }, 1000);
    }

    validateEmail(value) {
        let response = false;
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let validate = regex.test(value);
        if( validate ) {
            response = true;
        }

        return response;
    }
}