import React from "react";
import Image, { ImageProps } from "next/image";
import { useBase64BlurringImage } from "@app/components/Blocks/hooks/useRandomImage";
import classNames from "classnames";
import { BaseProps } from "@app/types";

interface Props extends BaseProps, Omit<ImageProps, "src"> {
  url: string;
}

const BlurringImage: React.FC<Props> = React.memo(({ ...props }) => {
  const { className, url} = props;
  const imageProps = useBase64BlurringImage(url);
  const { layout, objectFit, width, height , ...rest} = (imageProps as ImageProps) || {};
  return (
    <div className={classNames("relative h-full w-full", className)}>
      {imageProps && (
        <Image
          alt={imageProps.alt}
          layout={props.layout}
          objectFit={props.objectFit}
          width={props.width}
          height={props.height}
          {...rest}
          placeholder={imageProps.blurDataURL ? "blur" : "empty"}
        />
      )}
    </div>
  );
});
export default BlurringImage;
