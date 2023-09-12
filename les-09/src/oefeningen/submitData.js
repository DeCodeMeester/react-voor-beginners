function submitData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.name && data.name === 'error') {
        return reject('Something went wrong!');
      }

      return resolve(true);
    }, 2000);
  });
}

export default submitData;
