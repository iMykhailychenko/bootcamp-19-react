import styled from 'styled-components';

const config = {
  padding: '20px',
};

const ButtonStyled = styled.button`
  font-size: 20px;
  text-align: center;
  color: red;

  padding: ${config.padding};
`;

export const Button = () => {
  return (
    <ButtonStyled>
      <span className="text">text</span>
      click me
    </ButtonStyled>
  );
};
