// import { Timespan } from "./TimeControl.schema";

/**
 * @type {Record<string, Timespan>}
 */
export const __mocking__ = {
  timespan: {
    basicDay: {
      format: "day",
      day: 1,
      month: 3,
      year: 2021,
    },
    basicMonth: {
      format: "month",
      month: 3,
      year: 2021,
    },
    basicYear: {
      format: "year",
      year: 2021,
    },
  },

  dates: {
    basicDay: [
      new Date("03/01/2021"),
      new Date("03/02/2021"),
    ],

    basicMonth: [
      new Date("03/01/2021"),
      new Date("04/01/2021"),
    ],

    basicYear: [
      new Date("01/01/2021"),
      new Date("01/01/2022"),
    ],
  },
};
