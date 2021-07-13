import React, { FC, useState } from 'react';
import {
  createStyles,
  makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import {
  about,
  caption,
  story1,
  story2,
  story3,
} from './constants';
import { useEffect } from 'react';

export const Page: FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [showNewsMenu, setShowNewsMenu] = useState<boolean>(false);
  const { hash } = window.location;

  const goTo = (str: string) => {
    history.push(str);
  };

  useEffect(() => {
    const id = window.location.hash?.slice(1);
    console.log('id: ', id);
    if (id) {
      const el = document.getElementById(id);
      console.log('el: ', el);
      el?.scrollIntoView();
    } else {
      document.body.scrollTo({ top: 0 });
    }
  }, [hash]);

  return (
    <>
      <div className={classes.nav}>
        <img src='/airnauts.png' onClick={() => { goTo('/'); }} />
        <div className={classes.tabGroup}>
          <div onClick={() => { goTo('/'); }}>Home</div>
          <div onClick={() => { goTo('/#about'); }}>About</div>
          <div onClick={() => { setShowNewsMenu(!showNewsMenu); }}>
            News
            {showNewsMenu && (
              <div className={classes.newsButtonGroup}>
                <div onClick={() => { goTo('/#news-1'); }}>
                  News Story #1
                </div>
                <div onClick={() => { goTo('/#news-2'); }}>
                  News Story #2
                </div>
                <div onClick={() => { goTo('/#news-3'); }}>
                  News Story #3
                </div>
              </div>
            )}
          </div>
          <div onClick={() => { goTo('/#contact'); }}>Contact</div>
        </div>
      </div>
      <div className={classes.bigPart} id="home">
        <p className={classes.xlargeP}>Accessibility Exercise</p>
        <div id="about">
          <p className={classes.largeP}>About</p>
          <p className={classes.smallP}>{about}</p>
        </div>
        <div id="news">
          <p className={classes.largeP}>News</p>
            <div className={classes.newsPiece} id="story-1">
              <p className={classes.mediumP}>News Story #1</p>
              <p className={classes.smallP}>{story1}</p>
            </div>
            <div className={classes.newsPiece} id="story-2">
              <p className={classes.mediumP}>News Story #2</p>
              <div className={classes.newsPieceInner}>
                <div className={classes.sidePart}>
                  <img src="/hacker-airnauts.jpeg" />
                  <p className={classes.xSmallP}>{caption}</p>
                </div>
                <p className={classes.smallP}>{story2}</p>
              </div>
            </div>
            <div className={classes.newsPiece} id="story-3">
              <p className={classes.mediumP}>News Story #2</p>
              <p className={classes.smallP}>{story3}</p>
            </div>
        </div>
        <div id="contact">
          <p className={classes.largeP}>Contact</p>
          <form>

          </form>
        </div>
      </div>
    </>
  )
}

const useStyles = makeStyles(() => createStyles({
  nav: {
    width: '100%',
    height: '96px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 32px',
    borderBottom: '1px solid black',
    backgroundColor: 'floralwhite',
    position: 'sticky',
    top: 0,
  },
  tabGroup: {
    width: 'auto',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

    '& > *': {
      minWidth: '96px',
      width: 'auto',
      height: '100%',
      padding: '0px 16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      cursor: 'pointer',
      position: 'relative',
    }
  },
  newsButtonGroup: {
    position: 'absolute',
    top: '96px',
    left: '0px',
    right: '0px',
    width: '132px',
    border: '1px solid black',
    borderWidth: '0px 1px 1px 1px',
    padding: '8px',
    backgroundColor: 'floralwhite',
  },
  bigPart: {
    backgroundColor: 'tan',
    minHeight: '100%',
    overflow: 'auto',
    maxWidth: '1080px',
    margin: '0px auto 0px',
    padding: '0px 0px 24px',
  },
  xlargeP: {
    fontWeight: 700,
    fontSize: '48px',
    color: 'beige',
    width: '100%',
    textAlign: 'center',
    margin: '36px 0px',
  },
  largeP: {
    fontWeight: 700,
    fontSize: '32px',
    color: 'beige',
    margin: '24px 0px',
  },
  mediumP: {
    fontWeight: 400,
    fontSize: '22px',
    color: 'beige',
    margin: '12px 0px',
  },
  smallP: {
    fontWeight: 400,
    fontSize: '16px',
    color: 'black',
    margin: '12px 0px',
  },
  xSmallP: {
    fontWeight: 400,
    fontSize: '12px',
    color: 'black',
    margin: '9px 0px',
  },
  newsPiece: {
    marginBottom: '24px',
  },
  newsPieceInner: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    '& > :first-child': {
      marginRight: '16px',
      flex: '0 0 auto',
    },

    '& > :last-child': {
      flex: '1 1 auto',
    }
  },
  sidePart: {
    display: 'inline-flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '180px',
    height: 'auto',
  },
  contact: {

  }
}));
