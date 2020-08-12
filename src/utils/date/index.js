export const getTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return hours + minutes + hours;
};

export const setDate = (dateOld) => {
  const year = dateOld.getFullYear();
  const month = dateOld.getMonth() + 1;
  const date = dateOld.getDate();

  return year + month + date;
};

export const getTimeChat = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
};

export const setDateChat = (dateOld) => {
  const year = dateOld.getFullYear();
  const month = dateOld.getMonth() + 1;
  const date = dateOld.getDate();

  return `${year}-${month}-${date}`;
};
