import styled from '@emotion/styled';

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const FileInput = styled.input`
  width: 100%;
  color: #7e7e7e;
  padding: 0;

  border-radius: 4px;
  height: 54px;

  &::file-selector-button {
    margin-right: 16px;
    background-color: inherit;
    border: 1px solid rgba(0, 0, 0, 0.87);

    color: #000000;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
  }
`;

export const Radio = styled.input`
  font-size: 16px;
  line-height: 1.62;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
`;

export const TextInput = styled.input``;

export const PhoneExample = styled.p`
  font-size: 12px;
  line-height: 14px;
  margin-left: 16px;

  color: #7e7e7e;
  position: absolute;
`;

export const Section = styled.section`
  padding-top: 140px;
  padding-bottom: 100px;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const RadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const FormButton = styled.button`
  background-color: #f4e041;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 80px;
  border: none;
  width: 100px;
  padding: 4px 22px;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;

  &:disabled {
    color: #ffffff;
    background-color: #b4b4b4;
    cursor: default;
  }
`;
