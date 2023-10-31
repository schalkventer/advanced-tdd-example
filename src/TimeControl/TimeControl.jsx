import { Timespan } from "./TimeControl.Timespan";

/**
 * @typedef {object} TimeControl
 * @prop {Format} format
 * @prop {[Date, Date]} range
 * @prop {(newRange: [Date, Date]) => void} onChange
 */

/**
 * @param {TimeControl} props
 * @returns {JSX.Element}
 */
export const TimeControl = (props) => {
  const { onChange, range, format } = props;
  const { year, day, month } = Timespan.toTimespan({
    format,
    start: range[0],
  });

  const createChangeHandler = (key) => (event) => {
    const { value } = event.target;
    const valueAsNumber = parseInt(value);

    onChange(
      Timespan.toDates({
        format,
        day: key === "day" ? valueAsNumber : day,
        month: key === "month" ? valueAsNumber : month,
        year: key === "year" ? valueAsNumber : year,
      })
    );
  };

  return (
    <>
      <div>
        {format === "day" && (
          <select
            value={day}
            onChange={createChangeHandler("day")}
          >
            {Timespan.calcArray({ month, year }).map(
              (inner) => (
                <option key={inner}>{inner}</option>
              )
            )}
          </select>
        )}

        {(format === "day" || format === "month") && (
          <select
            value={month}
            onChange={createChangeHandler("month")}
          >
            {Timespan.calcArray({ year }).map((inner) => (
              <option key={inner}>{inner}</option>
            ))}
          </select>
        )}

        <select
          value={year}
          onChange={createChangeHandler("year")}
        >
          {Timespan.calcArray({}).map((inner) => (
            <option key={inner}>{inner}</option>
          ))}
        </select>
      </div>
    </>
  );
};
