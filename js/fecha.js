//Gracias el moment.unix generamos una fecha a aprtir de timestamp y le damos formato

const dateFormat = (time, format = 'DD/MM/YYYY') => {
    return moment.unix(time).format(format);
  };