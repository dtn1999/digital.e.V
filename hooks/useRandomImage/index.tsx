/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { TAsset } from "@app/types";
import {
  getBase64EncodingFromUri,
  getRandomPexelsImage,
  PexelsImageSize,
} from "@app/utils/images";
import useSwr from "swr";
import { ImageProps } from "next/image";

interface Argument {
  size?: PexelsImageSize;
  query?: string;
}

export function usePexelsRandomImage(arg?: Argument) {
  const { size, query } = arg || {};
  const [image, setImage] = React.useState<TAsset>();
  const getImage = React.useCallback(async () => {
    const photo = await getRandomPexelsImage(size, query);
    setImage(photo);
  }, []);
  React.useEffect(() => {
    getImage();
  }, []);
  return image;
}

const fetcher = (url: string) =>
  fetch(url, { method: "POST" }).then((res) => res.json());

export function useBase64BlurringImage(uri: string) {
  const [imageProps, setImageProps] = React.useState<ImageProps>();
  React.useEffect(() => {
    getBase64EncodingFromUri(uri).then(setImageProps);
  }, []);
  return imageProps;
}
