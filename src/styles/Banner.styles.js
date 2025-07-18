import styled from "styled-components";
import { breakpoints } from "../breakpoints";
import { GoMute, GoUnmute } from "react-icons/go";

export const BannerContainer = styled.div`
  position: relative;
  z-index: 5; /* Lower z-index than modal */
  height: 70vw;
  width: 100%;
  color: white;
  object-fit: contain;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-size: cover;
  background-position: center center;

  @media (min-width: ${breakpoints.tablet}px) {
    height: 44vw;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    height: 36vw;
  }
`;

export const BannerPlayerWrapper = styled.div`
  z-index: 5; /* Lower z-index than modal */
  position: relative;
  width: 100%;
  height: 70vw;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  @media (min-width: ${breakpoints.tablet}px) {
    height: 44vw;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    height: 36vw;
  }
  
  /* Main wrapper that clips everything */
  .youtube-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: black;
    z-index: 1;
  }
  
  /* Style the iframe to fill the container properly */
  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw; /* Full viewport width */
    height: 56.25vw; /* Maintain 16:9 aspect ratio */
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    pointer-events: none; /* Prevent clicking on YouTube elements */
  }
  
  /* Add a gradient overlay to ensure content is visible */
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 40%,
      rgba(0, 0, 0, 0.1) 100%
    );
    z-index: 2;
  }
`;

export const BannerContent = styled.div`
  max-width: 50%;
  padding-left: 4.7%;
  padding-right: 4.7%;
  padding-bottom: 6%;
  position: relative;
  z-index: 6; /* Ensure content is above gradient overlay but below modal */

  @media (min-width: ${breakpoints.tablet}px) {
    max-width: 44%;
    padding-bottom: 5%;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    max-width: 44%;
    padding-bottom: 4%;
  }
`;

export const BannerTitle = styled.h1`
  font-size: 3vw;
  font-weight: 700;
  margin-bottom: 0.8vw; /* Add spacing after title */

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 3.7vw;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 3.2vw;
  }
`;

export const BannerDescription = styled.p`
  line-height: 1.1;
  color: #fff;
  padding-bottom: 1.2rem; /* More space before buttons */
  font-size: 1.6vw;
  font-weight: 400;
  max-height: 80px;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 1.2vw;
    line-height: 1.2;
    padding-bottom: 1.5rem;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    padding-bottom: 1.8rem;
    padding-right: 7rem;
    font-size: 0.9vw;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const PlayButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #000;
  outline: none;
  border: none;
  font-weight: 700;
  font-size: 0.6rem;
  border-radius: 4px;
  margin-right: 1rem;
  background-color: #fff;
  padding: 1% 4%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.7);
  }

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 1.2rem;
    padding: 0.7rem 1.5rem;
  }
`;

export const PlayIcon = styled.img`
  width: 14px;
  margin-right: 0.4rem;

  @media (min-width: ${breakpoints.tablet}px) {
    width: 16px;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    width: 20px;
    margin-right: 0.7rem;
  }
`;

export const InfoButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 600;
  font-size: 0.6rem;
  border-radius: 4px;
  margin-right: 1rem;
  background-color: rgba(109, 109, 110, 0.7);
  padding: 1.2% 3%;

  &:hover {
    background-color: rgba(109, 109, 110, 0.4);
  }

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 1.2rem;
    padding: 0.7rem 1.5rem;
  }
`;

export const InfoIcon = styled.img`
  width: 16px;
  margin-right: 0.4rem;

  @media (min-width: ${breakpoints.tablet}px) {
    width: 18px;
  }

  @media (min-width: ${breakpoints.desktop}px) {
    width: 24px;
    margin-right: 0.7rem;
  }
`;

export const BottomFade = styled.div`
  background: linear-gradient(
    180deg,
    hsla(0, 0%, 8%, 0) 0,
    hsla(0, 0%, 8%, 0.15) 15%,
    hsla(0, 0%, 8%, 0.35) 29%,
    hsla(0, 0%, 8%, 0.58) 44%,
    #141414 68%,
    #141414
  );
  height: 70px;
`;

export const MovieIcon = styled.img`
  max-width: 40%;
  max-height: 120px;
  object-fit: contain;
  margin-bottom: 1.5rem;
  transition: transform 450ms;
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.5));

  @media (min-width: ${breakpoints.tablet}px) {
    max-width: 35%;
    max-height: 140px;
    margin-bottom: 2rem;
  }
  
  @media (min-width: ${breakpoints.desktop}px) {
    max-width: 35%;
    max-height: 150px;
    margin-bottom: 2.5rem;
  }
`;

// Custom mute button styles
export const CustomMuteButton = styled.button`
  position: absolute;
  bottom: 45px;
  right: 65px;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: 1px solid #fff;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  padding: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    bottom: 15px;
    right: 15px;
  }
`;

// Base styles shared by both icons
const IconBase = `
  width: 24px;
  height: 24px;
  color: white;
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

// Unmute icon (volume on)
export const UnmuteIcon = styled(GoUnmute)`
  ${IconBase}
`;

// Mute icon (volume off)
export const MuteIcon = styled(GoMute)`
  ${IconBase}
`;

// If you want to keep the same volume icon implementation but make it better
export const VolumeIcon = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 0 5px 8px;
    border-color: transparent transparent transparent white;
  }
  
  &:after {
    content: '';
    position: absolute;
    left: 10px;
    top: 6px;
    width: ${props => props.isMuted ? '0' : '10px'};
    height: ${props => props.isMuted ? '0' : '14px'};
    border-style: ${props => props.isMuted ? 'none' : 'solid'};
    border-radius: 0 10px 10px 0;
    border-width: ${props => props.isMuted ? '0' : '2px'};
    border-color: white;
  }
  
  ${props => props.isMuted && `
    &:before {
      width: 20px;
      height: 2px;
      background-color: white;
      transform: rotate(45deg);
      border: none;
      top: 11px;
    }
    
    &:after {
      width: 20px;
      height: 2px;
      background-color: white;
      transform: rotate(-45deg);
      border: none;
      top: 11px;
      left: 0;
    }
  `}
`;