export const validateString = (
  value: unknown,
  maxLength: number
): value is string => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false;
  }

  return true;
};

export const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message;
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Something went wrong';
  }

  return message;
};

export const getYearsOfExp = (): number => {
  const currDate = new Date();
  const startDate = new Date(2018, 8, 1);
  const timeDifference = currDate.getTime() - startDate.getTime();
  return Math.ceil(timeDifference / (365.25 * 24 * 60 * 60 * 1000));
};
