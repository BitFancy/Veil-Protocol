import { makeStyles } from 'tss-react/mui';
import { alpha } from '@mui/material/styles';
import flag from '~/public/images/flag-logo.png';

const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ar"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zh"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="en"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="de"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="id"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="pt"]': {
    backgroundPosition: '0 -79px'
  },
};

const headerStyles = makeStyles({ uniqId: 'header' })((theme, _params, classes) => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  invert: {
    color: theme.palette.text.primary,
    [`& .${classes.mobileMenu}`]: {
      [`& .${classes.bar}`]: {
        backgroundColor: theme.palette.text.secondary,
        '&:after, &:before': {
          backgroundColor: theme.palette.text.secondary
        },
      }
    },
    '& svg': {
      fill: theme.palette.text.primary,
    },
  },
  fixed: {},
  openDrawer: {},
  header: {
    position: 'fixed',
    padding: theme.spacing(2, 0),
    color: theme.palette.common.white,
    transition: 'padding 0.3s ease',
    background: alpha(theme.palette.secondary.dark, 0.6),
    boxShadow: 'none',
    zIndex: 21,
    '& > *': {
      [theme.breakpoints.down('lg')]: {
        paddingLeft: 0
      }
    },
    [`&.${classes.fixed}`]: {
      background: alpha(theme.palette.secondary.dark, 0.6),
      backdropFilter: 'saturate(90%) blur(10px)',
      padding: theme.spacing(1, 0),
      zIndex: 21,
      [`& .${classes.logo}`]: {
        '& a': {
          color: 'transparent',
          fontSize: 0,
        },
        '& img': {
          height: 48,
          width: 48,
          marginBottom: 0,
        }
      },
      '& nav': {
        [`& .${classes.button}`]: {
          padding: theme.spacing(0.5, 2)
        },
        '& li a': {
          padding: '0 6px',
          color: theme.palette.common.white,
        }
      },
      [`& .${classes.setting}`]: {
        [`& .${classes.icon}`]: {
          '& svg': {
            fill: theme.palette.common.white,
          }
        }
      },
      [`& .${classes.mobileMenu}`]: {
        [`& .${classes.bar}`]: {
          backgroundColor: theme.palette.common.white,
          '&:after, &:before': {
            backgroundColor: theme.palette.common.white
          },
        }
      }
    },
    [`&.${classes.openDrawer}`]: {
      zIndex: 1600,
      boxShadow: 'none',
    },
    [`&.${classes.invert}`]: {
      background: theme.palette.background.paper,
      [`& .${classes.logo}`]: {
        '& a': {
          color: theme.palette.text.primary,
        }
      },
      '& ul': {
        '& li': {
          '& a': {
            color: theme.palette.text.primary,
          }
        }
      },
      [`& .${classes.setting}`]: {
        [`& .${classes.icon}`]: {
          '& svg': {
            fill: theme.palette.text.primary,
          }
        }
      }
    },
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-end'
    },
    '& nav': {
      alignItems: 'center',
      display: 'flex',
      marginTop: theme.spacing()
    }
  },
  logo: {
    alignItems: 'center',
    height: '100%',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
    },
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'flex-start'
    },
    '& a': {
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: 16,
      color: theme.palette.common.white,
      alignItems: 'center',
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: 'center'
    },
    '& img': {
      display: 'block',
      height: 70,
      width: 70,
      margin: '0 auto',
      marginBottom: theme.spacing(),
      transition: 'height 0.3s ease, width 0.3s ease',
      [theme.breakpoints.down('md')]: {
        height: 48,
        width: 48
      }
    }
  },
  active: {},
  button: {
    width: theme.spacing(20)
  },
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 3),
      },
    },
    '& a': {
      color: theme.palette.common.white,
      marginBottom: theme.spacing(0.5),
      fontSize: 16,
      fontWeight: theme.typography.fontWeightMedium,
      boxShadow: 'none',
      position: 'relative',
      margin: theme.spacing(0, 1),
    },
    '& ul': {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
      '& li': {
        margin: theme.spacing(0, 2),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'uppercase',
          minWidth: 0,
          padding: '6px',
          margin: '0 4px',
          background: 'none !important',
          transition: 'all 0.3s ease-out',
          '&:after': {
            content: '""',
            display: 'none',
            borderTop: `10px solid ${theme.palette.primary.light}`,
            borderLeft: '15px solid transparent',
            borderRight: '15px solid transparent',
            position: 'absolute',
            top: -28,
            left: 'calc(50% - 15px)'
          },
          '&:hover': {
            color: theme.palette.primary.light
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.primary.light,
            '&:after': {
              display: 'block'
            },
          }
        }
      }
    }
  },
  langMenu: {
    textTransform: 'capitalize',
    '& i': {
      ...flagIcon
    }
  },
  modeMenu: {
    textTransform: 'capitalize',
  },
  icon: {},
  setting: {
    [`& .${classes.icon}`]: {
      transition: 'all 0.3s ease',
      color: theme.palette.common.white,
    },
    [`& .${classes.active}`]: {
      transform: 'rotate(30deg)'
    }
  },
  bar: {},
  menu: {},
  menuOpen: {},
  paperNav: {
    width: '100%',
    background: alpha(theme.palette.secondary.dark, 0.6),
    backdropFilter: 'saturate(90%) blur(10px)',
    [theme.breakpoints.up(680)]: {
      width: 300,
    },
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
    [`& .${classes.bar}`]: {
      backgroundColor: theme.palette.common.white,
      '&:after, &:before': {
        backgroundColor: theme.palette.common.white
      },
    },
    '&[class*="is-active"]': {
      [`& .${classes.bar}`]: {
        '&:after, &:before': {
          backgroundColor: `${theme.palette.common.white} !important`
        }
      },
    },
  },
  mobileNav: {
    background: theme.palette.background.paper,
    [`& .${classes.menu}`]: {
      padding: theme.spacing(0, 2),
      overflow: 'auto',
      top: 80,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 80px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      },
    }
  },
  menuList: {
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    '& span': {
      fontSize: 24
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default headerStyles;
