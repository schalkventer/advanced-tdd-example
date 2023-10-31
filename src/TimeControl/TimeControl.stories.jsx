// import { Timespan } from "./TimeControl.Timespan";
import { TimeControl } from "./TimeControl";
import { __mocking__ } from "./TimeControl.__mocking__";

const meta = {
  title: "components/TimeControl",
};

export default meta;

export const BasicDay = () => (
  <TimeControl timespan={__mocking__.timespan.basicDay} />
);

export const BasicMonth = () => (
  <TimeControl timespan={__mocking__.timespan.basicMonth} />
);

export const BasicYear = () => (
  <TimeControl timespan={__mocking__.timespan.basicYear} />
);
