import {inject, customElement, bindable} from 'aurelia-framework';
import moment from 'moment';
import {datetimepicker} from 'Eonasdan/bootstrap-datetimepicker';

@inject(Element)
@bindable("value")
export class DatePicker {

    @bindable format = 'YYYY-MM-DD HH:mm';

    constructor(element) {
        this.element = element;
     }

    attached() {
      var self = this;
        this.datePicker = $(this.element).find('.input-group.date')
            .datetimepicker({
                format: this.format,
                showClose: true,
                showTodayButton: true
            });

        this.datePicker.on("dp.change", (e) => {
            self.value = moment(e.date).format(self.format);
        });
    }
}
