import { Box, styled } from '@mui/material';
import clsx from 'clsx';
import { typography } from 'app/utils/constant';

// const StyledBox = styled(Box)(({ ellipsis, fontStyle }) => ({
//   fontFamily: fontStyle?.fontFamily,
//   fontSize: fontStyle?.fontSize,
//   lineHeight: fontStyle?.lineHeight,
//   letterSpacing: fontStyle?.letterSpacing,
//   fontWeight: fontStyle?.fontWeight || 500,
//   textTransform: fontStyle?.textTransform || 'none',
//   whiteSpace: ellipsis ? 'nowrap' : 'normal',
//   overflow: ellipsis ? 'hidden' : 'visible',
//   textOverflow: ellipsis ? 'ellipsis' : 'clip',
// }));
export const StyledBox = styled(Box)(({ fontStyle, ellipsis }) => ({
  fontFamily: fontStyle?.fontFamily,
  fontWeight: fontStyle?.fontWeight,
  fontSize: fontStyle?.fontSize,
  lineHeight: fontStyle?.lineHeight,
  letterSpacing: fontStyle?.letterSpacing,
  fontStyle: fontStyle?.fontStyle || 'normal',
  textTransform: fontStyle?.textTransform || 'none',
  whiteSpace: ellipsis ? 'nowrap' : 'normal',
  overflow: ellipsis ? 'hidden' : 'visible',
  textOverflow: ellipsis ? 'ellipsis' : 'clip',
}));
// ---------------- Headings ----------------
export const H1 = ({ children, className, ellipsis, ...props }) => (
  <StyledBox
    fontStyle={typography.h1}
    ellipsis={ellipsis}
    className={clsx(className)}
    component="h1"
    {...props}
  >
    {children}
  </StyledBox>
);

export const H2 = ({ children, className, ellipsis, ...props }) => (
  <StyledBox fontStyle={typography.h2} ellipsis={ellipsis} className={clsx(className)} component="h2" {...props}>
    {children}
  </StyledBox>
);

export const H3 = ({ children, className, ellipsis, ...props }) => (
  <StyledBox fontStyle={typography.h3} ellipsis={ellipsis} className={clsx(className)} component="h3" {...props} fontSize="28px">
    {children}
  </StyledBox>
);

export const H4 = ({ children, className, ellipsis, ...props }) => (
  <StyledBox fontStyle={typography.h4Regular} ellipsis={ellipsis} className={clsx(className)} component="h4Regular" {...props}>
    {children}
  </StyledBox>
);

export const H5 = ({ children, className, ellipsis, ...props }) => (
  <StyledBox fontStyle={typography.h5} ellipsis={ellipsis} className={clsx(className)} component="h5" {...props}>
    {children}
  </StyledBox>
);

export const H6 = ({ children, className, ellipsis, ...props }) => (
  <StyledBox fontStyle={typography.h6} ellipsis={ellipsis} className={clsx(className)} component="h6" {...props}>
    {children}
  </StyledBox>
);

// ---------------- Body ----------------
export const Paragraph = ({ children, className, ellipsis, ...props }) => (
  <StyledBox fontStyle={typography.bodyBase} ellipsis={ellipsis} className={clsx(className)} component="p" {...props}>
    {children}
  </StyledBox>
);

export const Small = ({ children, className, ellipsis, ...props }) => (
  <StyledBox fontStyle={typography.bodySmall} ellipsis={ellipsis} className={clsx(className)} component="small" {...props}>
    {children}
  </StyledBox>
);

export const Span = ({ children, className, ellipsis, ...props }) => (
  <StyledBox fontStyle={typography.bodyBase} ellipsis={ellipsis} className={clsx(className)} component="span" {...props}>
    {children}
  </StyledBox>
);

export const Tiny = ({ children, className, ellipsis, ...props }) => (
  <StyledBox
    fontStyle={{ ...typography.bodySmall, fontSize: '10px' }}
    ellipsis={ellipsis}
    className={clsx(className)}
    component="small"
    {...props}
  >
    {children}
  </StyledBox>
);

// ---------------- Display ----------------
export const DisplayXL = ({ children, className, ellipsis, ...props }) => (
  <StyledBox fontStyle={typography.displayXL} ellipsis={ellipsis} className={clsx(className)} component="dispalyXl" {...props}>
    {children}
  </StyledBox>
);

export const DisplayL = ({ children, className, ellipsis, ...props }) => (
  <StyledBox fontStyle={typography.displayL} ellipsis={ellipsis} className={clsx(className)} component="dispalyL" {...props}>
    {children}
  </StyledBox>
);

export const DisplayM = ({ children, className, ellipsis, ...props }) => (
  <StyledBox fontStyle={typography.displayM} ellipsis={ellipsis} className={clsx(className)} component="dispalyM" {...props}>
    {children}
  </StyledBox>
);


// import { Box, styled } from '@mui/material';
// import clsx from 'clsx';

// const StyledBox = styled(Box)(({ theme, textTransformStyle, ellipsis }) => ({
//   textTransform: textTransformStyle || 'none',
//   whiteSpace: ellipsis ? 'nowrap' : 'normal',
//   overflow: ellipsis ? 'hidden' : '',
//   textOverflow: ellipsis ? 'ellipsis' : '',
// }));

// export const H1 = ({ children, className, ellipsis, textTransform, ...props }) => {
//   return (
//     <StyledBox
//       textTransformStyle={textTransform}
//       ellipsis={ellipsis}
//       className={clsx({ [className || '']: true })}
//       component="h1"
//       mb={0}
//       mt={0}
//       fontSize="28px"
//       fontWeight="500"
//       lineHeight="1.5"
//       {...props}
//     >
//       {children}
//     </StyledBox>
//   );
// };

// export const H2 = ({ children, className, ellipsis, textTransform, ...props }) => {
//   return (
//     <StyledBox
//       textTransformStyle={textTransform}
//       ellipsis={ellipsis}
//       className={clsx({ [className || '']: true })}
//       component="h2"
//       mb={0}
//       mt={0}
//       fontSize="24px"
//       fontWeight="500"
//       lineHeight="1.5"
//       {...props}
//     >
//       {children}
//     </StyledBox>
//   );
// };

// export const H3 = ({ children, className, ellipsis, textTransform, ...props }) => {
//   return (
//     <StyledBox
//       textTransformStyle={textTransform}
//       ellipsis={ellipsis}
//       className={clsx({ [className || '']: true })}
//       component="h3"
//       mb={0}
//       mt={0}
//       fontSize="18px"
//       fontWeight="500"
//       lineHeight="1.5"
//       {...props}
//     >
//       {children}
//     </StyledBox>
//   );
// };

// export const H4 = ({ children, className, ellipsis, textTransform, ...props }) => {
//   return (
//     <StyledBox
//       textTransformStyle={textTransform}
//       ellipsis={ellipsis}
//       className={clsx({
//         [className || '']: true,
//       })}
//       component="h4"
//       mb={0}
//       mt={0}
//       fontSize="16px"
//       fontWeight="500"
//       lineHeight="1.5"
//       {...props}
//     >
//       {children}
//     </StyledBox>
//   );
// };

// export const H5 = ({ children, className, ellipsis, textTransform, ...props }) => {
//   return (
//     <StyledBox
//       textTransformStyle={textTransform}
//       ellipsis={ellipsis}
//       className={clsx({
//         [className || '']: true,
//       })}
//       component="h5"
//       mb={0}
//       mt={0}
//       fontSize="14px"
//       fontWeight="500"
//       lineHeight="1.5"
//       {...props}
//     >
//       {children}
//     </StyledBox>
//   );
// };

// export const H6 = ({ children, className, ellipsis, textTransform, ...props }) => {
//   return (
//     <StyledBox
//       textTransformStyle={textTransform}
//       ellipsis={ellipsis}
//       className={clsx({
//         [className || '']: true,
//       })}
//       component="h6"
//       mb={0}
//       mt={0}
//       fontSize="13px"
//       fontWeight="500"
//       lineHeight="1.5"
//       {...props}
//     >
//       {children}
//     </StyledBox>
//   );
// };

// export const Paragraph = ({ children, className, ellipsis, textTransform, ...props }) => {
//   return (
//     <StyledBox
//     texttransformstyle={textTransform}
//       ellipsis={ellipsis}
//       className={clsx({
//         [className || '']: true,
//       })}
//       component="p"
//       mb={0}
//       mt={0}
//       fontSize="14px"
//       {...props}
//     >
//       {children}
//     </StyledBox>
//   );
// };

// export const Small = ({ children, className, ellipsis, textTransform, ...props }) => {
//   return (
//     <StyledBox
//       textTransformStyle={textTransform}
//       ellipsis={ellipsis}
//       className={clsx({
//         [className || '']: true,
//       })}
//       component="small"
//       fontSize="12px"
//       fontWeight="500"
//       lineHeight="1.5"
//       {...props}
//     >
//       {children}
//     </StyledBox>
//   );
// };

// export const Span = ({ children, className, ellipsis, textTransform, ...props }) => {
//   return (
//     <StyledBox
//       textTransformStyle={textTransform}
//       ellipsis={ellipsis}
//       className={clsx({
//         [className || '']: true,
//       })}
//       component="span"
//       lineHeight="1.5"
//       {...props}
//     >
//       {children}
//     </StyledBox>
//   );
// };

// export const Tiny = ({ children, className, ellipsis, textTransform, ...props }) => {
//   return (
//     <StyledBox
//       textTransformStyle={textTransform}
//       ellipsis={ellipsis}
//       className={clsx({
//         [className || '']: true,
//       })}
//       component="small"
//       fontSize="10px"
//       lineHeight="1.5"
//       {...props}
//     >
//       {children}
//     </StyledBox>
//   );
// };
