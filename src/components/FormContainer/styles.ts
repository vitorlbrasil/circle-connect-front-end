import styled from "styled-components";

export const StyledFormContainer = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--primary-color);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    width: 100%;
  }

  .inputWrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;

    span {
      position: absolute;
      top: 4.5rem;
    }
  }

  input,
  select {
    height: 3rem;
    width: 100%;
    padding: 0 1rem;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    font-size: 1rem;
    color: black;
    background-color: var(--grey-0);
  }

  label {
    font-size: 0.875rem;
    color: black;
  }

  input:focus-visible {
    color: black;
    outline: 1px solid var(--grey-3);
  }

  .buttonWrapper {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
  }

  button {
    width: 100%;
  }
`;
