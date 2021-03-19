import React from 'react';
import clsx from 'clsx';
import GEHLogo from 'assets/images/GEHealthcare.png';
import SamieLogo from 'assets/images/samie.webp';

import './styles.css';
import { Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const prev_internships = [
  {
    logo: GEHLogo,
    company: 'GE Healthcare',
    position: 'Software Developer Intern (Early ID Program)',
    description:
      'Developed Windows Application for Material Declaration Document Parsing using Python & React JS',
    dateRange: 'May 2020 - Jul 2020',
  },
  {
    logo: SamieLogo,
    company: 'Samie Intellab Pte. Ltd.',
    position: 'Software Developer Intern',
    dateRange: 'May 2019 - Jun 2019',
    description:
      'Developed Dashboard for ADAS Platform and Implemented Color Percentage Measurement',
  },
];

const fl_projects = [
  {
    name: 'Management Dashboard for Digital Assets Transaction',
    dateRange: '01 Mar 2020 - 01 August 2020',
    description:
      'The project aims at building a platform to facilitate the purchase of a digital assets through various payment methods. Features include Role-Based Authentication, integration of Hive KYC services, 4 different Crypto and FIAT payment methods and an Admin Dashboard.',
  },
  {
    name: 'Blockchain Based Certification Platfotm',
    dateRange: '16 Jul 2019 - 10 Aug 2019',
    description:
      'The Project aimed at creating a trusted certificate generation and validation platform, enabling institutions and organizations to generate certificates for their needs, and allowing anyone to verify the authenticity of the certificate. Work under this project involved generation and verification of ECDSA signature, parsing PDF document toextract relevant information in JSON format, publishing and extracting data from BSV blockchain.',
  },
  {
    name: 'Hybrid Mobile App for Parcel Tracking: Podrones',
    dateRange: '26 Oct 2019 - 18 Feb 2020',
    description:
      'The project aims at making a Hybrid (Android and iOS) mobile application based on React Native to facilitate conversation between a Courier and a Reciever. The application had Podrones API integration for parcel tracking, Mobile SMS integration, and Google MapsAPI Integration.',
  },
];

export const PrevExpPage = () => {
  const width = window.innerWidth;
  let mobile = width < 512;
  return (
    <div className={'prev-exp-page'}>
      <section className={'hero'}>
        <div className={clsx('title')}>Prior Experiences</div>
        <div className={clsx('content')}></div>
      </section>
      <section className={clsx('experience')}>
        <div className={'title'}>Internships</div>
        <Container className={clsx('internship', 'list')}>
          {prev_internships.map((item, index) => (
            <div
              key={`${item.company} ${index}`}
              className={clsx('internship', 'item', {
                mobile: mobile,
                reverse: !mobile && index % 2,
              })}
            >
              <div className={clsx('logo-wrapper')}>
                <img alt={`${item.company} Logo`} src={item.logo} />
              </div>
              <div className={clsx('desc-wrapper')}>
                <div className={clsx('company-name')}>
                  {`${item.company} | ${item.position}`}
                </div>
                <small className={'date'}>{item.dateRange}</small>
                <div className={clsx('intern-desc')}>{item.description}</div>
              </div>
            </div>
          ))}
        </Container>
      </section>
      <section className={clsx('freelancing')}>
        <div className={'title'}> Freelancing Projects</div>
        <Container className={clsx('flprojects', 'list')}>
          {fl_projects.map((item, index) => (
            <div
              key={`${item.name} ${index}`}
              className={clsx('flproject', 'item')}
            >
              <div className={clsx('title-wrapper')}>
                <div className={clsx('title')}>{item.name}</div>
              </div>
              <div className={clsx('date')}>{item.dateRange}</div>
              <div className={clsx('description')}>{item.description}</div>
            </div>
          ))}
        </Container>
      </section>
      <Container>
        <Grid
          container
          className={clsx('links-to-other-pages')}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item md={6} sm={12} className={clsx('linkbox')}>
            <Link className={'link'} to={'/projects'}>
              Projects
            </Link>
          </Grid>
          <Grid item md={6} sm={12} className={clsx('linkbox')}>
            <Link className={'link'} to={'/'}>
              Home
            </Link>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
