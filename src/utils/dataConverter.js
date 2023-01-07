export function timeSince(daytime) {
  const day = new Date(daytime);
  const seconds = Math.floor((new Date().valueOf() - day.valueOf()) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + " years";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes";
  }
  return Math.floor(seconds) + " seconds";
}
export function toView(number) {
  const numbers = parseInt(number);
  const mils = parseInt(Math.floor(numbers / 1000000));
  const thousand = parseInt(Math.floor((numbers - mils * 1000000) / 1000));
  const some = parseInt(numbers % 1000);
  if (mils > 0 && thousand > 0) {
    return `${mils}.${Math.floor(thousand / 10)}M`;
  } else if (mils <= 0 && thousand > 0) {
    return `${thousand}K`;
  } else if (mils <= 0 && thousand <= 0) {
    return `${some}`;
  }
}
export function toVideoTime(time) {
  const duration = time
    .replace("PT", "")
    .replace("H", ":")
    .replace("M", ":")
    .replace("S", "")
    .split(":");
  if (duration.length === 3) {
    return `${duration[0]}:${
      parseInt(duration[1]) < 9 ? `0${duration[1]}` : duration[1]
    }:${parseInt(duration[2]) < 9 ? `0${duration[2]}` : duration[2]}`;
  }

  if (duration.length === 2) {
    return `${duration[0]}:${
      parseInt(duration[1]) < 9 ? `0${duration[1]}` : duration[1]
    }`;
  }

  if (duration.length === 1) {
    return `0:${parseInt(duration[0]) < 9 ? `0${duration[0]}` : duration[0]}`;
  }
}
export function subscriberCounter(Subcribers){
  if(Math.floor(Subcribers/1000000) >=1){
    return `${Math.floor(Subcribers/1000000)}M`
  }
  else if (Math.floor(Subcribers/1000) >= 1){
    return `${Math.floor(Subcribers/1000)}K`
  }
  else {
    return Subcribers
  }
}