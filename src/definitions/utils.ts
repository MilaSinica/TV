export const getError = (error: any, errorType?: string): string => {
    const errorMessage = typeof error?.message === 'string' ? error.message : (typeof error?.data === 'string' ? error?.data : 'Something went wrong');

    return `${errorType ? `${errorType}:` : ''} ${errorMessage || 'Something went wrong'}.`;
}