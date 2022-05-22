import React from 'react';
import { Slide, Dialog } from '@mui/material';
import { DialogProps } from 'src/components/Dialog/Dialog';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<DialogProps, typeof Dialog>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default Transition;
