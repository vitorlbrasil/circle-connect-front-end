import styled from "styled-components";

export const DashboardFrameDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.25rem;

  > div {
    width: 100%;
    max-width: 23rem;
    padding: 0 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.25rem;
  }
`;
