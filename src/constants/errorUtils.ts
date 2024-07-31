import {FetchBaseQueryError} from '@reduxjs/toolkit/query';

type CustomError = FetchBaseQueryError | {message?: string};

export const getErrorMessage = (error: CustomError): string => {
  if ('status' in error) {
    // Handle FetchBaseQueryError
    const fetchError = error as FetchBaseQueryError;
    if (
      fetchError.data &&
      typeof fetchError.data === 'object' &&
      'message' in fetchError.data
    ) {
      return (fetchError.data as {message: string}).message;
    }
  } else if ('message' in error) {
    // Handle SerializedError or other errors with message property
    return error.message || 'Unknown error occurred';
  }

  return 'Unknown error occurred';
};
