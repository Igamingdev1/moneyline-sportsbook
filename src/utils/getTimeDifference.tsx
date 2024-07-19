const getTimeDifference = (date: string) => {
  const currentDate = new Date();
  const newDate = new Date(date);
  const convertedDate = new Date(
    Date.UTC(
      newDate.getUTCFullYear(),
      newDate.getUTCMonth(),
      newDate.getUTCDate(),
      newDate.getHours(),
      newDate.getMinutes(),
      newDate.getMinutes()
    )
  );
  let difference = Math.floor(
    (currentDate.getTime() - convertedDate.getTime()) / (1000 * 60)
  );
  if (difference > 1440) {
    difference = Math.floor(difference / 60 / 24);
    if (difference === 1) {
      return difference + " Day ago";
    } else {
      return difference + " Days ago";
    }
  } else if (difference > 60) {
    difference = Math.floor(difference / 60);
    if (difference === 1) {
      return difference + " Hour ago";
    } else {
      return difference + " Hours ago";
    }
  } else {
    if (difference === 1) {
      return difference + " Minute ago";
    } else {
      return difference + " Minutes ago";
    }
  }
};

export default getTimeDifference;
