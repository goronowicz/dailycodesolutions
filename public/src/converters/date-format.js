import moment from 'moment';

export class DateFormatValueConverter {
  toView(value) {
    return moment(value).format('D/M/YYYY HH:mm');
  }

  fromView(value){
    var date = moment(value);
    return date.isValid() ? date.format('YYYY-MM-DD HH:mm') : value;
  }
}
