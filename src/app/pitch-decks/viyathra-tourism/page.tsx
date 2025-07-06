"use client";

import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const PasswordContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const PasswordForm = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(20, 20, 20, 0.6) 50%, rgba(0, 0, 0, 0.4) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  padding: 3.5rem;
  backdrop-filter: blur(16px);
  max-width: 450px;
  width: 100%;
  text-align: center;
  position: relative;
  z-index: 2;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  margin-left: 4rem;
`;

const Title = styled.h1`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  background: linear-gradient(90deg, #fff 10%, #bfa14a 50%, #fff 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 16px #a68a2a88);
  text-shadow: 0 0 32px #bfa14a44;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: 1rem;
  color: #b0c4de;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.4);
  color: #fff;
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: 1rem;
  margin-bottom: 2rem;
  outline: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(8px);

  &:focus {
    border-color: #bfa14a;
    box-shadow: 0 0 20px rgba(191, 161, 74, 0.2);
    background: rgba(0, 0, 0, 0.6);
  }

  &::placeholder {
    color: #888;
  }
`;

const Button = styled(motion.button)`
  background: linear-gradient(90deg, #bfa14a 0%, #f5e7b2 100%);
  border: none;
  padding: 1.1rem 2.5rem;
  border-radius: 2rem;
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(191, 161, 74, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(191, 161, 74, 0.3);
    filter: drop-shadow(0 0 8px #bfa14a44);
  }

  &:hover::before {
    left: 100%;
  }
`;

const ErrorMessage = styled(motion.p)`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: 1rem;
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
`;

const ContentContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
`;

const ContentTitle = styled.h1`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #bfa14a;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 0 0 16px #a68a2a66;
`;

const ContentText = styled.p`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #b0c4de;
  max-width: 800px;
  margin: 0 auto 2rem;
  text-align: center;
  opacity: 0.9;
`;

export default function ViyathraTourismPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "atlantis333") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <PasswordContainer>
        <VideoBackground autoPlay loop muted playsInline>
          <source src="/com-video2.mp4" type="video/mp4" />
        </VideoBackground>
        <Overlay />
        <PasswordForm
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>Viyathra</Title>
          <Subtitle>Enter password to access the pitch deck</Subtitle>
          <form onSubmit={handlePasswordSubmit}>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <Button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Access Pitch Deck
            </Button>
          </form>
          {error && (
            <ErrorMessage
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {error}
            </ErrorMessage>
          )}
        </PasswordForm>
      </PasswordContainer>
    );
  }

  return (
    <ContentContainer>
      <ContentTitle>Viyathra</ContentTitle>
      <ContentText>
        A next-gen travel app for Sri Lanka. From e-visa, verified transport, and itinerary curation to emergency contacts and ride-sharing — Viyathra is your entire trip, simplified.
      </ContentText>
      <ContentText>
        Pitch deck content will be available here soon. This is a protected area for future presentation materials.
      </ContentText>
    </ContentContainer>
  );
} 