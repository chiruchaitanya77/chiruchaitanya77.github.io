import styled from "styled-components";
import { socialIcons } from "../data/constants";

const SocialIcon = styled.span.attrs({ "aria-hidden": true })`
  display: inline-block;
  width: 24px;
  height: 24px;
  background-color: currentColor;
  mask: url(${({ $platform }) => socialIcons[$platform]}) center / contain no-repeat;
`;

export default SocialIcon;
