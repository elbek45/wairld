export function firstCharUppercase(string) {
  if (typeof string == 'string' && string.length > 1) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
}

export function formatPrice(value, decimal = 0) {
  const val = (value / 1).toFixed(decimal).replace(' ', ',');
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function upper(value) {
  return String(value).toUpperCase();
}

const monthsRu = {
  0: "Январь",
  1: "Февраль",
  2: "Март",
  3: "Апрель",
  4: "Май",
  5: "Июнь",
  6: "Июль",
  7: "Август",
  8: "Сентябрь",
  9: "Октябрь",
  10: "Ноябрь",
  11: "Декабрь",
};
const monthsEn = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December",
};
const monthsUz = {
  0: "Yanvar",
  1: "Fevral",
  2: "Mart",
  3: "Aprel",
  4: "May",
  5: "Iyun",
  6: "Iyul",
  7: "Avgust",
  8: "Sentyabr",
  9: "Oktyabr",
  10: "Noyabr",
  11: "Dekabr",
};
const monthsCryl = {
  0: "Январ",
  1: "Феврал",
  2: "Март",
  3: "Апрел",
  4: "Май",
  5: "Июн",
  6: "Июл",
  7: "Август",
  8: "Сентябр",
  9: "Октябр",
  10: "Ноябр",
  11: "Декабр",
};
const monthsRus = {
  0: "Января",
  1: "Февраля",
  2: "Марта",
  3: "Апреля",
  4: "Мая",
  5: "Июня",
  6: "Июля",
  7: "Августа",
  8: "Сентября",
  9: "Октября",
  10: "Ноября",
  11: "Декабря",
};
export function formatDate(val, format = 'DD.MM.YYYY HH:mm:ss') {
  if(val){
    let value = val
    if (val.search("T")>0) {
      value = val.replace("T",' ').slice(0, 19)
    } else if (val.search("-")) {
      value = val.replace(/-/g,'/')
    }
    
    let dateClass = value != "" ? new Date(value) : new Date();
    if (format.search("YYYY") >= 0) {
      format = format.replace("YYYY", String(dateClass.getFullYear()));
    }
    if (format.search("MM") >= 0) {
      let monthInt = dateClass.getMonth() + 1;
      let month = monthInt > 9 ? monthInt : ("0" + monthInt);
      format = format.replace("MM", String(month));
    }
    if (format.search("DD") >= 0) {
      let day = dateClass.getDate() > 9 ? dateClass.getDate() : ("0" + dateClass.getDate());
      format = format.replace("DD", String(day));
    }
    if (format.search("DAY") >= 0) {
      format = format.replace("DAY", String(dateClass.getDate()));
    }
    if (format.search("HH") >= 0) {
      let hours = dateClass.getHours() > 9 ? dateClass.getHours() : ("0" + dateClass.getHours());
      format = format.replace("HH", String(hours));
    }
    if (format.search("mm") >= 0) {
      let minutes = dateClass.getMinutes() > 9 ? dateClass.getMinutes() : ("0" + dateClass.getMinutes());
      format = format.replace("mm", String(minutes));
    }
    if (format.search("ss") >= 0) {
      let seconds = dateClass.getSeconds() > 9 ? dateClass.getSeconds() : ("0" + dateClass.getSeconds());
      format = format.replace("ss", String(seconds));
    }
    if (format.search("MNTHS") >= 0) {
      let monthInt = dateClass.getMonth();
      let monthName = String(dateClass.getMonth());
      switch('oz'){
        case 'ru':
          monthName = String(monthsRus[monthInt]).toLowerCase()
          break;
        case 'oz':
          monthName = String(monthsUz[monthInt]).toLowerCase();
          break;
        case 'en':
          monthName = String(monthsEn[monthInt]).toLowerCase();
          break;
        default: 
          monthName = String(monthsCryl[monthInt]).toLowerCase();
          break;
      }
      format = format.replace("MNTHS", monthName)
    }
    if (format.search("MONTH") >= 0) {
      let monthInt = dateClass.getMonth();
      let monthName = String(dateClass.getMonth());
      switch('oz'){
        case 'ru':
          monthName = String(monthsRu[monthInt]).toLowerCase();
          break;
        case 'oz':
          monthName = String(monthsUz[monthInt]).toLowerCase();
          break;
        case 'en':
          monthName = String(monthsEn[monthInt]).toLowerCase();
          break;
        default: 
          monthName = String(monthsCryl[monthInt]).toLowerCase();
          break;
      }
      format = format.replace("MONTH", monthName);
    }
    return format;
  }
  return ""
}

export function shortDescription(value, limit = 300) {
  // const div = document.createElement('div')
  // div.innerHTML = value
  // const text = div.textContent || div.innerText || ''
  const text = String(value).replace(/<\/?[^>]+>/ig, " ");
  if(text.length > limit){
    return text.substring(0, limit)+'...';
  }
  return text;
}

export function fullpath(path) {
  return process.env.VUE_APP_PUBLIC+path;
}

export function timer(seconds){
  let m = Math.trunc(seconds / 60)
  let s = seconds % 60
  if (m <= 9) m = '0' + m
  if (s <= 9) s = '0' + s
  return m + ':' + s
}

export function link(link) {
  if(link){
    if(link.indexOf("http") === 0){
      return link;
    }
    return 'http://'+link;
  }
  return link;
}

export function correctNumber(number) {
  if(number < 10){
    return '0'+number;
  }
  return number;
}