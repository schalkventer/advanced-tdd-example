import { getDaysInMonth } from "date-fns";

/**
 * @typedef {'day' | 'month' | 'year'} Format
 */

/**
 * @typedef {Object} Timespan
 *
 * @prop {Format} format - A serializable descriminant union that indicates what
 * specific values are required in the object.
 *
 * @prop {number} [day] - The day of the month, for example `1` or `31`
 *
 * @prop {number} [month] - The month as a number for example February will be
 * `2`
 *
 * @prop {number} year - The full year as a number for example `2021`
 */

export const Timespan = {
  /**
   * @param {object} props
   * @param {Format} props.format
   * @param {Date} props.start
   * @returns
   */
  toTimespan: (props) => {
    const { format, start } = props;
    const year = start.getFullYear();

    if (format === "year") {
      return {
        format: "year",
        year,
      };
    }

    const month = start.getMonth() + 1;

    if (format === "month") {
      return {
        format: "month",
        year,
        month,
      };
    }

    const day = start.getDate();

    if (format === "day") {
      return {
        format: "day",
        year,
        month,
        day,
      };
    }
  },

  /**
   * @param {Timespan} props
   * @returns {[Date, Date]}
   */
  toDates: (props) => {
    const { format, day, month, year } = props;

    if (format === "year") {
      return [
        new Date(`01/01/${year}`),
        new Date(`01/01/${year + 1}`),
      ];
    }

    if (!month) throw new Error("Month value is required");

    if (format === "month") {
      return [
        new Date(
          `${month.toString().padStart(2, "0")}/01/${year}`
        ),
        new Date(
          `${(month + 1)
            .toString()
            .padStart(2, "0")}/01/${year}`
        ),
      ];
    }

    if (!day) throw new Error("Day value is required");

    if (format === "day") {
      return [
        new Date(
          `${month}/${day
            .toString()
            .padStart(2, "0")}/${year}`
        ),
        new Date(
          `${month}/${(day + 1)
            .toString()
            .padStart(2, "0")}/${year}`
        ),
      ];
    }
  },

  /**
   * @param {object} props
   * @param {number} [props.year]
   * @param {number} [props.month]
   */
  calcArray: (props) => {
    const { year, month } = props;
    if (year && month) {
      const daysCount = getDaysInMonth(
        new Date(`${month}/01/${year}`)
      );

      return new Array(daysCount)
        .fill(1)
        .map((inner, index) => inner + index);
    }

    if (year)
      return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return [2020, 2021, 2022, 2023];
  },
};
