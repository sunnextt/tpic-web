import React from 'react';
import HeroContainer, { Button, Flex, PlayButton, HeroContents, HeroImage, HeroSripeImg } from './styled';
import Hero from '../../../assets/png/hero.png';
import Herostripe from '../../../assets/png/Herostrip.png';
import { BsPlayCircleFill } from 'react-icons/bs';

const HeroPage = () => {
  return (
    <HeroContainer>
      <Flex>
        <HeroContents>
          <div>
            <h3>
              The lift you need <br />
              for <span>THE BOSS LIFE</span>
            </h3>
            <h6>
              We are the first lift you need for your business. We fund, consult with and advice you on your business
              ideas, startups and expansion.
            </h6>
            <HeroSripeImg src={Herostripe} alt="vector" />
          </div>
          <div className="contents_btn">
            <Button>Register</Button>
            <PlayButton type="link">
              <BsPlayCircleFill size="36    " color="#00A953" />
              Watch Videos
            </PlayButton>
          </div>
        </HeroContents>
        <div className="image_hero">
          <HeroImage src={Hero} alt="hero" />
        </div>
      </Flex>
    </HeroContainer>
  );
};

export default HeroPage;
