import styled from "styled-components";
import { number } from "prop-types";

interface TextProps {
  weight?: number;
  size?: number;
}

function getTextSize({ size = 16 }: TextProps) {
  return `${size}px`;
}

export const Text = styled.p<TextProps>`
  margin: 0;
  padding: 0;
  font-size: ${getTextSize};
  font-weight: ${props => props.weight};
`;
