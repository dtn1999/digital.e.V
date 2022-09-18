import React from "react";
import ReactCountUp, { CountUpProps } from "react-countup";
import { useInView } from "react-intersection-observer";

const CountUp: React.FC<CountUpProps> = React.memo(({ ...props }) => {
  const [startValue, setStartValue] = React.useState<number>();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const { redraw, ...rest } = props;

  React.useEffect(() => {
    if (inView) {
      setStartValue(0);
    } else {
      setStartValue(undefined);
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <ReactCountUp start={startValue} redraw {...rest} />
    </div>
  );
});
export default CountUp;
