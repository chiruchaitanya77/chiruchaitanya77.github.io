import React, { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { trackEvent } from "../../utils/analytics";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`  
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ theme }) => theme.primary};
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;

  &:hover:enabled {
    transform: scale(1.05);
  }

  &:active:enabled {
    transform: scale(0.95);
  }

  &:disabled {
    cursor: wait;
    opacity: 0.8;
  }
`;

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSending) return;

    const form = event.currentTarget;
    setIsSending(true);
    toast.promise(
      async () => {
        try {
          await emailjs.sendForm("service_gymc422", "template_adrw5rr", form, "XzaK1mx3iYusQomMO");
          form.reset();
          trackEvent("generate_lead");
        } finally {
          setIsSending(false);
        }
      },
      {
        loading: "Sending your message…",
        success: "Your message was sent.",
        error: "Your message couldn’t be sent. Please try again.",
      },
      {
        id: "contact-message",
        error: { ariaProps: { role: "alert", "aria-live": "assertive" } },
      }
    );
  };

  return (
      <Container id="Contact">
        <Wrapper>
          <Title>Contact</Title>
          <Desc
              style={{
                marginBottom: "40px",
              }}
          >
            Feel free to reach out to me for any questions or opportunities!
          </Desc>
          <ContactForm onSubmit={handleSubmit} aria-busy={isSending}>
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput
                placeholder="Your Email"
                name="from_email"
                type="email"
                readOnly={isSending}
                required
            />
            <ContactInput
                placeholder="Your Name"
                name="from_name"
                type="text"
                readOnly={isSending}
                required
            />
            <ContactInput
                placeholder="Subject"
                name="subject"
                type="text"
                readOnly={isSending}
                required
            />
            <ContactInputMessage
                placeholder="Message"
                name="message"
                rows={4}
                readOnly={isSending}
                required
            />
            <ContactButton type="submit" disabled={isSending}>
              {isSending ? "Sending…" : "Send"}
            </ContactButton>
          </ContactForm>
        </Wrapper>
      </Container>
  );
};

export default Contact;
