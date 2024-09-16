import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: relative;
  max-width: 650px;
  max-height: 400px;
  margin-left: 20vh;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 1280px) {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Slide = styled.div<{ active: boolean }>`
  display: ${(props) => (props.active ? 'block' : 'none')};

  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
`;

export const Prev = styled.button`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 10px;
  font-size: 18px;
  background: transparent;
  color: white;
  border: none;
  padding: 10px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Next = styled(Prev)`
  left: auto;
  right: 10px;
`;
