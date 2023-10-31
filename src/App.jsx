import { useState } from "react";
import { faker } from "@faker-js/faker";
import { TimeControl } from "./TimeControl";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Nov",
  "Dec",
];

const items = new Array(2000).fill(null).map(() => ({
  id: faker.string.uuid(),
  title: faker.lorem.words(2),
  date: faker.date.past({
    years: 4,
  }),
}));

export const App = () => {
  const [range, setRange] = useState([
    new Date("02/01/2022"),
    new Date("03/01/2022"),
  ]);

  return (
    <>
      <TimeControl
        format="month"
        onChange={setRange}
        range={range}
      />

      <ul>
        {items
          .filter(({ date }) => {
            return date.getTime() > range[0];
          })
          .filter(({ date }) => {
            return date.getTime() < range[1];
          })
          .map(({ id, title, date }) => (
            <li key={id}>
              {title} (
              <span>
                {date.getDate().toString().padStart(2, "0")}
              </span>
              <span> {MONTHS[date.getMonth()]}. </span>
              <span>{date.getFullYear()})</span>
            </li>
          ))}
      </ul>
    </>
  );
};
