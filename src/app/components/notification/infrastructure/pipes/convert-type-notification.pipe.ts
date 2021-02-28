import {Pipe, PipeTransform} from '@angular/core';
import {notifyTypes} from '../../types/notify';

@Pipe({
  name: 'convertType'
})
export class ConvertTypeNotificationPipe implements PipeTransform {
  public transform(value: typeof notifyTypes, ...args: any[]): any {
    switch (value) {
      case 'error':
        return 'Ошибка!';
      case 'primary':
        return 'Сообщение';
      case 'warning':
        return 'Предупреждение!';
    }
  }

}
