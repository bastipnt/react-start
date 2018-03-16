export const mockDate = (date) => {
  const constantDate = new Date(date);
  const now = Date.parse(constantDate);
  global.Date = class extends Date {
    constructor() { super(); return constantDate; }
  };
  Date.now = jest.spyOn(Date, 'now').mockImplementation(() => now);
  return now;
};
