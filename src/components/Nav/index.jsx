import React from 'react';
import clsx from 'clsx';
import { Container, IconButton, Tooltip } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DarkModeIcon from '@material-ui/icons/Brightness4';
import CVLogo from 'assets/images/logo-900.png';
import './styles.css';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const width = window.innerWidth;
  let mobile = width < 512;
  return (
    <nav className={clsx('navbar', 'is-transparent')}>
      <Container className={clsx('nav-container')}>
        <div className={clsx('navbar-brand')}>
          <Tooltip title="Chinmay Vibhute">
            <Link to={''}>
              <img src={CVLogo} alt="Chinmay Vibhute Logo" />
            </Link>
          </Tooltip>
        </div>
        <div className={clsx('navbar-links')}>
          <a
            href="https://github.com/chinvib66"
            target="_blank"
            className={clsx('icon')}
            rel="noreferrer"
          >
            <IconButton className={'icon-button'}>
              <GitHubIcon fontSize="large" className={'social-icon'} />
            </IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/chinmay-vibhute"
            target="_blank"
            className={clsx('icon')}
            rel="noreferrer"
          >
            <IconButton className={'icon-button'}>
              <LinkedInIcon fontSize="large" className={'social-icon'} />
            </IconButton>
          </a>
          {!mobile && (
            <Tooltip title="Coming Soon" aria-label="coming-soon">
              <IconButton className={'icon-button'}>
                <DarkModeIcon fontSize="large" className={'social-icon'} />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </Container>
    </nav>
  );
};
