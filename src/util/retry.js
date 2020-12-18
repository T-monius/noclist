const retry = async(asyncCallback, maxAttempts=3) => {
  try {
    return await asyncCallback();
  } catch(err) {
    if (maxAttempts < 1) {
      throw 'Too many attempts.';
    }

    retry(callback, maxAttempts - 1);
  };
};

export { retry };