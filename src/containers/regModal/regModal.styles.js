import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 860px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 24;
  display: flex;
  transition: 6s;
`;

export const ModalClose = styled.button`
  background-color: #fff;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  right: -15px;
  top: -15px;
  border: none;
  display: flex;
  align-items: center;

  :hover {
    background-color: #008dff;
    color: #fff;
  }
`;

export const ModalLeft = styled.div`
  padding: 45px 30px;
  background-color: #fff;
  border-radius: 15px 0 0 15px;
  width: 50%;
`;

export const ModalTitle = styled.h1`
  margin: 0 0 30px;
  font-size: 24px;
  font-weight: 700;
  color: #0f172a;
  line-height: 32px;
  text-align: center;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ModalTelInputWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ModalTelLabel = styled.label`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  color: #999a9e;
  display: inline-block;
  margin-bottom: 0.5rem;
`;

export const ModalTelInput = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 4px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #5f5f5f;
  background-color: #fff;
  background-clip: padding-box;
  border: 2px solid #c2c6d1;
  border-radius: 8px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
`;

export const ModalNumberInputError = styled.span`
  font-size: 12px;
  color: red;
  font-weight: 600;
`;

export const ModalBtn = styled.button`
  margin-bottom: 20px;
  padding: 14px 20px;
  width: 100%;
  font-size: 14px;
  background-color: #008dff;
  border: none;
  font-size: 14px;
  color: #fff;
  border-radius: 10px;

  :hover {
    opacity: 0.7;
    transition: ease 0.2s;
    cursor: pointer;
  }
`;

export const ModalLeftOr = styled.p`
  margin: 0 0 16px;
  text-align: center;
  display: flex;
  align-items: center;

  ::before {
    margin-right: 8px;
    content: "";
    display: inline-block;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  ::after {
    margin-left: 8px;
    content: "";
    display: inline-block;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
`;

export const ModalLeftApps = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalLeftLinkedn = styled.a`
  margin: 0 6px;
  padding: 10px 40px;
  text-decoration: none;
  background-color: #f2f2f7;
  display: flex;
  align-items: center;
  border-radius: 6px;

  :hover {
    opacity: 0.7;
  }
`;

export const ModalRight = styled.div`
  padding: 45px 30px;
  background-color: #f2f2f7;
  border-radius: 0 15px 15px 0;
  width: 50%;
`;
