import styled from "styled-components";
import { css } from "styled-components";

interface IProps {
  size: string;
  color: string;
}

export const ThemeButton = styled.button`
  color: black;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;

  ${(props: IProps) => {
    switch (props.size) {
      case "big":
        return css`
          height: 3rem;
          font-size: 1rem;
          font-weight: 500;
          padding: 0 1.375rem;
        `;
      case "small":
        return css`
          height: 2rem;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0 1rem;
        `;
      case "smaller":
        return css`
          height: 2rem;
          width: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
          display: flex;
          justify-content: center;
          align-items: center;
        `;
      default:
        return false;
    }
  }}

  ${(props: IProps) => {
    switch (props.color) {
      case "primary":
        return css`
          background-color: var(--primary-color);
          &:hover {
            background-color: var(--secondary-color);
          }
        `;
      case "secondary":
        return css`
          background-color: var(--secondary-color);
          &:hover {
            background-color: var(--tertiary-color);
          }
        `;
      case "red":
        return css`
          background-color: var(--alert);
          color: var(--grey-0);
          &:hover {
            background-color: var(--grey-0);
            color: var(--alert);
          }
        `;
      case "red2":
        return css`
          background-color: var(--grey-0);
          color: var(--alert);
          border: 2px solid var(--alert);
          &:hover {
            background-color: var(--alert);
            color: var(--grey-0);
          }
        `;
      case "dark-grey":
        return css`
          background-color: var(--grey-3);
          &:hover {
            background-color: var(--grey-2);
          }
        `;
      default:
        return false;
    }
  }}
`;
