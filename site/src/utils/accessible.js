import React, { Fragment, forwardRef } from 'react';

import styled from 'styled-components';

let ret = {};

const accessibleStyles = {
  position: 'absolute',
  height: 1,
  width: 1,
  overflow: 'hidden',
  padding: 0,
  border: 0,
  whiteSpace: 'nowrap',
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'inset(50%)',
};

// Wrap every styled-components tag and have it create 2 elements instead of one
// One with aria-hidden="true" and one with styles to hide it but still have it be
// accessible by screen readers
Object.entries(styled).forEach(([tag, fn]) => {
  ret[tag] = (...args) => {
    const Visible = fn(...args);
    const Hidden = fn(...args);

    const AccessibleComponent = ({ altText, children, ...props }, ref) => {
      return (
        <Fragment>
          <Visible aria-hidden="true" ref={ref} {...props}>
            {children}
          </Visible>
          <Hidden {...props} style={{ ...accessibleStyles, ...props.style }}>
            {altText ?? children}
          </Hidden>
        </Fragment>
      );
    };

    return forwardRef(AccessibleComponent);
  };
});

export const accessible = ret;
