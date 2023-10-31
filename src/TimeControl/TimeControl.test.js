import { Timespan } from "./TimeControl.Timespan";
import { __mocking__ } from "./TimeControl.__mocking__";
import { describe, test, expect } from "vitest";

describe("TimeControl", () => {
  describe("toDates", () => {
    test("basicDay", () => {
      return expect(
        Timespan.toDates(__mocking__.timespan.basicDay)
      ).toEqual(__mocking__.dates.basicDay);
    });

    test("basicMonth", () => {
      expect(
        Timespan.toDates(__mocking__.timespan.basicMonth)
      ).toEqual(__mocking__.dates.basicMonth);
    });

    test("basicYear", () => {
      expect(
        Timespan.toDates(__mocking__.timespan.basicYear)
      ).toEqual(__mocking__.dates.basicYear);
    });
  });

  describe("toTimespan", () => {
    test("basicDay", () => {
      return expect(
        Timespan.toTimespan({
          format: "day",
          start: __mocking__.dates.basicDay[0],
        })
      ).toEqual(__mocking__.timespan.basicDay);
    });

    test("basicMonth", () => {
      expect(
        Timespan.toTimespan({
          format: "month",
          start: __mocking__.dates.basicMonth[0],
        })
      ).toEqual(__mocking__.timespan.basicMonth);
    });

    test("basicYear", () => {
      expect(
        Timespan.toTimespan({
          format: "year",
          start: __mocking__.dates.basicYear[0],
        })
      ).toEqual(__mocking__.timespan.basicYear);
    });
  });
});
