import styled from "styled-components";
import { breakpoints } from "../breakpoints";

export const ProfileContainer = styled.div`
  margin: auto;
  padding-top: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}px) {
    padding-top: 200px;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    padding-top: 240px;
  }
`;

export const AddProfileContainer = styled.div`
  cursor: pointer;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;
`;

export const PageTitle = styled.h2`
  color: #fff;
  font-size: 1.4rem;
  margin-bottom: 40px;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 2rem;
    margin-bottom: 50px;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 3rem;
  }
`;

export const AddProfileImage = styled.img`
  width: 72px;
  margin-bottom: 12px;

  @media (min-width: ${breakpoints.desktop}px) {
    width: 80px;
    margin-bottom: 18px;
  }
`;

export const ProfileTitle = styled.p`
  color: #fff;
  margin-bottom: 50px;
`;

export const ProfilesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;
  max-width: 340px;
  justify-content: center;

  @media (min-width: ${breakpoints.tablet}px) {
    max-width: 500px;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    max-width: 800px;
    margin-bottom: 36px;
  }
`;

export const ProfileAvatar = styled.img`
  width: 90px;
  border-radius: 8px;

  @media (min-width: ${breakpoints.tablet}px) {
    width: 112px;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    width: 128px;
  }
`;

export const SingleProfileName = styled.p`
  color: rgb(182, 182, 182);
  font-size: 18px;
  padding-top: 8px;
`;

export const SingleProfileContainer = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 12px;
  margin-bottom: 18px;

  &:hover {
    ${ProfileAvatar} {
      border: 3px solid #fff;
      box-sizing: border-box;
    }
    ${SingleProfileName} {
      color: #fff;
    }
  }

  @media (min-width: ${breakpoints.desktop}px) {
    margin-right: 18px;
  }
`;

export const ManageProfilesButton = styled.button`
  background: transparent;
  width: 200px;
  height: 48px;
  font-size: 1.2rem;
  color: rgb(182, 182, 182);
  border: 2px solid rgb(182, 182, 182);
  cursor: pointer;
  margin-bottom: 48px;

  @media (min-width: ${breakpoints.tablet}px) {
    margin-bottom: 0;
  }
  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 1.4rem;
    width: 220px;
    height: 56px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: auto;
`;

export const IconContainer = styled.div`
  background: ${(props) => props.$isedit === "true" ? "#fff" : "transparent"};
`;

// Fixed the EditProfileIcon to use regular props
export const EditProfileIcon = styled.img`
  z-index: 10;
  height: 40px;
  position: absolute;
`;

export const AddProfileText = styled.p`
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;

  @media (min-width: ${breakpoints.desktop}px) {
    font-size: 1.3rem;
  }
`;
