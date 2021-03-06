// @Flow

import React from 'react';
import styled, { ThemeProvider, withTheme } from 'styled-components';
import { COLORS, ICONS } from '../Constants';
import Helper from '../Helper';

type IconProps = {
  name: string,
  color: string,
  size: number,
  transform: string,
  theme: { icon: {}, colors: {} },
};

const StyledIcon = styled.svg`
  display: inline-block;
  height: ${props => props.size};
  margin-top: -0.2em;
  vertical-align: middle;
  width: ${props => props.size};
  path {
    fill: ${props => props.getColor};
  }
`;

const Icon = (props: IconProps) => {
  const name = props.name && Helper.camelize(props.name);
  const icon = ICONS[name] || ICONS.question;
  const theme = {
    colors: {
      ...COLORS,
      ...props.theme.colors,
    },
  };
  const color = theme.colors[props.color] || props.color;
  return (
    <ThemeProvider theme={theme}>
      <StyledIcon
        aria-hidden="true"
        role="presentation"
        getColor={color}
        viewBox={`0 0 ${icon.width} ${icon.height}`}
        size={props.size}
        transform={icon.transform}
        {...props}
      >
        {icon.paths.map((path, index) => (
          <path key={index} d={path} />
        ))}
      </StyledIcon>
    </ThemeProvider>
  );
};

Icon.defaultProps = {
  color: 'currentColor',
  size: '1.1em',
  theme: {},
};

export default withTheme(Icon);
