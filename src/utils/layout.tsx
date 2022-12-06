interface StyleProps {
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  flexDirection?: any;
  justifyContent?: any;
  alignItems?: any;
  flexWrap?: any;
}

export const extractSpacingProps = (props: any): StyleProps => {
  if (!props) {
    return {};
  }

  const {
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
  } = props;
  return {
    marginTop: Number(marginTop) || undefined,
    marginBottom: Number(marginBottom) || undefined,
    marginLeft: Number(marginLeft) || undefined,
    marginRight: Number(marginRight) || undefined,
    paddingTop: Number(paddingTop) || undefined,
    paddingBottom: Number(paddingBottom) || undefined,
    paddingLeft: Number(paddingLeft) || undefined,
    paddingRight: Number(paddingRight) || undefined,
  };
};
