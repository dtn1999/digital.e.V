import React from "react";
import { IconBaseProps } from "react-icons";
import SpinnerComponent from "./Spinner";
import loadable from "@loadable/component";

const camel2title = (camelCase: string) =>
  camelCase &&
  camelCase
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim();

interface Props extends IconBaseProps {
  icon: string;
}

const ReactIconsLoader: React.FC<Props> = React.memo(({ ...props }) => {
  const { icon, ...rest } = props;
  React.useEffect(() => {}, [icon]);

  if (!icon || !icon.trim()) {
    return null;
  } else {
    const iconDetails = camel2title(icon).split(" ");
    const lib = iconDetails.shift();
    const Icon = loadable(
      async () => {
        return import(`react-icons/${lib?.toLowerCase()}/index.js`);
      },
      {
        resolveComponent: (el: JSX.Element) => el[icon as keyof JSX.Element],
        ssr: true,
        fallback: <SpinnerComponent />,
      }
    );

    return <Icon {...rest} />;
  }
});
export default ReactIconsLoader;
