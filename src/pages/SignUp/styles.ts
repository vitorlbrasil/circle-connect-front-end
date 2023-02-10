import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 23rem;
  padding: 2rem 0.75rem;
  gap: 2rem;

  .logoWrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      width: fit-content;
    }
  }
`;
