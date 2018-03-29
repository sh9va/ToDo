import { Pipe, PipeTransform } from '@angular/core';
import { ToDo } from '../models/ToDo';

@Pipe({
  name: 'toDo',
  pure: false
})
export class ToDoPipe implements PipeTransform {

  transform(items: ToDo[], status : boolean): ToDo[] {
    if (!items) {
      return items;
  }
  // filter items array, items which match and return true will be
  // kept, false will be filtered out
  return items.filter(item => item.isCompleted == status);
  }

}
