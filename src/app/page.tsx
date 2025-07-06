'use client';

import styled, { keyframes } from 'styled-components';
import { motion, easeInOut } from 'framer-motion';
import { useRouter } from 'next/navigation';
import '@fontsource/space-grotesk/700.css';
import '@fontsource/space-grotesk/400.css';



const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
`;

const VideoBg = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
  opacity: 0.18;
`;

const Content = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 2;
  margin: 0;
  padding: 0;
  display: block;
`;

const Hero = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  text-align: left;
  gap: 2.2rem;
  padding-left: 38px;
  padding-bottom: 8vh;
  
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
    gap: 1.5rem;
    padding-bottom: 6vh;
  }
  
  @media (max-width: 480px) {
    padding-left: 16px;
    padding-right: 16px;
    gap: 1.2rem;
    padding-bottom: 4vh;
  }
`;

const Name = styled(motion.h1)`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: clamp(3.5rem, 8vw, 7rem);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.05;
  margin-bottom: 0.7rem;
  background: linear-gradient(90deg, #fff 10%, #bfa14a 50%, #fff 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 16px #a68a2a88);
  text-shadow: 0 0 32px #bfa14a44;
  transition: filter 0.3s;
`;

const Title = styled(motion.h2)`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: clamp(1.3rem, 3vw, 2.4rem);
  font-weight: 400;
  color: #f5e7b2;
  margin-bottom: 2.5rem;
  letter-spacing: 0.01em;
  line-height: 1.15;
  opacity: 0.92;
  text-shadow: 0 2px 24px #a68a2a44, 0 0 8px #fff2, 0 0 2px #bfa14a33;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StoryButton = styled(motion.a)`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 1.1rem 3.2rem;
  border-radius: 2.5rem;
  background: linear-gradient(90deg, #bfa14a 0%, #f5e7b2 100%);
  color: #000;
  font-weight: 700;
  font-size: 1.18rem;
  letter-spacing: 0.03em;
  text-decoration: none;
  box-shadow: 0 2px 32px 0 #a68a2a33;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.2s, filter 0.2s;
  cursor: pointer;
  border: none;
  outline: none;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 0 12px #bfa14a66);

  &:hover {
    background: linear-gradient(90deg, #f5e7b2 0%, #bfa14a 100%);
    color: #000;
    transform: translateY(-4px) scale(1.06);
    box-shadow: 0 8px 40px 0 #a68a2a55;
    filter: drop-shadow(0 0 32px #bfa14acc);
  }
`;



const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 200px;
  height: 200px;
  border: 1px solid rgba(191, 161, 74, 0.1);
  border-radius: 50%;
  pointer-events: none;
`;

const cosmicFloat = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
  25% { transform: translateY(-20px) rotate(90deg); opacity: 0.6; }
  50% { transform: translateY(-40px) rotate(180deg); opacity: 0.8; }
  75% { transform: translateY(-20px) rotate(270deg); opacity: 0.6; }
`;

const starfield = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  100% { transform: translateY(-1000px) rotate(360deg); }
`;

const VisionSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #0a0a0a 25%, #000000 50%, #0a0a0a 75%, #000000 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 4rem 2rem;
`;

const CosmicBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const Star = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: radial-gradient(circle, #bfa14a 0%, #f5e7b2 50%, transparent 100%);
  border-radius: 50%;
  animation: ${starfield} 20s linear infinite;
  opacity: 0.6;
`;

const FloatingOrb = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(circle, #bfa14a 0%, transparent 70%);
  border-radius: 50%;
  animation: ${cosmicFloat} 8s ease-in-out infinite;
  filter: blur(1px);
`;

const VisionContent = styled.div`
  max-width: 900px;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const VisionTitle = styled(motion.h2)`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  background: linear-gradient(90deg, #fff 10%, #bfa14a 50%, #fff 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 32px #a68a2a88);
  text-shadow: 0 0 64px #bfa14a44;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

const VisionSubtitle = styled(motion.h3)`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-weight: 400;
  color: #f5e7b2;
  margin-bottom: 3rem;
  opacity: 0.9;
  text-shadow: 0 0 16px #a68a2a44;
  letter-spacing: 0.02em;
`;

const VisionText = styled(motion.div)`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 1.8;
  color: #fff;
  margin-bottom: 3rem;
  opacity: 0.95;
  text-shadow: 0 0 8px #fff2;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const QuoteBlock = styled(motion.blockquote)`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  font-style: italic;
  font-weight: 500;
  color: #bfa14a;
  margin: 4rem auto 0;
  padding: 2rem 3rem;
  border-left: 3px solid #bfa14a;
  background: linear-gradient(90deg, rgba(191, 161, 74, 0.05) 0%, transparent 100%);
  border-radius: 0 1rem 1rem 0;
  max-width: 700px;
  position: relative;
  text-shadow: 0 0 16px #a68a2a66;
  filter: drop-shadow(0 0 8px #bfa14a33);
  
  &::before {
    content: '"';
    font-size: 4rem;
    color: #bfa14a;
    position: absolute;
    top: -1rem;
    left: -1rem;
    opacity: 0.3;
  }
`;

const ConnectSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
`;

const ConnectContent = styled.div`
  max-width: 800px;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const ConnectTitle = styled(motion.h2)`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 700;
  background: linear-gradient(90deg, #fff 10%, #bfa14a 50%, #fff 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 32px #a68a2a88);
  text-shadow: 0 0 64px #bfa14a44;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
`;

const ConnectSubtitle = styled(motion.h3)`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  font-weight: 400;
  color: #f5e7b2;
  margin-bottom: 4rem;
  opacity: 0.9;
  text-shadow: 0 0 16px #a68a2a44;
  letter-spacing: 0.02em;
  line-height: 1.4;
`;

const ConnectButtons = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
  }
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const ConnectButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 2.5rem;
  border-radius: 2.5rem;
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(191, 161, 74, 0.3);
  backdrop-filter: blur(10px);
  background: linear-gradient(90deg, #bfa14a 0%, #f5e7b2 100%);
  color: #000;
  box-shadow: 0 4px 20px rgba(191, 161, 74, 0.3);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(191, 161, 74, 0.4);
    filter: drop-shadow(0 0 8px #bfa14a66);
  }
  
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
  
  &:hover::before {
    left: 100%;
  }
`;

const ButtonIcon = styled.span`
  font-size: 1.3rem;
  opacity: 0.9;
`;



const Header = styled.nav`
  position: fixed;
  top: 2rem;
  right: 3rem;
  z-index: 10;
  display: flex;
  gap: 2.5rem;
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: #A0A0A0;
  background: rgba(0,0,0,0.2);
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  box-shadow: 0 2px 16px 0 rgba(191, 161, 74, 0.04);
  backdrop-filter: blur(8px);
  
  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    gap: 1.5rem;
    font-size: 0.9rem;
    padding: 0.4rem 1rem;
  }
  
  @media (max-width: 480px) {
    top: 0.5rem;
    right: 0.5rem;
    gap: 1rem;
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }
`;

const HeaderLink = styled.a`
  color: #A0A0A0;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #bfa14a;
  }
`;



const StorySection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const StoryContent = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 6rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const StoryText = styled.div`
  color: #e0f6ff;
`;

const StoryTitle = styled(motion.h2)`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #fff 10%, #bfa14a 50%, #fff 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 16px #a68a2a88);
  text-shadow: 0 0 32px #bfa14a44;
`;



const ScrollingTextStrip = styled.div`
  width: 100%;
  height: 80px;
  background: linear-gradient(90deg, rgba(191, 161, 74, 0.1) 0%, rgba(245, 231, 178, 0.15) 50%, rgba(191, 161, 74, 0.1) 100%);
  border-top: 1px solid rgba(191, 161, 74, 0.2);
  border-bottom: 1px solid rgba(191, 161, 74, 0.2);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  backdrop-filter: blur(4px);
`;

const ScrollingText = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  animation: scrollText 20s linear infinite;
  
  @keyframes scrollText {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const ScrollingTextContent = styled.span`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  font-style: italic;
  color: #bfa14a;
  text-shadow: 0 0 16px #a68a2a66, 0 2px 8px #f5e7b233;
  letter-spacing: 0.02em;
  margin: 0 4rem;
  opacity: 0.9;
`;

const VenturesSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const VenturesContent = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const VenturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  align-items: start;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;



const VenturesTitle = styled(motion.h2)`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #fff 10%, #bfa14a 50%, #fff 90%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 16px #a68a2a88);
  text-shadow: 0 0 32px #bfa14a44;
`;



const VentureCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(20, 20, 20, 0.6) 50%, rgba(0, 0, 0, 0.4) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  padding: 3rem;
  backdrop-filter: blur(12px);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(191, 161, 74, 0.03), transparent);
    transition: left 0.6s;
  }

  &:hover {
    transform: translateY(-12px);
    border-color: rgba(191, 161, 74, 0.15);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
  }

  &:hover::before {
    left: 100%;
  }
`;



const VentureTitle = styled.h3`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  letter-spacing: -0.02em;
`;

const VentureDescription = styled.p`
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: 1.1rem;
  line-height: 1.7;
  color: #b0c4de;
  margin-bottom: 0;
  opacity: 0.85;
  margin-top: 0;
`;

const VentureButton = styled(motion.button)`
  background: linear-gradient(90deg, #bfa14a 0%, #f5e7b2 100%);
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 1.5rem;
  font-family: 'Space Grotesk', 'Sora', 'Syne', Arial, sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 12px rgba(191, 161, 74, 0.15);
  align-self: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(191, 161, 74, 0.25);
    filter: drop-shadow(0 0 6px #bfa14a33);
  }
`;

export default function Home() {
  const router = useRouter();

  return (
    <Container>
      <VideoBg autoPlay loop muted playsInline>
        <source src="/com-video1.mp4" type="video/mp4" />
      </VideoBg>
      <Header>
        <HeaderLink href="#story">My story</HeaderLink>
        <HeaderLink href="#ventures">Ventures</HeaderLink>
        <HeaderLink href="#connect">Connect</HeaderLink>
      </Header>
      {/* Floating Elements */}
      <FloatingElement
        style={{ top: '20%', left: '10%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: easeInOut
        }}
      />
      <FloatingElement
        style={{ top: '60%', right: '15%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: easeInOut,
          delay: 2
        }}
      />
      <FloatingElement
        style={{ bottom: '30%', left: '20%' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: easeInOut,
          delay: 4
        }}
      />
      <Content>
        <Hero>
          <Name
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Ashan Veymont
          </Name>
          <Title
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Hypnotic Closer. AI Architect. Phoenix Reborn.
          </Title>
          <StoryButton
            href="#story"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1], type: 'spring', stiffness: 400, damping: 18 }}
            whileHover={{ scale: 1.08, filter: 'drop-shadow(0 0 32px #bfa14acc)' }}
            whileTap={{ scale: 0.97 }}
          >
            unfold the story
          </StoryButton>
        </Hero>
      </Content>
      
      {/* My Story Section */}
      <StorySection id="story">
        <StoryContent>
          <StoryGrid>
            <StoryText>
              <StoryTitle
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
              >
                My Story
              </StoryTitle>
              <div
                style={{ whiteSpace: 'pre-line', fontSize: '1.18rem', color: '#fff', fontFamily: 'Space Grotesk, Sora, Syne, Arial, sans-serif', lineHeight: 1.7, opacity: 0.96 }}
              >
                {`I'm Ashan. Some may know me as the hypnotic guy who sells ice to Eskimos, the AI architect, the chess master, the guy from school, or simply—just Ashan. But truly, I'm a son, a brother, a friend, and most importantly—a human.

I was born in a small town in Sri Lanka—Ratnapura. To a beautiful family—happy and perfect to the world, but chaos on the inside. My nights were not of bedtime stories or lullabies, but of a drunk father abusing an innocent, helpless mom. Countless nights of tears, death scares, and silent screams. A young, helpless boy in an Alejandro Hartmann movie—the guy who directed The Menendez Brothers—living and witnessing as a monster plucks out the teeth of the woman who birthed me. A young boy, shocked by what's happening and not knowing what to do.

Years of pain.

That exact same pain clicked something in me—I'm going to get the hell out of here and take my mom. Give her everything she deserves. Pain turned into a solid goal and disciplined motivation.

I know some of the closest people to me might be astonished to hear this, but that's because I could be an Oscar-winning actor—pretending to be happy and all fine when I'm burning from the inside.

I went to one of the best international schools in Sri Lanka—the school that gave me all. The exact same place that played a huge role in who I am today. For that, I'm incredibly grateful to all my professors and simply—the school.

I studied to become a neurologist because Asians, especially Sri Lankans, were raised to glorify doctors, lawyers, and engineers. I went to school, studied hard, and aced my exams. Did most of the sports the school had to offer—not because I was fond of them but because it kept me three extra hours at school. I feared coming home to a toxic household. School was peaceful to me.

That made me a state swimmer, international chess master, two-time state chess champion—and the list goes on.

I chose biological sciences as my stream to do A/Ls to enter medical school, but circumstances had me look for a job. I started working as a marketing executive for a consulting company in Hong Kong. I was also handling marketing for two HNW brands in HK and Japan at the time. That was my first job, and Ruby taught me everything I had to know. For that, I'm incredibly grateful.

That money was plenty for me to take care of myself, my mom, and her medical bills. The company transitioned and made a huge layoff of employees—which I was one of.

I'm an Arena FIDE Chess Master, internationally rated chess player, certified chess coach, and a two-time state chess champion. That is exactly what got me into sales too. I didn't plan to be in sales. A well-established mastermind in the high-ticket coaching space headhunted me for one of their chess coaching clients. I started as an SDR and closed a $5K-ticket in the DMs on my third day of work.

That changed something in me. Why did they really buy this?

I climbed the sales ladder over the past years to be where I am today. I dug deeper into human psychology and behavioral psychology. I was desperate to learn the why behind most people's actions. That led me to sales psychology and belief systems. I learned, studied, and embodied the human brain and purchase psychology—buyer state.

This made me incredibly dangerous because it made me a hypnotic closer. I could sell things to anyone—even if they didn't want it. Which is when I made a vow to myself:
I'm not using my gifts or skillset to harm any person psychologically, mentally, or financially.

To me, sales is change.
But psychologically, humans resist change—because that's how our brains are wired—to survive.

So if sales is change and your brain resists it, how am I going to take you from a cautious state to a clarity phase—the phase where you know staying in the same place you're now is way more costly than investing to change your life and get to where you want to go?

The ability to take a person from the cautious phase to the closed-deal phase is what makes a great salesperson to me.

Then came the frenzy of AI—it was super cool talking to ChatGPT, right? It was like Harry Potter writing in that Tom Riddle's diary. That made me curious and incredibly excited.

I had all this knowledge of sales and psychology—what if I could replicate this using AI?

That birthed Mytosis.io.
I founded Mytosis to create AI sales agents that possessed the knowledge I did.
My agents were different—because a sales maestro built it to convert, not a tech guy who just built tech.

I was consulting sales teams and implementing AI sales solutions to their businesses, helping them reach $100K/mo+ in revenue.

I didn't want to be known or even be close to the man who birthed me.
I changed my name from Pathberiyage Ashan Isuru Dharmasiri to Ashan Isuru Veymont—completely disowning him to build a lineage of my own. A lineage built of love, resilience, and safety.

That birthed The Veymont Group.

Now I'm on a mission to dig deeper into human psychology, AI, super-intelligence, and spirituality. I want to integrate all of them into one—to make this world a better place. Peaceful.

Currently, I'm building the future of Sri Lanka and Asia.

This is my story.
The rise of the Phoenix.

Piece of Advice for Anyone:
Never let the place you're born in dictate who you are.
Remember who you are—and grow into that person.`}
              </div>
            </StoryText>
          </StoryGrid>
        </StoryContent>
      </StorySection>
             <ScrollingTextStrip>
         <ScrollingText>
           <ScrollingTextContent>
             &ldquo;With god I was born and with god I shall live&rdquo; - Ashan
           </ScrollingTextContent>
         </ScrollingText>
       </ScrollingTextStrip>
       <VenturesSection id="ventures">
         <VenturesContent>
           <VenturesTitle
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
             viewport={{ once: true }}
             style={{ textAlign: 'center', marginBottom: '4rem' }}
           >
             Ventures
           </VenturesTitle>
           <VenturesGrid>
             <VentureCard
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
               viewport={{ once: true }}
               whileHover={{ y: -8 }}
             >
               <VentureTitle>The Veymont Group</VentureTitle>
               <VentureDescription>
                 A legacy holding company dedicated to building a billionaire empire across AI, psychology, wealth, and spiritual legacy.
               </VentureDescription>
               <VentureButton
                 onClick={() => router.push('/pitch-decks/veymont-group')}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 Learn More
               </VentureButton>
             </VentureCard>

             <VentureCard
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
               viewport={{ once: true }}
               whileHover={{ y: -8 }}
             >
               <VentureTitle>Mytosis AI</VentureTitle>
               <VentureDescription>
                 Sri Lanka&apos;s first hologram company and your AI-powered growth partner. From intelligent sales agents to consulting and systems audits — we fuse psychology and AI to scale revenue with soul.
               </VentureDescription>
               <VentureButton
                 onClick={() => router.push('/pitch-decks/mytosis-ai')}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 Learn More
               </VentureButton>
             </VentureCard>

             <VentureCard
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
               viewport={{ once: true }}
               whileHover={{ y: -8 }}
             >
               <VentureTitle>Viyathra</VentureTitle>
               <VentureDescription>
                 A next-gen travel app for Sri Lanka. From e-visa, verified transport, and itinerary curation to emergency contacts and ride-sharing — Viyathra is your entire trip, simplified.
               </VentureDescription>
               <VentureButton
                 onClick={() => router.push('/pitch-decks/viyathra-tourism')}
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
               >
                 Learn More
               </VentureButton>
             </VentureCard>
           </VenturesGrid>
         </VenturesContent>
       </VenturesSection>

       {/* The Vision Section */}
       <VisionSection id="vision">
         <CosmicBackground>
           {[...Array(50)].map((_, i) => (
             <Star
               key={i}
               style={{
                 left: `${(i * 7.2) % 100}%`,
                 top: `${(i * 13.7) % 100}%`,
                 animationDelay: `${(i * 0.4) % 20}s`,
                 animationDuration: `${15 + (i % 10)}s`
               }}
             />
           ))}
           {[...Array(20)].map((_, i) => (
             <FloatingOrb
               key={`orb-${i}`}
               style={{
                 left: `${(i * 18.5) % 100}%`,
                 top: `${(i * 22.3) % 100}%`,
                 animationDelay: `${(i * 0.4) % 8}s`,
                 animationDuration: `${6 + (i % 4)}s`
               }}
             />
           ))}
         </CosmicBackground>
         <VisionContent>
           <VisionTitle
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
             viewport={{ once: true }}
           >
             The Vision
           </VisionTitle>
           <VisionSubtitle
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
             viewport={{ once: true }}
           >
             Where AI, psychology, and spirituality meet.
           </VisionSubtitle>
           <VisionText
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
             viewport={{ once: true }}
           >
             I believe in building a world where AI enhances human potential, not replaces it.
             <br /><br />
             Where psychology is sacred and technology is conscious.
             <br /><br />
             Where spiritual lineage, dharma, and peace are coded into our systems.
             <br /><br />
             Where legacy isn&apos;t built on hustle, but harmony.
             <br /><br />
             My life&apos;s work is to fuse AI + Psychology + Spirituality into a force that heals, scales, and elevates humanity.
           </VisionText>
           <QuoteBlock
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
             viewport={{ once: true }}
           >
             &ldquo;Superintelligence isn&apos;t just artificial. It&apos;s spiritual.&rdquo; – Ashan Veymont
           </QuoteBlock>
         </VisionContent>
       </VisionSection>

       {/* Let's Connect Section */}
       <ConnectSection id="connect">
         <ConnectContent>
           <ConnectTitle
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
             viewport={{ once: true }}
           >
             Let&apos;s Connect
           </ConnectTitle>
           <ConnectSubtitle
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
             viewport={{ once: true }}
           >
             Whether you&apos;re an investor, visionary, or curious soul — let&apos;s build something timeless.
           </ConnectSubtitle>
           <ConnectButtons
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
             viewport={{ once: true }}
           >
             <ConnectButton
               href="https://www.linkedin.com/in/ashanveymont"
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <ButtonIcon>🔗</ButtonIcon>
               LinkedIn
             </ConnectButton>
             <ConnectButton
               href="https://www.instagram.com/ashan.veymont/"
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <ButtonIcon>📸</ButtonIcon>
               Instagram
             </ConnectButton>
           </ConnectButtons>
         </ConnectContent>
       </ConnectSection>
    </Container>
  );
}
