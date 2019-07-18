import { Pipe, PipeTransform } from '@angular/core';
import { GpsInfo } from './gpsInfo.model';

@Pipe({
  name: 'gpsInfosFilter'
})
export class GpsFilterPipe implements PipeTransform {

  transform(gpsInfos: GpsInfo[], term: string): any {
    let filteredArray: GpsInfo[] = [];

    if (term && term.length > 0) {
      filteredArray = gpsInfos.filter(
        (gpsInfos: any) => gpsInfos.name.toLowerCase().includes(term.toLowerCase())
      );
    }


    return filteredArray.length > 0 ? filteredArray : gpsInfos;
  }

}
