const retry = async(asyncCallback, maxAttempts=3) => {
  try {
    return await asyncCallback();
  } catch(err) {
    if (maxAttempts <= 1) {
      throw 'Too many attempts.';
    }

    console.error(err);
    maxAttempts -= 1;
    retry(asyncCallback, maxAttempts);
  };
};

export { retry };