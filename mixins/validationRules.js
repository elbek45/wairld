export default {
  data() {
    var ruleLength = (rule, value, callback) => {
      if (String(value).length != rule.number) {
        callback(new Error(`Количество символов должно быть ${rule.textNumber}`));
      } else {
        callback();
      }
    };
    var ruleMinLength = (rule, value, callback) => {
      if (String(value).length < rule.number) {
        callback(new Error(`Количество символов должно быть минимум ${rule.number}`));
      } else {
        callback();
      }
    };
    var ruleMaxLength = (rule, value, callback) => {
      if (String(value).length > rule.number) {
        callback(new Error(`Количество символов должно быть максимум ${rule.number}`));
      } else {
        callback();
      }
    };
    var compare = (rule, value, callback) => {
      if (value != rule.pass) {
        callback(new Error(`Please enter your password again`));
      } else {
        callback();
      }
    };
    var required = (rule, value, callback) => {
      if(!value){
        callback(new Error(rule.msg));
      } else {
        callback();
      }
    };
    var requiredNumber = (rule, value, callback) => {
      if(!Number(value) > 0){
        callback(new Error(rule.msg));
      } else {
        callback();
      }
    };
    var requiredGender = (rule, value, callback) => {
      if(value === 0 || value === 1){
        callback();
      } else {
        callback(new Error(rule.msg));
      }
    };
    var requiredBool = (rule, value, callback) => {
      if(value === false || value === true){
        callback();
      } else {
        callback(new Error(rule.msg));
      }
    };
    var requiredRadio = (rule, value, callback) => {
      if(!value && !(typeof value == 'boolean')){
        callback(new Error(rule.msg));
      } else {
        callback();
      }
    };
    var requiredList = (rule, value, callback) => {
      if(!(value && value.length)){
        callback(new Error(rule.msg));
      } else {
        callback();
      }
    };
    var validURL = (str) => {
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(str);
    }
    var requiredUrl = (rule, value, callback) => {
      if(value && !validURL(value)){
        callback(new Error(rule.msg));
      } else {
        callback();
      }
    };
    var requiredIf = (rule, value, callback) => {
      if(!value && !rule.otherfield){
        callback(new Error(`The field is required`));
      } else {
        callback();
      }
    };
    var requiredIfEqual = (rule, value, callback) => {
      if(!rule.otherfield){
        callback(new Error(`The field is required`));
      }else if(rule.length < 150){
        callback(new Error(`Описание вакансии не может быть менее 150 символов`));
      } else {
        callback();
      }
    };
    var email = (rule, value, callback) => {
      if(!this.validateEmail(value)){
        callback(new Error(rule.msg));
      } else {
        callback();
      }
    };
    var checkFileType = (rule, value, callback) => {
      var extensions = {
        '.png':'image/png',
        '.jpg':'image/jpg',
        '.jpeg':'image/jpeg',
        '.svg':'image/svg+xml',
        '.pdf':'application/pdf',
        '.doc':'application/msword',
        '.docx':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        '.dotx':'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
        '.docm':'application/vnd.ms-word.document.macroEnabled.12',
        '.dotm':'application/vnd.ms-word.template.macroEnabled.12',
        '.xls':'application/vnd.ms-excel',
        '.xlsx':'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        '.xltx':'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
        '.xlsm':'application/vnd.ms-excel.sheet.macroEnabled.12',
        '.xltm':'application/vnd.ms-excel.template.macroEnabled.12',
        '.xlam':'application/vnd.ms-excel.addin.macroEnabled.12',
        '.xlsb':'application/vnd.ms-excel.sheet.binary.macroEnabled.12',
      }
      var acceptExtensions = [];
      var acceptArr = rule.accept.split(',');
      acceptArr.forEach(item => {
        acceptExtensions.push(extensions[item.trim()]);
      })
      if(value && acceptExtensions.indexOf(value.type) < 0){
        callback(new Error(`Формат файла должно быть один из следующих (${rule.accept}).`));
      }else{
        callback();
      }
    };
    var checkFileSize = (rule, value, callback) => {
      if(value && (value.size/1024/1024) > rule.size){
        callback(new Error(`Размер файла не должно превышать ${rule.size}мб.`));
      }else{
        callback();
      }
    };
    return {
      vRequiredIf: (otherfield) => {
        return { validator: requiredIf, otherfield: otherfield, trigger: 'blur' };
      },
      vRequiredIfEqual: (otherfield, length) => {
        return { validator: requiredIfEqual, otherfield: otherfield, length, trigger: 'blur' };
      },
      vRuleLength: (number, textNumber) => {
        return { validator: ruleLength, number: number, textNumber: (textNumber?textNumber:number), trigger: 'blur' };
      },
      vRuleMinLength: (number) => {
        return { validator: ruleMinLength, number: number, trigger: 'blur' };
      },
      vRuleMaxLength: (number) => {
        return { validator: ruleMaxLength, number: number, trigger: 'blur' };
      },
      vConfomPass: (pass) => {
        return { validator: compare, pass: pass, trigger: 'blur' };
      },
      vFileType: (accept) => {
        return { validator: checkFileType, accept };
      },
      vFileSize: (size) => {
        return { validator: checkFileSize, size };
      },
      vRequired: { validator: required, msg: 'The field is required' },
      vRequiredNumber: { validator: requiredNumber, msg: 'The field is required' },
      vRequiredGender: { validator: requiredGender, msg: 'The field is required' },
      vRequiredList: { validator: requiredList, msg: 'Please select at least one value' },
      vRequiredRadio: { validator: requiredRadio, msg: 'Please select one value' },
      vRequiredBool: { validator: requiredBool, msg: 'Пожалуйста, выберите одно значение' },
      vEmail: { validator: email, msg: 'Введите в формате адрес@ящик.домен', trigger: 'blur' },
      vNumeric: {  validator: required, type: 'number', msg: 'Поле должно быть числовым' },
      vRequiredTerm: { validator: required, msg: 'Подтвердите ваше согласие'  },
      vUrl: {  validator: requiredUrl, type: 'url', msg: 'Please enter a valid link', trigger: 'blur' },
      minSalary: (salary_from) => {
        salary_from = Number(String(salary_from).replace(' ', ''));
        return { validator: (rule, value, callback) => {
          var valueNumber = Number(String(value).replace(' ', ''));
          if(valueNumber && salary_from && valueNumber <= salary_from){
            callback(new Error("Сумма должно быть больше, чем начальная сумма"));
          } else {
            callback();
          }
        }, trigger: 'blur' };
      },
    };
  },
  methods: {
    validateEmail(inputText) {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(inputText.match(mailformat))
        return true;
      else
        return false;
    }
  },
};
