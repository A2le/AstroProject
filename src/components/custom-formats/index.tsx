/* eslint-disable no-loop-func */
import { useState } from 'react';
type SortOrder = 'asc' | 'desc';
export function convertToDate(dateString: any) {
  //  Convert a "dd/MM/yyyy" string into a Date object
  let d = dateString.split('/');
  let dat = new Date(d[2] + '/' + d[1] + '/' + d[0]);
  return dat;
}

export function convertToDateCheckin(dateString: string) {
  //  Convert a "dd/MM/yyyy" string into a Date object
  //let d = dateString.split('/');
  let dat = new Date(dateString);
  return dat.toString();
}

export function convertToTime(dateString: any, timeString: any) {
  var myDate = new Date(convertToDate(dateString)); //  Convert a "dd/MM/yyyy" string into a Date object
  //let t = '12:00:00 AM';
  let a = timeString.split(' ');
  let d = a[0].split(':');
  if (a[1] === 'PM' && d[0] !== '12') {
    myDate.setHours(+(parseInt(d[0]) + 12));
  } else if (a[1] === 'AM' && d[0] === '12') {
    myDate.setHours(+(parseInt(d[0]) + 12));
  } else {
    myDate.setHours(+d[0]);
  }
  myDate.setMinutes(+d[1]); // can pass Number or String - doesn't really matter
  //myDate.setSeconds(0);
  return myDate;
}

export function convertTo24hrTime(dateString: any, timeString: any) {
  var myDate = new Date(convertToDate(dateString)); //  Convert a "dd/MM/yyyy" string into a Date object
  let a = timeString.split(' ');
  let d = a[0].split(':');
  if (a[1] === 'PM' && d[0] !== '12') {
    myDate.setHours(+(parseInt(d[0]) + 12));
  } else if (a[1] === 'AM' && d[0] === '12') {
    myDate.setHours(+(parseInt(d[0]) + 12));
  } else {
    myDate.setHours(+d[0]);
  }
  myDate.setMinutes(+d[1]);
  return timeFormatCheckIn(myDate);
}

export const startDay = (startDate: any) => {
  var myDate = new Date(convertToDate(startDate));
  var myDay = myDate.getDate();
  return myDay.toString();
};
export const startYear = (startDate: any) => {
  var myDate = new Date(convertToDate(startDate));
  var myDay = myDate.getFullYear();
  return myDay.toString();
};

export const startMonth = (startDate: any) => {
  var myDate = new Date(convertToDate(startDate));
  var myMonth = myDate.getMonth() + 1;
  let mon: string;
  switch (myMonth) {
    case 12:
      mon = 'DEC';
      break;
    case 11:
      mon = 'NOV';
      break;
    case 10:
      mon = 'OCT';
      break;
    case 9:
      mon = 'SEP';
      break;
    case 8:
      mon = 'AUG';
      break;
    case 7:
      mon = 'JUL';
      break;
    case 6:
      mon = 'JUN';
      break;
    case 5:
      mon = 'MAY';
      break;
    case 4:
      mon = 'APR';
      break;
    case 3:
      mon = 'MAR';
      break;
    case 2:
      mon = 'FEB';
      break;
    case 1:
    default:
      mon = 'JAN';
      break;
  }
  return mon;
};

export const startFullMonth = (startDate: any) => {
  var myDate = new Date(convertToDate(startDate));
  var myMonth = myDate.getMonth() + 1;
  let mon: string;
  switch (myMonth) {
    case 12:
      mon = 'December';
      break;
    case 11:
      mon = 'November';
      break;
    case 10:
      mon = 'October';
      break;
    case 9:
      mon = 'September';
      break;
    case 8:
      mon = 'August';
      break;
    case 7:
      mon = 'July';
      break;
    case 6:
      mon = 'June';
      break;
    case 5:
      mon = 'May';
      break;
    case 4:
      mon = 'April';
      break;
    case 3:
      mon = 'March';
      break;
    case 2:
      mon = 'February';
      break;
    case 1:
    default:
      mon = 'January';
      break;
  }
  return mon;
};

export const eventHours = (startDate: any) => {
  var myDate = new Date(convertToDate(startDate));
  var myHours = myDate.getHours();
  let Hours: string;
  if (myHours < 10) {
    Hours = '0' + myHours;
  } else {
    Hours = myHours.toString();
  }
  var myMin = myDate.getMinutes();
  let Minutes: string;
  if (myMin < 10) {
    Minutes = '0' + myMin;
  } else {
    Minutes = myMin.toString();
  }
  let time: string;
  time = Hours + ':' + Minutes;
  return time;
};

export const dateFormat = (startDate: any) => {
  var myDate = new Date(convertToDate(startDate));
  var myDay = JSON.stringify(myDate).slice(1, 11);
  return myDay;
};

export const dateFormatCheckIn = (startDate: any) => {
  var myDate = new Date(convertToDateCheckin(startDate));
  var myDay = JSON.stringify(myDate).slice(1, 11);
  return myDay;
};

export const timeFormatCheckIn = (startDate: any) => {
  var myDate = new Date(convertToDateCheckin(startDate));
  var myHours = myDate.getHours();
  let Hours: string;
  if (myHours < 10) {
    Hours = '0' + myHours;
  } else {
    Hours = myHours.toString();
  }

  var myMin = myDate.getMinutes();
  let Minutes: string;
  if (myMin < 10) {
    Minutes = '0' + myMin;
  } else {
    Minutes = myMin.toString();
  }

  /* var mySec = myDate.getSeconds();
  let Seconds: string;
  if (mySec < 10) {
    Seconds = '0' + myMin;
  } else {
    Seconds = mySec.toString();
  } */

  let time: string;
  time = Hours + ':' + Minutes; /* + ':' + Seconds; */
  return time;
};

export const timeFormat = (startDate: any) => {
  var myDate = new Date(convertToDate(startDate));
  var myDay = myDate.getTime();
  return myDay;
};

export const dayView = (startDate: any) => {
  var myDate = new Date(convertToDate(startDate));
  var myDay = myDate.getDay();
  var myYear = myDate.getFullYear().toString();
  /* startDate. */ //JSON.stringify(myDate).slice(1, 11);
  let day: string;
  switch (myDay) {
    case 7:
    default:
      day = 'Sunday';
      break;
    case 6:
      day = 'Saturday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 1:
      day = 'Monday';
      break;
  }
  return day + ', ' + startDay(startDate) + ' ' + startFullMonth(startDate) + ' ' + myYear;
  //return myDay;
};

export const dayViewMini = (startDate: any) => {
  var myDate = new Date(convertToDate(startDate));
  //var myDay = myDate.getDay();
  var myYear = myDate.getFullYear().toString();
  /* startDate. */ //JSON.stringify(myDate).slice(1, 11);
  return startDay(startDate) + ' ' + startFullMonth(startDate) + ' ' + myYear;
  //return myDay;
};

export function getExtension(filetype: any) {
  return filetype.split('.').pop();
}

export function getName(filetype: any) {
  return filetype.split('/').pop();
}

export function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function displayImage(image: any, eventBanner: any, ours?: boolean) {
  //const eventBanner = require.context('assets/images/events', true);
  if (image) {
    if (image.startsWith('/')) {
      return image;
    } else {
      return process.env.REACT_APP_AWS_S3 + image;
      //'https://amusemabucket.s3.af-south-1.amazonaws.com/' + image;
    }
  } else {
    return eventBanner('./event-1.jpg');
    //return 'https://s3-eu-west-1.amazonaws.com/amusemabucket/event-banners'/event-1.jpg';
  }
}

export function displayPromotionalImage(eventBanner: any) {
  return eventBanner('./gifts.webp');
}

export function trimUrl(url: string) {
  let trimmed;
  if (url.includes('open.spotify.com/track')) {
    trimmed = url.replace('open.spotify.com/track', 'open.spotify.com/embed/track');
  } else if (url.includes('open.spotify.com')) {
    trimmed = url.replace(/\?.*/, '?utm_source=generator');
  } else if (url.includes('watch?v=')) {
    trimmed = url.replace('watch?v=', 'embed/');
  } else {
    trimmed = url;
  }
  return trimmed;
}

export function lb_to_p(ByVal: string) {
  let Str = ByVal.trim();
  Str = Str.replace(/\n/g, '<br/>');
  return Str;
}

export function useCopyToClipboard() {
  const [result, setResult] = useState<null | { state: 'success' } | { state: 'error'; message: string }>(null);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      await navigator.clipboard.writeText(window.location.toString());
      setResult({ state: 'success' });
    } catch (e: any) {
      setResult({ state: 'error', message: e.message });
      throw e;
    } finally {
      // 👇 Show the result feedback for 2 seconds
      setTimeout(() => {
        setResult(null);
      }, 2000);
    }
  };

  // 👇 We want the result as a tuple
  return [copy, result] as const;
}

export function dataURItoBlob(dataURI: any) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  //Old Code
  //write the ArrayBuffer to a blob, and you're done
  //var bb = new BlobBuilder();
  //bb.append(ab);
  //return bb.getBlob(mimeString);

  //New Code
  return new Blob([ab], { type: mimeString });
}

export async function url2File(url: any, fileName: any) {
  const blob = await (await fetch(url)).blob();
  return new File([blob], fileName, { type: blob.type });
}

export function parseJwt(token: any) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );

  return JSON.parse(jsonPayload);
}

export function weeklyView(allViews: any[]) {
  //var curr1 = new Date(allViews[0].viewsDateTime); // get current date
  var curr = new Date(); // get current date
  var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

  var sun = new Date(curr.setDate(first));
  var mon = new Date(curr.setDate(first + 1));
  var tue = new Date(curr.setDate(first + 2));
  var wed = new Date(curr.setDate(first + 3));
  var thu = new Date(curr.setDate(first + 4));
  var fri = new Date(curr.setDate(first + 5));
  var sat = new Date(curr.setDate(first + 6));

  let Sunday = 0;
  let Monday = 0;
  let Tuesday = 0;
  let Wednesday = 0;
  let Thursday = 0;
  let Friday = 0;
  let Saturday = 0;

  // eslint-disable-next-line array-callback-return
  allViews.map((view: any) => {
    var vDate = new Date(view.viewsDateTime); // get current date
    if (isequalDate(sun, vDate)) {
      Sunday = Sunday + view.viewsCount;
    } else if (isequalDate(mon, vDate)) {
      Monday = Monday + view.viewsCount;
    } else if (isequalDate(tue, vDate)) {
      Tuesday = Tuesday + view.viewsCount;
    } else if (isequalDate(wed, vDate)) {
      Wednesday = Wednesday + view.viewsCount;
    } else if (isequalDate(thu, vDate)) {
      Thursday = Thursday + view.viewsCount;
    } else if (isequalDate(fri, vDate)) {
      Friday = Friday + view.viewsCount;
    } else if (isequalDate(sat, vDate)) {
      Saturday = Saturday + view.viewsCount;
    }
  });

  var ary = [];
  ary.push(Monday);
  ary.push(Tuesday);
  ary.push(Wednesday);
  ary.push(Thursday);
  ary.push(Friday);
  ary.push(Saturday);
  ary.push(Sunday);
  return ary;
}

export function monthlyView(allViews: any[]) {
  var curr = new Date(); // get current date
  var jan = new Date(curr.setMonth(0));
  var feb = new Date(curr.setMonth(1));
  var mar = new Date(curr.setMonth(2));
  var apr = new Date(curr.setMonth(3));
  var may = new Date(curr.setMonth(4));
  var jun = new Date(curr.setMonth(5));
  var jul = new Date(curr.setMonth(6));
  var aug = new Date(curr.setMonth(7));
  var sep = new Date(curr.setMonth(8));
  var oct = new Date(curr.setMonth(9));
  var nov = new Date(curr.setMonth(10));
  var dec = new Date(curr.setMonth(11));

  let January = 0;
  let February = 0;
  let March = 0;
  let April = 0;
  let May = 0;
  let June = 0;
  let July = 0;
  let August = 0;
  let September = 0;
  let October = 0;
  let November = 0;
  let December = 0;

  // eslint-disable-next-line array-callback-return
  allViews.map((view: any) => {
    var vDate = new Date(view.viewsDateTime); // get current date
    if (isequalMonth(jan, vDate)) {
      January = January + view.viewsCount;
    } else if (isequalMonth(feb, vDate)) {
      February = February + view.viewsCount;
    } else if (isequalMonth(mar, vDate)) {
      March = March + view.viewsCount;
    } else if (isequalMonth(apr, vDate)) {
      April = April + view.viewsCount;
    } else if (isequalMonth(may, vDate)) {
      May = May + view.viewsCount;
    } else if (isequalMonth(jun, vDate)) {
      June = June + view.viewsCount;
    } else if (isequalMonth(jul, vDate)) {
      July = July + view.viewsCount;
    } else if (isequalMonth(aug, vDate)) {
      August = August + view.viewsCount;
    } else if (isequalMonth(sep, vDate)) {
      September = September + view.viewsCount;
    } else if (isequalMonth(oct, vDate)) {
      October = October + view.viewsCount;
    } else if (isequalMonth(nov, vDate)) {
      November = November + view.viewsCount;
    } else if (isequalMonth(dec, vDate)) {
      December = December + view.viewsCount;
    }
  });

  var ary = [];
  ary.push(January);
  ary.push(February);
  ary.push(March);
  ary.push(April);
  ary.push(May);
  ary.push(June);
  ary.push(July);
  ary.push(August);
  ary.push(September);
  ary.push(October);
  ary.push(November);
  ary.push(December);
  return ary;
}

export function hourlyView(allViews: any[], curr: Date) {
  //var curr = new Date(); // get current date
  var Hour00 = new Date(curr.setHours(0));
  var Hour01 = new Date(curr.setHours(1));
  var Hour02 = new Date(curr.setHours(2));
  var Hour03 = new Date(curr.setHours(3));
  var Hour04 = new Date(curr.setHours(4));
  var Hour05 = new Date(curr.setHours(5));
  var Hour06 = new Date(curr.setHours(6));
  var Hour07 = new Date(curr.setHours(7));
  var Hour08 = new Date(curr.setHours(8));
  var Hour09 = new Date(curr.setHours(9));
  var Hour10 = new Date(curr.setHours(10));
  var Hour11 = new Date(curr.setHours(11));
  var Hour12 = new Date(curr.setHours(12));
  var Hour13 = new Date(curr.setHours(13));
  var Hour14 = new Date(curr.setHours(14));
  var Hour15 = new Date(curr.setHours(15));
  var Hour16 = new Date(curr.setHours(16));
  var Hour17 = new Date(curr.setHours(17));
  var Hour18 = new Date(curr.setHours(18));
  var Hour19 = new Date(curr.setHours(19));
  var Hour20 = new Date(curr.setHours(20));
  var Hour21 = new Date(curr.setHours(21));
  var Hour22 = new Date(curr.setHours(22));
  var Hour23 = new Date(curr.setHours(23));

  let Hours00 = 0;
  let Hours01 = 0;
  let Hours02 = 0;
  let Hours03 = 0;
  let Hours04 = 0;
  let Hours05 = 0;
  let Hours06 = 0;
  let Hours07 = 0;
  let Hours08 = 0;
  let Hours09 = 0;
  let Hours10 = 0;
  let Hours11 = 0;
  let Hours12 = 0;
  let Hours13 = 0;
  let Hours14 = 0;
  let Hours15 = 0;
  let Hours16 = 0;
  let Hours17 = 0;
  let Hours18 = 0;
  let Hours19 = 0;
  let Hours20 = 0;
  let Hours21 = 0;
  let Hours22 = 0;
  let Hours23 = 0;

  // eslint-disable-next-line array-callback-return
  allViews.map((view: any) => {
    if (view.date_qr_code_verified !== null) {
      var vDate = new Date(view.date_qr_code_verified); // get current date
      if (isequalHour(Hour00, vDate)) {
        Hours00++;
      } else if (isequalHour(Hour01, vDate)) {
        Hours01++;
      } else if (isequalHour(Hour02, vDate)) {
        Hours02++;
      } else if (isequalHour(Hour03, vDate)) {
        Hours03++;
      } else if (isequalHour(Hour04, vDate)) {
        Hours04++;
      } else if (isequalHour(Hour05, vDate)) {
        Hours05++;
      } else if (isequalHour(Hour06, vDate)) {
        Hours06++;
      } else if (isequalHour(Hour07, vDate)) {
        Hours07++;
      } else if (isequalHour(Hour08, vDate)) {
        Hours08++;
      } else if (isequalHour(Hour09, vDate)) {
        Hours09++;
      } else if (isequalHour(Hour10, vDate)) {
        Hours10++;
      } else if (isequalHour(Hour11, vDate)) {
        Hours11++;
      } else if (isequalHour(Hour12, vDate)) {
        Hours12++;
      } else if (isequalHour(Hour13, vDate)) {
        Hours13++;
      } else if (isequalHour(Hour14, vDate)) {
        Hours14++;
      } else if (isequalHour(Hour15, vDate)) {
        Hours15++;
      } else if (isequalHour(Hour16, vDate)) {
        Hours16++;
      } else if (isequalHour(Hour17, vDate)) {
        Hours17++;
      } else if (isequalHour(Hour18, vDate)) {
        Hours18++;
      } else if (isequalHour(Hour19, vDate)) {
        Hours19++;
      } else if (isequalHour(Hour20, vDate)) {
        Hours20++;
      } else if (isequalHour(Hour21, vDate)) {
        Hours21++;
      } else if (isequalHour(Hour22, vDate)) {
        Hours22++;
      } else if (isequalHour(Hour23, vDate)) {
        Hours23++;
      }
    }
  });

  let ary: number[] = [];
  ary.push(Hours00);
  ary.push(Hours01);
  ary.push(Hours02);
  ary.push(Hours03);
  ary.push(Hours04);
  ary.push(Hours05);
  ary.push(Hours06);
  ary.push(Hours07);
  ary.push(Hours08);
  ary.push(Hours09);
  ary.push(Hours10);
  ary.push(Hours11);
  ary.push(Hours12);
  ary.push(Hours13);
  ary.push(Hours14);
  ary.push(Hours15);
  ary.push(Hours16);
  ary.push(Hours17);
  ary.push(Hours18);
  ary.push(Hours19);
  ary.push(Hours20);
  ary.push(Hours21);
  ary.push(Hours22);
  ary.push(Hours23);

  return ary;
}

function isequalDate(
  daytocheck: { getUTCDate: () => any; getUTCMonth: () => any; getUTCFullYear: () => any },
  vDate: { getUTCDate: () => any; getUTCMonth: () => any; getUTCFullYear: () => any }
) {
  if (
    daytocheck.getUTCDate() === vDate.getUTCDate() &&
    daytocheck.getUTCMonth() === vDate.getUTCMonth() &&
    daytocheck.getUTCFullYear() === vDate.getUTCFullYear()
  ) {
    return true;
  } else {
    return false;
  }
}

function isequalMonth(
  daytocheck: { getUTCMonth: () => any; getUTCFullYear: () => any },
  vDate: { getUTCMonth: () => any; getUTCFullYear: () => any }
) {
  if (daytocheck.getUTCMonth() === vDate.getUTCMonth() && daytocheck.getUTCFullYear() === vDate.getUTCFullYear()) {
    return true;
  } else {
    return false;
  }
}

function isequalHour(
  daytocheck: { getHours: () => any; getUTCDate: () => any; getUTCMonth: () => any; getUTCFullYear: () => any },
  vDate: { getHours: () => any; getUTCDate: () => any; getUTCMonth: () => any; getUTCFullYear: () => any }
) {
  if (
    daytocheck.getHours() === vDate.getHours() &&
    daytocheck.getUTCDate() === vDate.getUTCDate() &&
    daytocheck.getUTCMonth() === vDate.getUTCMonth() &&
    daytocheck.getUTCFullYear() === vDate.getUTCFullYear()
  ) {
    return true;
  } else {
    return false;
  }
}

export function nameAry(tickets: any[]) {
  let tNameAry: string[] = [];
  // eslint-disable-next-line array-callback-return
  tickets.map((t: any) => {
    tNameAry.push(t.name);
  });
  return tNameAry;
}

interface LooseObject {
  [key: string]: any;
}

//var obj: LooseObject = {};

export function nameObject(tickets: any[]) {
  var tNameAry: LooseObject = {};
  // eslint-disable-next-line array-callback-return
  tickets.map((t: any) => {
    tNameAry[t.name] = true;
  });
  return tNameAry;
}

// export function ticketnameObject(atickets: any[]) {
//   var tNameAry: LooseObject = {};
//   // eslint-disable-next-line array-callback-return
//   //tickets.map((t: any) => {
//   let groupedDatesThatMatch = _.groupBy(atickets.date_created, function (views) {
//     return moment(views.created_at).format('MMMM Do YYYY');
//     //});

//     //console.log(groupedDatesThatMatch);
//     tNameAry[t.name] = true;
//   });
//   return tNameAry;
// }

export function extract2(atickets: any[]) {
  var groups: any = {};
  var dategroups: any = [];
  let count = 0;
  //console.log(atickets);
  atickets.forEach(function (val, i) {
    var date = val.date_created.split('T')[0];
    //var name = val.ticket_name;
    if (i in groups) {
      //count = count + 1 ;
      groups[i].push({ name: val.ticket_name, ary: dategroups });

      if (date in dategroups) {
        count = count + 1;
        dategroups.push(count);
      } else {
        count = count + 1;
        dategroups = new Array(count);
      }
      //console.log('here');
    } else {
      groups[i] = new Array({ name: val.ticket_name, ary: [1] });
    }
  });

  //console.log(groups);
  return groups;
}

export function extract(atickets: any[]) {
  var groups: any = {};
  //var dategroups: any = [];
  //let count = 0;
  //console.log(atickets);
  atickets.forEach(function (val, i) {
    //var date = val.date_created.split('T')[0];
    var name = val.ticket_name;
    if (name in groups) {
      groups[name].push(val.date_created.split('T')[0]);
    } else {
      groups[name] = new Array(val.date_created.split('T')[0]);
    }
  });
  /**
  val.date_created && groups[name].push(val.date_created.split('T')[0]);
    } else {
      val.date_created ? (groups[name] = new Array(val.date_created.split('T')[0])) : (groups[name] = []); */
  return groups;
}
const removeDups = (arr: string[]): string[] => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
};

export function structureDates(atickets: any[]) {
  let oAry = extract(atickets);
  let out: any = [];
  let counter: any = {};
  var aryDat: any[] = [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const [, value] of Object.entries(oAry)) {
    let temp: any[] = [];
    temp = value as unknown as any[];
    temp.forEach((ele) => {
      if (counter[ele]) {
        counter[ele] += 1;
      } else {
        counter[ele] = 1;
      }
    });
    for (const [k] of Object.entries(counter)) {
      aryDat.push(k);
      //aryNum.push(v);
    }
    out.push(value);
  }

  //console.log(removeDups(aryDat));
  out = removeDups(aryDat);
  //let r: any =[]
  //out.sort((a: string, b: string) => new Date(b) - new Date(a));
  out.sort((a: string, b: string) => {
    return new Date(a).getTime() - new Date(b).getTime();
  });
  return out.slice(-7);
}

// export function SortByField(ary: any, field: any) {
//   ary.sort((a: any, b: any) => {
//     return a[field] - b[field];
//   });
// }

export function SortByField<T>(array: T[], field: keyof T, order: SortOrder = 'asc'): T[] {
  return array.sort((a, b) => {
    const fieldA = a[field];
    const fieldB = b[field];

    if (fieldA < fieldB) {
      return order === 'asc' ? -1 : 1;
    }
    if (fieldA > fieldB) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}
export function SortByDateField<T>(array: T[], field: keyof T, order: SortOrder = 'asc'): T[] {
  return array.sort((a, b) => {
    const parseDate = (dateStr: string) => {
      const [day, month, year] = dateStr.split('/').map(Number);
      return new Date(year, month - 1, day); // Months are 0-indexed in JavaScript
    };

    const dateA = parseDate(a[field] as string);
    const dateB = parseDate(b[field] as string);

    if (dateA < dateB) {
      return order === 'asc' ? -1 : 1;
    }
    if (dateA > dateB) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function sortEventsByDateField<T>(array: T[], order: SortOrder = 'asc'): T[] {
  return array.sort((a, b) => {
    const parseDate = (dateStr: string) => {
      const [day, month, year] = dateStr.split('/').map(Number);
      return new Date(year, month - 1, day); // Months are 0-indexed in JavaScript
    };

    const getDateValue = (item: T) => {
      const dateStr = (item as any).new_start_date ?? (item as any).start_date;
      return parseDate(dateStr);
    };

    const dateA = getDateValue(a);
    const dateB = getDateValue(b);

    if (dateA < dateB) {
      return order === 'asc' ? -1 : 1;
    }
    if (dateA > dateB) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  });
}

export function structureChart(atickets: any[]) {
  let oAry = extract(atickets);
  let out = [];

  for (const [key, value] of Object.entries(oAry)) {
    let counter: any = {};
    //console.log(`Key: ${key}, Value: ${value}`);
    let temp: any[] = [];
    temp = value as unknown as any[];
    var aryNum: any[] = [];
    var aryDat: any[] = [];
    temp.forEach((ele) => {
      if (counter[ele]) {
        counter[ele] += 1;
      } else {
        counter[ele] = 1;
      }
    });
    for (const [k] of Object.entries(counter)) {
      //console.log(`Key: ${k}, Value: ${v}`);
      aryDat.push(k);
    }
    let dates = structureDates(atickets);
    dates.forEach((ele: any) => {
      if (counter[ele]) {
        aryNum.push(counter[ele]);
      } else {
        aryNum.push(0);
      }
    });

    oAry[key].arr = aryNum;
    out.push({ name: key, data: oAry[key].arr });
    /* temp.forEach((t: any) => {
      ary.push(getOccurrence(temp, t));
    });
     */
  }

  //console.log(out);
  return out;
}

/**
export function structureChart(atickets: any[]) {
  let oAry = extract(atickets);
  let out = [];

  for (const [key, value] of Object.entries(oAry)) {
    let counter: any = {};
    //console.log(`Key: ${key}, Value: ${value}`);
    let temp: any[] = [];
    temp = value as unknown as any[];
    var aryNum: any[] = [];
    var aryDat: any[] = [];
    temp.forEach((ele) => {
      if (counter[ele]) {
        counter[ele] += 1;
      } else {
        counter[ele] = 1;
      }
    });
    for (const [k, v] of Object.entries(counter)) {
      aryDat.push(k);
      aryNum.push(v);
    }
    oAry[key].arr = aryNum;
    out.push({ name: key, data: oAry[key].arr });
    //console.log(aryDat);
    /* temp.forEach((t: any) => {
      ary.push(getOccurrence(temp, t));
    });
     */
/*}

  //console.log(out);
  return out;
} */

export function weeklySales(allViews: any[]) {
  //var curr1 = new Date(allViews[0]. date_created); // get current date
  var curr = new Date(); // get current date
  var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

  var sun = new Date(curr.setDate(first));
  var mon = new Date(curr.setDate(first + 1));
  var tue = new Date(curr.setDate(first + 2));
  var wed = new Date(curr.setDate(first + 3));
  var thu = new Date(curr.setDate(first + 4));
  var fri = new Date(curr.setDate(first + 5));
  var sat = new Date(curr.setDate(first + 6));

  let Sunday = 0;
  let Monday = 0;
  let Tuesday = 0;
  let Wednesday = 0;
  let Thursday = 0;
  let Friday = 0;
  let Saturday = 0;
  // eslint-disable-next-line array-callback-return
  allViews.map((view: any) => {
    var vDate = new Date(view.date_created); // get current date
    if (isequalDate(sun, vDate)) {
      Sunday = Sunday + 1;
    } else if (isequalDate(mon, vDate)) {
      Monday = Monday + 1;
    } else if (isequalDate(tue, vDate)) {
      Tuesday = Tuesday + 1;
    } else if (isequalDate(wed, vDate)) {
      Wednesday = Wednesday + 1;
    } else if (isequalDate(thu, vDate)) {
      Thursday = Thursday + 1;
    } else if (isequalDate(fri, vDate)) {
      Friday = Friday + 1;
    } else if (isequalDate(sat, vDate)) {
      Saturday = Saturday + 1;
    }
  });

  var ary = [];
  ary.push(Monday);
  ary.push(Tuesday);
  ary.push(Wednesday);
  ary.push(Thursday);
  ary.push(Friday);
  ary.push(Saturday);
  ary.push(Sunday);
  return ary;
}

export function monthlySales(allViews: any[]) {
  //console.log(allViews);
  var curr = new Date(); // get current date
  var jan = new Date(curr.setMonth(0));
  var feb = new Date(curr.setMonth(1));
  var mar = new Date(curr.setMonth(2));
  var apr = new Date(curr.setMonth(3));
  var may = new Date(curr.setMonth(4));
  var jun = new Date(curr.setMonth(5));
  var jul = new Date(curr.setMonth(6));
  var aug = new Date(curr.setMonth(7));
  var sep = new Date(curr.setMonth(8));
  var oct = new Date(curr.setMonth(9));
  var nov = new Date(curr.setMonth(10));
  var dec = new Date(curr.setMonth(11));

  let January = 0;
  let February = 0;
  let March = 0;
  let April = 0;
  let May = 0;
  let June = 0;
  let July = 0;
  let August = 0;
  let September = 0;
  let October = 0;
  let November = 0;
  let December = 0;

  // eslint-disable-next-line array-callback-return
  allViews.map((view: any) => {
    var vDate = new Date(view.date_created); // get current date
    //console.log(vDate);
    if (isequalMonth(jan, vDate)) {
      January = January + 1;
    } else if (isequalMonth(feb, vDate)) {
      February = February + 1;
    } else if (isequalMonth(mar, vDate)) {
      March = March + 1;
    } else if (isequalMonth(apr, vDate)) {
      April = April + 1;
    } else if (isequalMonth(may, vDate)) {
      May = May + 1;
    } else if (isequalMonth(jun, vDate)) {
      June = June + 1;
    } else if (isequalMonth(jul, vDate)) {
      July = July + 1;
    } else if (isequalMonth(aug, vDate)) {
      August = August + 1;
    } else if (isequalMonth(sep, vDate)) {
      September = September + 1;
    } else if (isequalMonth(oct, vDate)) {
      October = October + 1;
    } else if (isequalMonth(nov, vDate)) {
      November = November + 1;
    } else if (isequalMonth(dec, vDate)) {
      December = December + 1;
    }
  });

  var ary = [];
  ary.push(January);
  ary.push(February);
  ary.push(March);
  ary.push(April);
  ary.push(May);
  ary.push(June);
  ary.push(July);
  ary.push(August);
  ary.push(September);
  ary.push(October);
  ary.push(November);
  ary.push(December);
  //console.log(ary);
  return ary;
}

export function obj_to_ary(abj: any) {
  let out = [];
  for (const [, value] of Object.entries(abj)) {
    //console.log(`Key: ${key}`);
    out.push(value);
  }
  //console.log(out);
  return out;
}

export function AllViewstoAry(ary: any) {
  let out = [];

  const jan = ary?.findIndex((_element: any) => _element.month === 'January');
  const feb = ary?.findIndex((_element: any) => _element.month === 'February');
  const mar = ary?.findIndex((_element: any) => _element.month === 'March');
  const apr = ary?.findIndex((_element: any) => _element.month === 'April');
  const may = ary?.findIndex((_element: any) => _element.month === 'May');
  const jun = ary?.findIndex((_element: any) => _element.month === 'June');
  const jul = ary?.findIndex((_element: any) => _element.month === 'July');
  const aug = ary?.findIndex((_element: any) => _element.month === 'August');
  const sep = ary?.findIndex((_element: any) => _element.month === 'September');
  const oct = ary?.findIndex((_element: any) => _element.month === 'October');
  const nov = ary?.findIndex((_element: any) => _element.month === 'November');
  const dec = ary?.findIndex((_element: any) => _element.month === 'December');

  out.push(ary[jan] ? ary[jan].viewsCount : 0);
  out.push(ary[feb] ? ary[feb].viewsCount : 0);
  out.push(ary[mar] ? ary[mar].viewsCount : 0);
  out.push(ary[apr] ? ary[apr].viewsCount : 0);
  out.push(ary[may] ? ary[may].viewsCount : 0);
  out.push(ary[jun] ? ary[jun].viewsCount : 0);
  out.push(ary[jul] ? ary[jul].viewsCount : 0);
  out.push(ary[aug] ? ary[aug].viewsCount : 0);
  out.push(ary[sep] ? ary[sep].viewsCount : 0);
  out.push(ary[oct] ? ary[oct].viewsCount : 0);
  out.push(ary[nov] ? ary[nov].viewsCount : 0);
  out.push(ary[dec] ? ary[dec].viewsCount : 0);
  //console.log(out);
  return out;
}

export const dateDifferenceInDays = (dateInitial: any, dateFinal: any) => (dateFinal - dateInitial) / 86_400_000;
export function getDaysArray(start: any, end: any) {
  for (var arr = [], dt = new Date(start); dt <= new Date(end); dt.setDate(dt.getDate() + 1)) {
    arr.push(new Date(dt));
  }
  //console.log(arr);
  return arr.length;
}

export const publicEvents = (ary: any, value?: number) => {
  var newary = ary.filter((v: any) => v.event_status_lookup_id !== 11);
  var catfilter = newary.filter((v: any) => v.event_type_ids.includes(value));
  return value === 0 || !value ? newary : catfilter;
};

export const liveEvents = (ary: any, value: number) => {
  var newary = ary.filter((v: any) => v.event_status_lookup_id === 12);
  var catfilter = newary.filter((v: any) => v.event_type_ids.includes(value));
  return value === 0 ? newary : catfilter;
};

export const pastEvents = (ary: any, value: number) => {
  var newary = ary.filter((v: any) => v.event_status_lookup_id === 13);
  var catfilter = newary.filter((v: any) => v.event_type_ids.includes(value));
  return value === 0 ? newary : catfilter;
};

export function convertFileToBase64(inputElement: any, callback: (base64String: string) => void): void {
  inputElement.addEventListener('change', (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target?.files?.[0];
    if (!file) {
      console.error('No file selected');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        // Extract the Base64 string from the Data URL
        const base64String = reader.result.split(',')[1];
        callback(base64String);
      }
    };
    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };

    reader.readAsDataURL(file);
  });
}

export async function convertBlobToBase64(blobUrl: string): Promise<string> {
  try {
    // Fetch the Blob from the blob URL
    const response = await fetch(blobUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch blob: ${response.statusText}`);
    }

    const blob = await response.blob();

    // Convert the Blob to Base64 using FileReader
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          const base64String = reader.result.split(',')[1]; // Extract Base64
          resolve(base64String);
        } else {
          reject('Failed to read blob as Base64');
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    throw new Error(`Error converting blob to Base64: ${error}`);
  }
}
