import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row } from 'react-bootstrap';
import Title from '../Title/Title';
import Sphere from './icons';

const Skills = () => {
  // const myTags = [
  //   'JavaScript',
  //   'CSS',
  //   'SCSS',
  //   'Tailwind CSS',
  //   'HTML',
  //   'React.js',
  //   'WordPress',
  //   'Git',
  //   'Gulp',
  //   'Webpack',
  //   'Figma',
  //   'Prismic CMS',
  //   'Divi',
  //   'Chrome Inspector',
  //   'Adobe Photoshop',
  // ];

  // const tagCloud = TagCloud('.content', myTags, {
  //   // radius in px
  //   radius: 250,

  //   // animation speed
  //   // slow, normal, fast
  //   maxSpeed: 'fast',
  //   initSpeed: 'fast',

  //   // 0 = top
  //   // 90 = left
  //   // 135 = right-bottom
  //   direction: 135,

  //   // interact with cursor move on mouse out
  //   keep: true,
  // });

  return (
    <section id="skills">
      <Container>
        <Title title="Skills" />
        <Row className="skills-wrapper">
          <Fade bottom duration={750} delay={500} distance="30px">
            <Sphere />
          </Fade>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
