import React from 'react';
import clsx from 'clsx';
import { Container } from '@material-ui/core';
import GEHLogo from 'assets/images/GEHealthcare.png';
import SamieLogo from 'assets/images/samie.webp';

import './styles.css';

export const HomePage = () => {
  const width = window.innerWidth;
  let mobile = width < 512;
  return (
    <div>
      <Container className={clsx('main', 'intro', { mobile: mobile })}>
        <div
          className={clsx('intro', 'thanks', {
            'text-center': mobile,
            mobile: mobile,
          })}
        >
          Hey There! Thanks for Visiting :)
        </div>
        <div
          className={clsx('intro', 'name', 'text-center', { mobile: mobile })}
        >
          Chinmay Vibhute
        </div>
        <div className={clsx('intro', 'oneline', 'text-center')}>
          Aspiring Developer, {mobile ? <br /> : null}Computer Vision and Deep
          Learning Enthusiast
          <br />
          Good Human Being :)
          <br />
          {/* <small>Also, still in the process of figuring out what I would love to pursue in my upcoming endeavors</small> */}
        </div>
        {/* <div className={'dev-image'}></div> */}
      </Container>
      <div className={clsx('experience')}>
        <div className={clsx('brief')}>
          <div className={clsx('title')}>Hi, I'm Chinmay. Nice to Meet You</div>
          <div className={clsx('content')}>
            Currently I am a UG Student at{' '}
            <b>Indian Institute of Technology, Kharagpur</b>, pursuing my{' '}
            <b>Dual Degree (B.Tech + M.Tech)</b> majoring in Mechanical
            Engineering.
            <br />
            As an aspiring Developer, I've done some Freelancing Projects, part
            time remote work for few startups, and collaborated with some
            talented people to create good product(s).
            <br />I regularly compete on Topcoder, Kaggle and currently busy
            absorbing knowledge in field of Deep Learning, Computer Vision.
            <br />
          </div>
          <small>
            P.S.: I am actively looking for Summer 2021 Internship in
            Development, ML/AI profile. Kindly Contact via LinkedIn if
            interested in my profile.
          </small>
        </div>
        <Container className={clsx('internships')}>
          <div className={clsx('title', 'text-center')}>
            Previous Internships
          </div>
          <div className={clsx('internship', 'list')}>
            <div
              className={clsx('internship', 'item', {
                mobile: mobile,
              })}
            >
              <div className={clsx('logo-wrapper')}>
                <img alt="GE Healthcare Logo" src={GEHLogo} />
              </div>
              {/* <div className={clsx('link')}>---</div> */}
              <div className={clsx('desc-wrapper')}>
                <div className={clsx('company-name')}>
                  GE Healthcare | Software Developer Intern (Early ID Program)
                </div>
                <small className={'date'}>May 2020 - Jul 2020</small>
                <div className={clsx('intern-desc')}>
                  Developed Windows Application for Material Declaration
                  Document Parsing using Python & React JS
                </div>
              </div>
            </div>
            <div
              className={clsx('internship', 'item', {
                mobile: mobile,
                reverse: mobile,
              })}
            >
              <div className={clsx('desc-wrapper')}>
                <div className={clsx('company-name')}>
                  Samie Intellab Pte. Ltd. | Software Developer Intern
                </div>
                <small className={'date'}>May 2019 - Jun 2019</small>
                <div className={clsx('intern-desc')}>
                  Developed Dashboard for ADAS Platform and Implemented Color
                  Percentage Measurement
                </div>
              </div>
              {/* <div className={clsx('link')}>---</div> */}
              <div className={clsx('logo-wrapper')}>
                <img alt="Samie Intellab Logo" src={SamieLogo} />
              </div>
            </div>
          </div>
        </Container>
        <Container>
          <div className={'title updated-soon'}>
            Will be updating the website with more info as early as possible...
          </div>
        </Container>
        <div className={clsx('projects')}></div>
        <div className={clsx('competitions')}></div>
      </div>
    </div>
  );
};
