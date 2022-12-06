import { BaseProps } from "@app/types";
import { CountUpFragment } from "@app/types/graphql";
import { storyblokEditable } from "@storyblok/react";
import React from "react";
import ReactCountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface Props {
  blok: any;
}
const CountUp: React.FC<Props & BaseProps> = React.memo(({ ...props }) => {
  const [startValue, setStartValue] = React.useState<number>();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { blok, className } = props;

  React.useEffect(() => {
    if (inView) {
      setStartValue(0);
    } else {
      setStartValue(undefined);
    }
  }, [inView]);
  return (
    <div {...storyblokEditable(blok)} ref={ref}>
      <ReactCountUp
        start={startValue}
        end={blok.to}
        redraw
        className="text-5xl font-bold text-primary"
      />
    </div>
  );
});
export default CountUp;
