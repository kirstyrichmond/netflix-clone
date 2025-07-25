import styled from "styled-components";
import { breakpoints } from "../breakpoints";

import { GoMute, GoUnmute } from "react-icons/go";

export const MovieInfo = styled.div`
  display: flex;
`

export const ModalContainer = styled.div`
  // height: 80vh;
  width: 90vw;
  background: #141414;
  z-index: 1001;
  height: 100%;
  top: 2em;

  @media (min-width: ${breakpoints.tablet}px) {
    width: 75vw;
  //   height: 70vh;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    width: 55vw;
  //   height: 70vh;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 200px;

  @media (min-width: ${breakpoints.tablet}px) {
    height: 360px;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    height: 400px;
  }
`;

export const TrailerContainer = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  overflow: hidden;

  @media (min-width: ${breakpoints.tablet}px) {
    height: 360px;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    height: 400px;
  }
`;

export const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  /* Main wrapper that clips everything */
  .youtube-wrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    overflow: hidden;
    background-color: black;
  }
  
  /* Scale the iframe bigger to hide controls */
  iframe {
    position: absolute;
    top: -60px;
    left: -10%;
    width: 120%;
    height: calc(100% + 120px);
    border: none;
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
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 2;
  }
`;

export const MovieCoverImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 200px;

  @media (min-width: ${breakpoints.tablet}px) {
    height: 360px;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    height: 400px;
  }
`;

export const MovieTitle = styled.h2`
  font-size: 1.2rem;
  color: #fff;
  position: absolute;
  z-index: 20;
  left: 24px;
  bottom: 60px;
  max-width: 300px;

  @media (min-width: ${breakpoints.tablet}px) {
    bottom: 64px;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 1.6rem;
    max-width: 600px;
  }
`;

export const CloseButtonContainer = styled.div``;

export const ModalOverlay = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
`;

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 20;
  right: 16px;
  top: 8px;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: white;
  }
  
  &:before {
    transform: rotate(45deg);
  }
  
  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    background-color: rgba(255, 0, 0, 0.7);
  }

  @media (min-width: ${breakpoints.tablet}px) {
    width: 36px;
    height: 36px;
  }
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
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  position: absolute;
  bottom: 20px;
  left: 24px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.7rem 0.4rem 0.7rem;
  }
`;

export const PlayIcon = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 5px 0 5px 10px;
  border-color: transparent transparent transparent black;
  margin-right: 8px;

  @media (min-width: ${breakpoints.tablet}px) {
    border-width: 7px 0 7px 14px;
  }
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 36px;
  height: 100%;
  overflow-y: auto;
  max-height: calc(70vh - 30px); /* Subtract header height */
  
  @media (min-width: ${breakpoints.tablet}px) {
    max-height: calc(70vh - 190px); /* Subtract header height */
  }
  
  @media (min-width: ${breakpoints.desktop}px) {
    max-height: calc(70vh - 110px); /* Subtract header height */
  }
`;

export const ReleaseDate = styled.p`
  color: #e8e8e8;
  font-weight: 500;
  font-size: 0.8rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

export const MovieDescription = styled.p`
  color: #e8e8e8;
  font-weight: 400;
  font-size: 0.8rem;

  @media (min-width: ${breakpoints.tablet}px) {
    // font-size: 1rem;
  }
`;

 export const DescriptionHeader = styled.div`
    display: flex;
    margin-bottom: 24px;
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

// New styles for movie logo and buttons in the modal
export const ModalContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0 4.7% 6%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
  @media (min-width: ${breakpoints.tablet}px) {
    padding-bottom: 5%;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    padding-bottom: 4%;
  }
`;

export const MovieLogo = styled.img`
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
    max-width: 24%;
    max-height: 120px;
    margin-bottom: 2rem;
  }
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
`;

export const ModalPlayButton = styled.button`
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


export const ModalPlayIcon = styled.img`
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

export const ModalInfoButton = styled.button`
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

export const ModalInfoIcon = styled.img`
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

// New styles for the enhanced modal
export const ExpandedContent = styled.div`
  padding: 32px 48px;
  background: #141414;
  overflow-y: auto;
  // max-height: 60vh;
`;

export const MovieDetails = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
  color: #e8e8e8;
`;

export const MovieMeta = styled.div`
  margin-bottom: 32px;
  
  h3 {
    color: #fff;
    font-size: 1.5rem;
    margin: 0 0 24px 0;
    font-weight: 700;
  }
`;

export const CastList = styled.div`
  color: #e8e8e8;
  flex: 1;
  font-size: 1rem;
`;

export const GenreList = styled.div`
  color: #e8e8e8;
  flex: 1;
`;

export const SimilarSection = styled.div`
  margin-top: 32px;
`;

export const SimilarTitle = styled.h3`
  color: #fff;
  font-size: 1.3rem;
  margin-bottom: 16px;
  font-weight: 700;
`;

export const SimilarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

export const SimilarCard = styled.div`
  background: #2f2f2f;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const SimilarImage = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

export const SimilarCardTitle = styled.h4`
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 8px 12px 4px;
  margin: 0;
`;

export const SimilarCardDuration = styled.span`
  color: #999;
  font-size: 0.75rem;
  padding: 0 12px 8px;
`;

export const TrailersSection = styled.div`
  margin-top: 32px;
`;

export const TrailerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

export const TrailerCard = styled.div`
  background: #2f2f2f;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: scale(1.02);
  }
`;

export const TrailerThumbnail = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
`;

export const TrailerTitle = styled.h4`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 8px 12px 4px;
  margin: 0;
`;

export const TrailerDuration = styled.span`
  color: #999;
  font-size: 0.75rem;
  padding: 0 12px 8px;
`;

export const MovieMetaRow = styled.div`
  display: flex;
  // align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  // flex-wrap: wrap;
  
  & > span {
    color: #fff;
    font-size: 0.9rem;
  }
`;

export const MetaLabel = styled.span`
  color: #999;
  font-size: 0.85rem;
  min-width: 80px;
  margin-right: 8px;
`;

export const MetaValue = styled.span`
  color: #e8e8e8;
  font-size: 0.75rem;
  flex: 1;
`;

export const AgeRating = styled.span`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 2px;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 6px;
`;

export const Duration = styled.span`
  color: #fff;
  font-size: 0.9rem;
`;

export const MoreDetailsButton = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 0.85rem;
  font-style: italic;
  margin-left: 8px;
  
  &:hover {
    color: #fff;
    text-decoration: underline;
  }
`;

export const DetailsSeparator = styled.hr`
  border: none;
  border-top: 1px solid #333;
  margin: 32px 0;
`;