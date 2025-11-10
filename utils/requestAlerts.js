import store from '@/store'
import { MessageBox } from 'element-ui';


export function errorsAlert(error) {
  let validateErrors = getValidateErrors(error);
  let errorMessage = error.data && error.data.code?getMessage(error.data.code):null;
  if(error.status == 422 && validateErrors){
    messageBox(validateErrors)
  }else if(errorMessage){
    messageBox(errorMessage)
  } else if(error.data && error.data.message){
    messageBox(error.data.message)
  } else {
    messageBox(error.statusText)
  }
}

export function netwokErrorAlert(error) {
  if(error && (error.message == 'Network Error' || error.message == 'timeout of 60000ms exceeded')){
    messageBox(`No connection to the server, please check your internet connection`)
  }
}

function messageBox(message){
  MessageBox.alert(message+`<br><div class='fs14 mt-2'>[${(new Date).toLocaleString()}]<div>`, 'Warning', {
    customClass: "ErrorAlertBox",
    confirmButtonText: 'Close',
    confirmButtonClass: "btn btn-primary btn-2",
    // type: 'error',
    dangerouslyUseHTMLString: true,
    duration: 0,
    center: true,
    closeOnPressEscape: true,
    closeOnClickModal: true,
  });
}

function getMessage(code) {
  // let error = getErrorByCode(code);
  // if(error){
  //   switch ('oz') {
  //     case 'ru':
  //       return error['name_ru']
  //     case 'oz':
  //       return error['name_oz']
  //     default:
  //       return error['name_uz']
  //   }
  // }
  return null;
}

function getErrorByCode(code){
  let apiErrors = store.getters['classifiers/ERRORS'];
  if (apiErrors && apiErrors.length) {
    return apiErrors.find(err => err.code == code);
  }
  return null;
}

function getValidateErrors(error) {
  if (error.status == 422 && error.data && error.data.errors) {
    let message = "<br/> - ";
    Object.keys(error.data.errors).forEach(filed => {
      message += error.data.errors[filed].join(' <br/> - ');
    });
    return message;
  }
  return null;
}