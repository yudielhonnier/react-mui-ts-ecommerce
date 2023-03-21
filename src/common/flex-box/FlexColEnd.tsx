import { Box, BoxProps } from '@mui/material';

const FlexColEnd: React.ElementType = ({
  children,
  ...props
}: {
  children: React.ReactNode;
  props: BoxProps;
}) => (
  <Box
    display='flex'
    flexDirection='column'
    justifyContent='center'
    alignItems='flex-end'
    {...props}
  >
    {children}
  </Box>
);

export default FlexColEnd;
