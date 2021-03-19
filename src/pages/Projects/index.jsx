import React from 'react';
import clsx from 'clsx';

import './styles.css';
import { Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const personal_projects = [
  {
    name: 'Image Blur Detection',
    date: '25 Jun 2020',
    link: 'https://github.com/chinvib66/non-blur-images',
    description:
      'The project detects blur in image provided, using variance of laplacian of the single channel image. If variance is below a set threshold, then image is determined to be blurry. The Project includes a web application as well as a CLI Application for indentifying blur image.',
  },
  {
    name: 'Duplicate Image Remover',
    date: '9 Jul 2020',
    link: 'https://github.com/chinvib66/detect-duplicate-img',
    description:
      "A CLI tool for detecting and removing duplicate images from a folder. The tool uses image hashing, specifically 'Difference Hashing' to identify the duplicates in folder.",
  },

  {
    name: 'Express MySQL REST API Starter',
    date: '13 Feb 2019',
    link: 'https://github.com/chinvib66/express-mysql-rest-api',
    description:
      'Personal Starter kit for Express.js + MySQL + REST API projects. Implements Auth using JWT Token based Authentication. This project was a learning project for practicing concepts of Express, MySQL, Sequelize, JWT Authentication.',
  },
  {
    name: 'Bulletin Board using React',
    date: '5 Nov 2018',
    description:
      'Built a Bulletin Board using ReactJS. The Board pre-populates 50 notes with data from the api of a lorem ipsum generator. The notes are draggabe and rearrangable. This project was a learning project to master concepts of ReactJS like states, props, components, children.',
    link: 'https://chinmayvibhute.me/react-bulletin/',
  },
  {
    name: 'AMessagi: Anonymous Messaging Platform',
    date: '11 Jul 2018',
    description:
      'AMessagi is an anonymous messaging platform. Any Anonymous user can send messages to any registerd user with a unique address. This project was a learning project for practicing concepts of Django, MySQL, User Authentication, HTTP Sessions and Cookies.',
    link: 'https://github.com/chinvib66/amessagi',
  },
];

const acad_projects = [
  {
    name: 'Common Thorax Disease Classification',
    details: 'Prof R. B. Roy, IIT Kharagpur',
    date: 'Jan 2021 - Present',
    description:
      'Implemented DL model(s) for Classification of NIH Chest X Ray Dataset among 14 types of common thorax diseases. Achieved max average AUROC of 0.845, possibly in top 3 models for CXR14 classification ',
  },
  {
    name: 'SmallCast: Stop Searching, Start Listening!',
    details: 'Prof P. K. Dan, IIT Kharagpur',
    date: 'Aug 2020 - Dec 2020',
    description:
      'Smallcast is an audio on demand platform, allowing users to listen to their favorite articles & blogs, on the go. The project involved in development of Audio Streaming Service and Rest API Services, Android Application, & Creator and Admin Dashboard ',
    link: 'https://play.google.com/store/apps/details?id=com.smallcast',
  },
  {
    name: 'Mini Solar Dome Application',
    details: 'Prof P. Pattnaik, IIT Kharagpur',
    date: 'Aug 2019 - Dec 2019',
    description:
      'Designed & developed Django REST API & React Native application for Mini Solar Dome Project’s management. Implemented features like Role-Based Access, Servicing, Survey & Feedback Workflows, Image capture & processing',
  },
];

export const ProjectsPage = () => {
  // const width = window.innerWidth;
  // let mobile = width < 512;
  return (
    <div className={'project-page'}>
      <section className={'hero'}>
        <div className={clsx('title')}>Projects</div>
        <div className={clsx('content')}></div>
      </section>
      {acad_projects && acad_projects.length > 0 && (
        <section className={clsx('projects', 'academic')}>
          <div className={'title'}>Academic Projects</div>
          <Container className={clsx('academic', 'projects', 'list')}>
            {acad_projects.map((item, index) => (
              <div
                key={`${item.name} ${index}`}
                className={clsx('project', 'item')}
              >
                <div className={clsx('title-wrapper')}>
                  <div className={clsx('title')}>{item.name}</div>
                  {item.link && (
                    <a className={'custom'} href={item.link}>
                      Link To Project
                    </a>
                  )}
                </div>
                <div className={clsx('date')}>
                  {item.date} | <b>{item.details}</b>
                </div>
                <div className={clsx('description')}>{item.description}</div>
              </div>
            ))}
          </Container>
        </section>
      )}
      {personal_projects && personal_projects.length > 0 && (
        <section className={clsx('projects')}>
          <div className={'title'}>Personal Projects</div>
          <Container className={clsx('projects', 'list')}>
            {personal_projects.map((item, index) => (
              <div
                key={`${item.name} ${index}`}
                className={clsx('project', 'item')}
              >
                <div className={clsx('title-wrapper')}>
                  <div className={clsx('title')}>{item.name}</div>
                  {item.link && (
                    <a className={'custom'} href={item.link}>
                      Link To Project
                    </a>
                  )}
                </div>
                <div className={clsx('date')}>{item.date}</div>
                <div className={clsx('description')}>{item.description}</div>
              </div>
            ))}
          </Container>
        </section>
      )}
      <Container>
        <Grid
          container
          className={clsx('links-to-other-pages')}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item md={6} sm={12} className={clsx('linkbox')}>
            <Link className={'link'} to={'/experiences'}>
              Previous Experiences
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
