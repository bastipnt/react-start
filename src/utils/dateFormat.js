// @flow
export const toWeekDay = (rawDate: Date): string => rawDate.toLocaleDateString('en-US', { weekday: 'long' });

export const toDay = (rawDate: Date): string => rawDate.toLocaleDateString('en-US', { day: '2-digit' });

export const toMonth = (rawDate: Date): string => rawDate.toLocaleDateString('en-US', { month: 'long' });
