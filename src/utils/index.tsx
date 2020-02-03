import * as moment from 'moment';
import { faMonument } from '@fortawesome/free-solid-svg-icons';

export const date = (date:string|Date, format:string = 'DD/MM/YYYY') => {
    return moment(date).format(format);
}

export const daysLeft = (date:string|Date, compare:string|Date = new Date()) => {
    return moment(date).diff(moment(compare), 'days');
}