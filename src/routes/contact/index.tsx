import * as React from "react";
import styled, { keyframes } from "styled-components";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";

import Home from 'icons/Home';
import ErrorWarning from "components/ErrorWarning";
import { postRequest, IFormInput, errorMsg } from "./constants";
import { EmailInput } from "components/EmailInput";
import { Subtitle } from "components/FramerMotions";
import { SubmitButton } from "components/SubmitButton";
import LayersContainer from "components/LayersContainer";



function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const emailWarning = "a valid email format is required.";
  const messageWarning= "message must not be empty.";
 

  const [isOver, setIsOver] = React.useState(false);
  const navigate = useNavigate();

  function handleButtonEvent() {
    navigate(-1);
  }

  const response = useMutation((data: IFormInput) => postRequest(data));
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    response.mutateAsync(data);
  };
  //const message = response?.data?.message || response?.data;
  console.log(errors)
  return (
    <ContactContainer>
      <Contactform onSubmit={handleSubmit(onSubmit)}>
        <BackwardsButton onClick={ ()=> { handleButtonEvent() }}>
              <Home fontSize='25px' color='#ffffff' />
        </BackwardsButton>
        <EmailInputContainer>
          <MainTitle style={{ color: errors?.hasOwnProperty("email") ? '#ff0000': '#ffffff', transition: '1s' }} >
              Contact Me
          </MainTitle>
          <InputLabel htmlfor="email" className={isOver ? "upwards" : "normal"}>
            Your email
          </InputLabel>
          <ContactEmailInput
            id="email"
            onMouseEnter={() => {
              setIsOver(true);
            }}
            onMouseLeave={() => {
              setIsOver(false);
            }}
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
        <ErrorWarning label="email" errors={errors} info={emailWarning} color='#ffffff' />  
        </EmailInputContainer>
        <TextInputContainer>
          <InputLabel htmlfor="message" className={ isOver ? 'upwards' : 'normal' }>
            Your message
          </InputLabel>
          <TextArea 
            className= { errors?.hasOwnProperty('message') && 'messageError'}
            name="message"
            onMouseEnter={() => {
              setIsOver(true);
            }}
            onMouseLeave={() => {
              setIsOver(false);
            }}
            {...register("message", {
              required: true,
            })}
          >
          </TextArea>
          <ErrorWarning label="message" errors={errors} info={messageWarning} color='#ffffff' /> 
        </TextInputContainer>
        <SubmitButton className={ isOver ? "downwards" : "upwards" } >
          { isOver ? 'Hello' : 'Send' }
        </SubmitButton>
      </Contactform>
    </ContactContainer>
  );
}

export default Contact;
const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .upwards {
    position: relative;
    bottom: 10px;
  }
  .downwards {
    position: relative;
    bottom: -10px;
  }
  .normal {
    position: static;
  }
    background-image: url('./images/violet.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`;
const MainTitle = styled( Subtitle )`
    color: #ffffff;
    margin-bottom: 1em;
`;
const Contactform = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 600px;
  min-width: 320px;
  min-height: 500px;
  background-color: #00000090;
  border-radius: 20px;
  padding: 2em 0;
  .upwards {
    position: relative;
    bottom: 10px;
  }
  .downwards {
    position: relative;
    bottom: -10px;
  }
  .normal {
    position: static;
  }
`;
const EmailInputContainer = styled.div`
  text-align: left;
`;
const TextInputContainer = styled.div`
 text-align: left;
 margin: 1em 0;
 .messageError {
    animation: 1s ${ errorMsg };
  }
`;
const InputLabel = styled.label.attrs((props) => ({ htmlFor: props.htmlfor }))`
  color: #ffffff;
  display: block;
  transition: 1s;
`;
const ContactEmailInput = styled(EmailInput)`
 padding: 1em;
 color: #ffffff;
 cursor: pointer;
 border-radius: 10px;
 background-color: transparent;
`;
const TextArea = styled.textarea`
  padding: 1em;
  height: 5em;
  resize: none;
  border-radius: 10px;
  color: #f1f1f1;
  background-color: #00000090;
`;
const BackwardsButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  outline: none;
  border: none;
  color: #ffffff;
  background-color: transparent;
`;
