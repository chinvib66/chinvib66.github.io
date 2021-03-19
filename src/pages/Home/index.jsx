import React from 'react';
import clsx from 'clsx';
import { Container, Grid } from '@material-ui/core';

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
        <Container>
          <Grid
            container
            className={clsx('links-to-other-pages')}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid md={6} sm={12} className={clsx('linkbox')}>
              <a className={'link'} href={'/experiences'}>
                Previous Experiences
              </a>
            </Grid>
            <Grid md={6} sm={12} className={clsx('linkbox')}>
              <a className={'link'} href={'/projects'}>
                Projects
              </a>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};
