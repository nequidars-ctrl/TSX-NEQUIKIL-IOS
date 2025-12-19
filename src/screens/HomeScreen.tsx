import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Svg, {Path, G, Circle, Rect} from 'react-native-svg';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 360;
const verticalScale = SCREEN_HEIGHT / 800;

const BgOrquidea = () => (
  <Svg 
    width={SCREEN_WIDTH} 
    height={245 * scale} 
    viewBox="0 0 360 245" 
    preserveAspectRatio="xMidYMid slice"
    style={{position: 'absolute', top: 30 * scale}}>
    <Path
      d="M-69.19,-129.16C-70.03,-136.01 -63.85,-141.63 -57.11,-140.14L410.86,-36.84C416.24,-35.65 419.64,-30.34 418.48,-24.96L373.82,181.68C373.01,185.43 370.14,188.38 366.41,189.29L140.41,244.35C137.9,244.97 135.25,244.58 133.02,243.29L-31.21,147.8C-33.91,146.23 -35.72,143.48 -36.11,140.38L-69.19,-129.16Z"
      fill="#DA0081"
      fillRule="evenodd"
    />
  </Svg>
);

const BgSaldo = () => (
  <Svg 
    width={SCREEN_WIDTH} 
    height={280 * scale} 
    viewBox="0 0 360 264" 
    preserveAspectRatio="xMinYMin slice"
    style={{position: 'absolute', top: 0}}>
    <G>
      <Path
        d="M-57.82,-20.2C-58.99,-25.99 -54.91,-31.52 -49.04,-32.12L423.7,-80.58C430.49,-81.28 435.96,-75.12 434.47,-68.46L385.77,149.57C385.27,151.79 384.03,153.77 382.25,155.2L273.19,242.45C271.15,244.08 268.54,244.85 265.93,244.59L35.17,221.03C31.93,220.7 29.05,218.81 27.46,215.96L-30.73,111.87C-31.24,110.96 -31.6,109.98 -31.81,108.96L-57.82,-20.2Z"
        fill="#200020"
        fillRule="evenodd"
      />
    </G>
  </Svg>
);

const UserImageIcon = () => (
  <Svg width={40} height={40} viewBox="0 0 40 40">
    <Path d="M4,0L36,0A4,4 0,0 1,40 4L40,36A4,4 0,0 1,36 40L4,40A4,4 0,0 1,0 36L0,4A4,4 0,0 1,4 0z" fill="#4d334d" />
    <Path d="M24.125,14.75C23.941,17.228 22.062,19.25 20,19.25C17.937,19.25 16.055,17.229 15.875,14.75C15.687,12.172 17.515,10.25 20,10.25C22.484,10.25 24.312,12.219 24.125,14.75Z" stroke="#ece7f5" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Path d="M20,22.25C15.922,22.25 11.783,24.5 11.017,28.747C10.925,29.259 11.214,29.75 11.75,29.75H28.25C28.786,29.75 29.076,29.259 28.984,28.747C28.217,24.5 24.078,22.25 20,22.25Z" stroke="#ece7f5" strokeWidth={1.5} fill="none" />
  </Svg>
);

const NotiIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 32 32">
    <Path d="M26.73,21.964C25.125,20 23.992,19 23.992,13.584C23.992,8.625 21.459,6.858 19.375,6C19.098,5.886 18.838,5.625 18.753,5.341C18.388,4.096 17.363,3 16,3C14.638,3 13.612,4.097 13.25,5.342C13.166,5.629 12.905,5.886 12.628,6C10.541,6.859 8.011,8.62 8.011,13.584C8.008,19 6.875,20 5.27,21.964C4.605,22.778 5.188,24 6.351,24H25.656C26.813,24 27.391,22.774 26.73,21.964Z" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Path d="M20,24V25C20,26.061 19.579,27.078 18.828,27.828C18.078,28.579 17.061,29 16,29C14.939,29 13.922,28.579 13.172,27.828C12.421,27.078 12,26.061 12,25V24" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </Svg>
);

const LockIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 24 24">
    <Path d="M15.75,9.75V5.297C15.75,4.302 15.355,3.348 14.652,2.645C13.948,1.942 12.995,1.547 12,1.547C11.005,1.547 10.052,1.942 9.348,2.645C8.645,3.348 8.25,4.302 8.25,5.297V9.75" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Path d="M17.25,9.75H6.75C5.507,9.75 4.5,10.757 4.5,12V20.25C4.5,21.493 5.507,22.5 6.75,22.5H17.25C18.493,22.5 19.5,21.493 19.5,20.25V12C19.5,10.757 18.493,9.75 17.25,9.75Z" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </Svg>
);

const VisibilityOffIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 24 24">
    <Path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" stroke="#ffffff" strokeWidth={1.5} fill="none" />
    <Path d="M1 1l22 22" stroke="#ffffff" strokeWidth={1.5} />
  </Svg>
);

const ChevronDownIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24">
    <Path d="M6 9l6 6 6-6" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </Svg>
);

const HeartIcon = () => (
  <Svg width={14} height={14} viewBox="0 0 24 24">
    <Path d="M12,21.35l-1.45,-1.32C5.4,15.36 2,12.28 2,8.5 2,5.42 4.42,3 7.5,3c1.74,0 3.41,0.81 4.5,2.09C13.09,3.81 14.76,3 16.5,3 19.58,3 22,5.42 22,8.5c0,3.78 -3.4,6.86 -8.55,11.54L12,21.35z" stroke="#DA0081" strokeWidth={1} fill="#DA0081" />
  </Svg>
);

const EditIcon = () => (
  <Svg width={28} height={28} viewBox="0 0 32 32">
    <Path d="M24,14V25.5C24,25.828 23.935,26.153 23.81,26.457C23.684,26.76 23.5,27.036 23.268,27.268C23.036,27.5 22.76,27.684 22.457,27.81C22.153,27.935 21.828,28 21.5,28H6.5C5.837,28 5.201,27.737 4.732,27.268C4.263,26.799 4,26.163 4,25.5V10.5C4,9.837 4.263,9.201 4.732,8.732C5.201,8.263 5.837,8 6.5,8H16.968" stroke="#000000" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Path d="M28.376,3.665L28.377,3.665C28.547,3.852 28.546,4.167 28.34,4.373L27.587,5.122L26.875,4.416L27.648,3.648C27.696,3.599 27.754,3.561 27.817,3.536C27.88,3.511 27.948,3.499 28.016,3.5C28.084,3.502 28.151,3.517 28.213,3.546C28.275,3.574 28.331,3.614 28.376,3.665Z" stroke="#000000" strokeWidth={1} fill="#000000" />
    <Path d="M14.029,17.242L25.312,5.979C25.323,5.967 25.339,5.961 25.356,5.961C25.372,5.961 25.388,5.967 25.399,5.979L26.019,6.602C26.031,6.614 26.037,6.629 26.037,6.646C26.037,6.662 26.031,6.678 26.02,6.689L14.758,17.972C14.75,17.98 14.741,17.985 14.731,17.988L13.65,18.351L14.006,17.292C14.016,17.259 14.021,17.25 14.029,17.242Z" stroke="#000000" strokeWidth={1} fill="#000000" />
  </Svg>
);

const CardIcon = () => (
  <Svg width={48} height={48} viewBox="0 0 40 40">
    <Path d="M15.25,10L24.75,10A1.5,1.5 0,0 1,26.25 11.5L26.25,28.5A1.5,1.5 0,0 1,24.75 30L15.25,30A1.5,1.5 0,0 1,13.75 28.5L13.75,11.5A1.5,1.5 0,0 1,15.25 10z" stroke="#ece7f5" strokeWidth={1} fill="none" />
    <Path d="M16.25,27.875L16.25,19.625" stroke="#ece7f5" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Path d="M22.5,13.25L22.5,14.75C22.5,14.888 22.388,15 22.25,15C22.112,15 22,14.888 22,14.75L22,13.25C22,13.112 22.112,13 22.25,13C22.388,13 22.5,13.112 22.5,13.25Z" stroke="#ece7f5" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </Svg>
);

const ColchonIcon = () => (
  <Svg width={48} height={48} viewBox="0 0 56 56">
    <Path d="M14,3L42,3A3,3 0,0 1,45 6L45,50A3,3 0,0 1,42 53L14,53A3,3 0,0 1,11 50L11,6A3,3 0,0 1,14 3z" fill="#ece7f5" stroke="#200020" strokeWidth={2} />
    <Path d="M34,30L38,26" stroke="#200020" strokeWidth={1} strokeLinecap="round" fill="none" />
    <Path d="M34,26L38,30" stroke="#200020" strokeWidth={1} strokeLinecap="round" fill="none" />
    <Path d="M34,14L38,10" stroke="#200020" strokeWidth={1} strokeLinecap="round" fill="none" />
    <Path d="M34,10L38,14" stroke="#200020" strokeWidth={1} strokeLinecap="round" fill="none" />
    <Path d="M18,46L22,42" stroke="#200020" strokeWidth={1} strokeLinecap="round" fill="none" />
    <Path d="M18,42L22,46" stroke="#200020" strokeWidth={1} strokeLinecap="round" fill="none" />
    <Path d="M18,30L22,26" stroke="#200020" strokeWidth={1} strokeLinecap="round" fill="none" />
    <Path d="M18,26L22,30" stroke="#200020" strokeWidth={1} strokeLinecap="round" fill="none" />
    <Path d="M18,14L22,10" stroke="#DA0081" strokeWidth={1} strokeLinecap="round" fill="none" />
    <Path d="M18,10L22,14" stroke="#DA0081" strokeWidth={1} strokeLinecap="round" fill="none" />
    <Path d="M34,46L38,42" stroke="#DA0081" strokeWidth={1} strokeLinecap="round" fill="none" />
    <Path d="M34,42L38,46" stroke="#DA0081" strokeWidth={1} strokeLinecap="round" fill="none" />
  </Svg>
);

const BolsillosIcon = () => (
  <Svg width={48} height={48} viewBox="0 0 88 88">
    <Path d="M25,15L25,33L63,33L63,15C63,12.791 61.209,11 59,11L29,11C26.791,11 25,12.791 25,15Z" fill="#ece7f5" stroke="#200020" strokeWidth={2} />
    <Path d="M37,33C37.86,29.549 40.892,27 44.5,27C48.108,27 51.14,29.549 52,33" stroke="#DA0081" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Path d="M29,24V17C29,15.895 29.895,15 31,15H57C58.105,15 59,15.895 59,17V24" fill="#ece7f5" stroke="#DA0081" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M19,36C19,34.343 20.343,33 22,33H66C67.657,33 69,34.343 69,36V65C69,71.075 64.075,76 58,76H30C23.925,76 19,71.075 19,65V36Z" fill="#ece7f5" stroke="#200020" strokeWidth={2} />
  </Svg>
);

const GoalIcon = () => (
  <Svg width={48} height={48} viewBox="0 0 56 56">
    <G>
      <Path d="M33.952,47.688V45.774C30.455,46.354 26.787,46.393 23.323,45.841V47.688C23.323,48.412 22.7,49 21.93,49H16.541C15.772,49 15.148,48.412 15.148,47.688V43.121C10.323,40.426 7,35.918 7,29.365C7,21.631 11.818,15.058 20.253,12.839H33.482C35.346,12.839 37.617,14.174 37.617,14.174C37.617,14.174 39.904,11.279 41.751,12.591C43.598,13.903 41.751,16.549 41.751,16.549C45.867,19.431 47.554,22.677 47.554,28.084H50.5C51.605,28.084 52.513,28.985 52.34,30.075C51.505,35.334 47.49,40.592 42.128,43.223V47.688C42.128,48.412 41.503,49 40.734,49H35.346C34.576,49 33.952,48.412 33.952,47.688Z" fill="#ece7f5" stroke="#200020" strokeWidth={1.5} strokeLinejoin="round" />
      <Path d="M36.75,26.25C36.75,24.317 37.925,22.75 39.374,22.75C40.824,22.75 42,24.317 42,26.25" stroke="#200020" strokeWidth={1.5} strokeLinecap="round" fill="none" />
      <Path d="M7.214,21.072L7.836,21.487L8.574,20.176L7.952,19.761L7.214,21.072ZM6.201,16.959C6.134,16.535 5.76,16.24 5.366,16.299C4.972,16.359 4.707,16.751 4.774,17.175L6.201,16.959Z" fill="#DA0081" />
      <Path d="M33.25,12.25C33.25,12.746 33.198,13.231 33.1,13.698C32.433,16.869 29.62,19.25 26.25,19.25C22.988,19.25 20.248,17.019 19.471,14C19.327,13.441 19.25,12.854 19.25,12.25C19.25,8.384 22.384,5.25 26.25,5.25C30.003,5.25 33.067,8.204 33.242,11.914C33.247,12.025 33.25,12.137 33.25,12.25Z" fill="#ece7f5" stroke="#DA0081" strokeWidth={1.5} />
      <Path d="M29.75,12.25C29.75,10.317 28.183,8.75 26.25,8.75C24.317,8.75 22.75,10.317 22.75,12.25" stroke="#200020" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </G>
  </Svg>
);

const AddCircleIcon = () => (
  <Svg width={48} height={48} viewBox="0 0 24 24">
    <Circle cx={12} cy={12} r={10} stroke="#505050" strokeWidth={0.8} fill="none" />
    <Path d="M7,12L17,12M12,7L12,17" stroke="#505050" strokeWidth={0.8} fill="none" />
  </Svg>
);

const HomeIcon = ({selected}: {selected: boolean}) => (
  <Svg width={26} height={26} viewBox="0 0 24 24">
    {selected ? (
      <Path 
        d="M10,21H3L4.089,9.683C4.112,9.44 4.224,9.213 4.404,9.046L11.32,2.631C11.703,2.275 12.297,2.275 12.68,2.631L19.596,9.046C19.776,9.213 19.888,9.44 19.911,9.683L21,21H14V16.69C14,15.761 13.104,15 12,15C10.896,15 10,15.753 10,16.69V21Z" 
        fill="#200020" 
        fillRule="evenodd" 
      />
    ) : (
      <G>
        <Path d="M3,21L2.005,20.904C1.978,21.185 2.07,21.464 2.26,21.672C2.449,21.881 2.718,22 3,22V21ZM10,21V22C10.552,22 11,21.552 11,21H10ZM4.089,9.683L3.093,9.588H3.093L4.089,9.683ZM4.404,9.046L5.084,9.779L5.084,9.779L4.404,9.046ZM11.32,2.631L12,3.364L12,3.364L11.32,2.631ZM12.68,2.631L12,3.364L12,3.364L12.68,2.631ZM19.596,9.046L18.916,9.779L19.596,9.046ZM19.911,9.683L20.907,9.588L19.911,9.683ZM21,21V22C21.282,22 21.551,21.881 21.74,21.672C21.93,21.464 22.022,21.185 21.995,20.904L21,21ZM14,21H13C13,21.552 13.448,22 14,22V21ZM3,22H10V20H3V22ZM3.093,9.588L2.005,20.904L3.995,21.096L5.084,9.779L3.093,9.588ZM3.724,8.313C3.365,8.646 3.14,9.1 3.093,9.588L5.084,9.779L5.084,9.779L3.724,8.313ZM10.64,1.898L3.724,8.313L5.084,9.779L12,3.364L10.64,1.898ZM13.36,1.898C12.593,1.186 11.407,1.186 10.64,1.898L12,3.364L12,3.364L13.36,1.898ZM20.276,8.313L13.36,1.898L12,3.364L18.916,9.779L20.276,8.313ZM20.907,9.588C20.86,9.1 20.635,8.646 20.276,8.313L18.916,9.779L20.907,9.588ZM21.995,20.904L20.907,9.588L18.916,9.779L20.005,21.096L21.995,20.904ZM14,22H21V20H14V22ZM13,16.69V21H15V16.69H13ZM12,16C12.715,16 13,16.463 13,16.69H15C15,15.058 13.493,14 12,14V16ZM11,16.69C11,16.458 11.282,16 12,16V14C10.51,14 9,15.048 9,16.69H11ZM11,21V16.69H9V21H11Z" fill="#200020" />
      </G>
    )}
  </Svg>
);

const MovementsIcon = ({selected}: {selected: boolean}) => (
  <Svg width={26} height={26} viewBox="0 0 24 24">
    {selected ? (
      <Path 
        d="M17.581,19.578L7.545,19.547C5.585,19.541 4,17.915 4,15.911V3C4,2.448 4.448,2 5,2H16.546C18.453,2 20,3.58 20,5.53V19.536V21L17.581,19.578ZM8,6.25C7.724,6.25 7.5,6.474 7.5,6.75C7.5,7.026 7.724,7.25 8,7.25H16C16.276,7.25 16.5,7.026 16.5,6.75C16.5,6.474 16.276,6.25 16,6.25H8ZM7.5,10.972C7.5,10.696 7.724,10.472 8,10.472H16C16.276,10.472 16.5,10.696 16.5,10.972C16.5,11.248 16.276,11.472 16,11.472H8C7.724,11.472 7.5,11.248 7.5,10.972ZM8,14.694C7.724,14.694 7.5,14.918 7.5,15.194C7.5,15.471 7.724,15.694 8,15.694H16C16.276,15.694 16.5,15.471 16.5,15.194C16.5,14.918 16.276,14.694 16,14.694H8Z" 
        fill="#200020" 
        fillRule="evenodd" 
      />
    ) : (
      <>
        <Path d="M17.835,19.147C17.758,19.103 17.672,19.079 17.583,19.078L7.547,19.047C5.873,19.042 4.5,17.65 4.5,15.911V3C4.5,2.724 4.724,2.5 5,2.5H16.546C18.167,2.5 19.5,3.846 19.5,5.53V19.536V20.126L17.835,19.147Z" stroke="#200020" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <Path d="M8,6.75H16" stroke="#200020" strokeWidth={1} strokeLinecap="round" />
        <Path d="M8,10.972H16" stroke="#200020" strokeWidth={1} strokeLinecap="round" />
        <Path d="M8,15.194H16" stroke="#200020" strokeWidth={1} strokeLinecap="round" />
      </>
    )}
  </Svg>
);

const ClosetIcon = ({selected}: {selected: boolean}) => (
  <Svg width={26} height={26} viewBox="0 0 24 24">
    {selected ? (
      <>
        <Path d="M4,3.5L10,3.5A0.5,0.5 0,0 1,10.5 4L10.5,10A0.5,0.5 0,0 1,10 10.5L4,10.5A0.5,0.5 0,0 1,3.5 10L3.5,4A0.5,0.5 0,0 1,4 3.5z" fill="#200020" stroke="#200020" strokeWidth={1} />
        <Path d="M14,3.5L20,3.5A0.5,0.5 0,0 1,20.5 4L20.5,10A0.5,0.5 0,0 1,20 10.5L14,10.5A0.5,0.5 0,0 1,13.5 10L13.5,4A0.5,0.5 0,0 1,14 3.5z" fill="#200020" stroke="#200020" strokeWidth={1} />
        <Path d="M4,13.5L10,13.5A0.5,0.5 0,0 1,10.5 14L10.5,20A0.5,0.5 0,0 1,10 20.5L4,20.5A0.5,0.5 0,0 1,3.5 20L3.5,14A0.5,0.5 0,0 1,4 13.5z" fill="#200020" stroke="#200020" strokeWidth={1} />
        <Path d="M14,13.5L20,13.5A0.5,0.5 0,0 1,20.5 14L20.5,20A0.5,0.5 0,0 1,20 20.5L14,20.5A0.5,0.5 0,0 1,13.5 20L13.5,14A0.5,0.5 0,0 1,14 13.5z" fill="#200020" stroke="#200020" strokeWidth={1} />
      </>
    ) : (
      <>
        <Path d="M4,3.5L10,3.5A0.5,0.5 0,0 1,10.5 4L10.5,10A0.5,0.5 0,0 1,10 10.5L4,10.5A0.5,0.5 0,0 1,3.5 10L3.5,4A0.5,0.5 0,0 1,4 3.5z" stroke="#200020" strokeWidth={1} fill="none" />
        <Path d="M14,3.5L20,3.5A0.5,0.5 0,0 1,20.5 4L20.5,10A0.5,0.5 0,0 1,20 10.5L14,10.5A0.5,0.5 0,0 1,13.5 10L13.5,4A0.5,0.5 0,0 1,14 3.5z" stroke="#200020" strokeWidth={1} fill="none" />
        <Path d="M4,13.5L10,13.5A0.5,0.5 0,0 1,10.5 14L10.5,20A0.5,0.5 0,0 1,10 20.5L4,20.5A0.5,0.5 0,0 1,3.5 20L3.5,14A0.5,0.5 0,0 1,4 13.5z" stroke="#200020" strokeWidth={1} fill="none" />
        <Path d="M14,13.5L20,13.5A0.5,0.5 0,0 1,20.5 14L20.5,20A0.5,0.5 0,0 1,20 20.5L14,20.5A0.5,0.5 0,0 1,13.5 20L13.5,14A0.5,0.5 0,0 1,14 13.5z" stroke="#200020" strokeWidth={1} fill="none" />
      </>
    )}
  </Svg>
);

const IcoMoneyIcon = () => (
  <Svg width={17} height={32} viewBox="0 0 17 32">
    <Path d="M7.174,30V26.353H10.018V30H7.174ZM7.174,4.662V1H10.018V4.662H7.174ZM8.82,27.348C7.264,27.348 5.864,27.074 4.617,26.527C3.382,25.969 2.365,25.185 1.566,24.175C0.767,23.154 0.245,21.954 0,20.575L2.796,20.118C3.137,21.517 3.856,22.628 4.953,23.449C6.061,24.27 7.392,24.68 8.947,24.68C10.513,24.68 11.781,24.306 12.75,23.559C13.719,22.812 14.204,21.849 14.204,20.67C14.204,19.807 13.943,19.112 13.421,18.586C12.91,18.06 12.047,17.613 10.833,17.244L5.576,15.634C2.434,14.666 0.863,12.814 0.863,10.077C0.863,8.793 1.177,7.672 1.805,6.715C2.445,5.747 3.334,4.999 4.474,4.473C5.624,3.936 6.961,3.673 8.484,3.684C9.965,3.694 11.285,3.968 12.446,4.505C13.608,5.031 14.566,5.789 15.322,6.778C16.089,7.767 16.606,8.951 16.872,10.33L13.996,10.851C13.847,9.956 13.517,9.172 13.006,8.499C12.505,7.825 11.866,7.304 11.088,6.936C10.311,6.557 9.437,6.362 8.468,6.352C7.563,6.341 6.748,6.488 6.023,6.794C5.31,7.099 4.745,7.525 4.33,8.072C3.914,8.62 3.707,9.246 3.707,9.951C3.707,10.719 3.994,11.372 4.57,11.908C5.155,12.435 6.071,12.887 7.318,13.266L11.632,14.529C13.528,15.087 14.896,15.839 15.738,16.787C16.579,17.723 17,18.976 17,20.544C17,21.902 16.659,23.091 15.977,24.112C15.306,25.132 14.353,25.927 13.118,26.495C11.892,27.064 10.46,27.348 8.82,27.348Z" fill="#ffffff" />
  </Svg>
);

const ServicesMenuIcon = () => (
  <Svg width={40} height={40} viewBox="0 0 40 40">
    <Path d="M8,0L32,0A8,8 0,0 1,40 8L40,32A8,8 0,0 1,32 40L8,40A8,8 0,0 1,0 32L0,8A8,8 0,0 1,8 0z" fill="#5a9efb" />
    <Path d="M9.939,9.748H18.41C18.516,9.748 18.602,9.834 18.602,9.939V18.411C18.602,18.516 18.516,18.602 18.41,18.602H9.939C9.833,18.602 9.748,18.516 9.748,18.411V9.939C9.748,9.834 9.833,9.748 9.939,9.748Z" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Path d="M21.59,21.396H30.061C30.167,21.396 30.252,21.482 30.252,21.587V30.059C30.252,30.164 30.167,30.25 30.061,30.25H21.59C21.484,30.25 21.398,30.164 21.398,30.059V21.587C21.398,21.482 21.484,21.396 21.59,21.396Z" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Path d="M21.59,9.748H30.061C30.167,9.748 30.252,9.834 30.252,9.939V18.411C30.252,18.516 30.167,18.602 30.061,18.602H21.59C21.484,18.602 21.398,18.516 21.398,18.411V9.939C21.398,9.834 21.484,9.748 21.59,9.748Z" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Path d="M9.939,21.396H18.41C18.516,21.396 18.602,21.482 18.602,21.587V30.059C18.602,30.164 18.516,30.25 18.41,30.25H9.939C9.833,30.25 9.748,30.164 9.748,30.059V21.587C9.748,21.482 9.833,21.396 9.939,21.396Z" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </Svg>
);

const CashoutIcon = () => (
  <Svg width={40} height={40} viewBox="0 0 40 40">
    <Path d="M8,0L32,0A8,8 0,0 1,40 8L40,32A8,8 0,0 1,32 40L8,40A8,8 0,0 1,0 32L0,8A8,8 0,0 1,8 0z" fill="#DA0081" />
    <Path d="M13.25,20.563L20,27.313L26.75,20.563" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Path d="M20,26.375L20,12.688" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </Svg>
);

const RequestIcon = () => (
  <Svg width={40} height={40} viewBox="0 0 40 40">
    <Path d="M8,0L32,0A8,8 0,0 1,40 8L40,32A8,8 0,0 1,32 40L8,40A8,8 0,0 1,0 32L0,8A8,8 0,0 1,8 0z" fill="#DA0081" />
    <Path d="M19.438,26.75L12.688,20L19.438,13.25" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Path d="M13.625,20H27.313" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </Svg>
);

const SendAtIcon = () => (
  <Svg width={40} height={40} viewBox="0 0 40 40">
    <Path d="M8,0L32,0A8,8 0,0 1,40 8L40,32A8,8 0,0 1,32 40L8,40A8,8 0,0 1,0 32L0,8A8,8 0,0 1,8 0z" fill="#DA0081" />
    <Path d="M20.563,26.75L27.313,20L20.563,13.25" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Path d="M26.375,20H12.688" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </Svg>
);

const QrIcon = () => (
  <Svg width={40} height={40} viewBox="0 0 40 40">
    <Path d="M4,0L36,0A4,4 0,0 1,40 4L40,36A4,4 0,0 1,36 40L4,40A4,4 0,0 1,0 36L0,4A4,4 0,0 1,4 0z" fill="#DA0081" />
    <Path d="M25.733,20.586H21.321C20.915,20.586 20.586,20.915 20.586,21.321V25.733C20.586,26.139 20.915,26.468 21.321,26.468H25.733C26.139,26.468 26.468,26.139 26.468,25.733V21.321C26.468,20.915 26.139,20.586 25.733,20.586Z" fill="#ffffff" />
    <Path d="M22.645,27.656H20.88C20.718,27.656 20.586,27.788 20.586,27.95V29.715C20.586,29.878 20.718,30.009 20.88,30.009H22.645C22.807,30.009 22.939,29.878 22.939,29.715V27.95C22.939,27.788 22.807,27.656 22.645,27.656Z" fill="#ffffff" />
    <Path d="M29.715,20.586H27.95C27.788,20.586 27.656,20.718 27.656,20.88V22.645C27.656,22.807 27.788,22.939 27.95,22.939H29.715C29.878,22.939 30.009,22.807 30.009,22.645V20.88C30.009,20.718 29.878,20.586 29.715,20.586Z" fill="#ffffff" />
    <Path d="M29.573,26.465H26.926C26.682,26.465 26.484,26.662 26.484,26.906V29.553C26.484,29.797 26.682,29.994 26.926,29.994H29.573C29.816,29.994 30.014,29.797 30.014,29.553V26.906C30.014,26.662 29.816,26.465 29.573,26.465Z" fill="#ffffff" />
    <Path d="M15.633,13.535H13.751C13.621,13.535 13.516,13.641 13.516,13.771V15.653C13.516,15.783 13.621,15.888 13.751,15.888H15.633C15.763,15.888 15.869,15.783 15.869,15.653V13.771C15.869,13.641 15.763,13.535 15.633,13.535Z" fill="#ffffff" />
    <Path d="M26.219,13.535H24.337C24.207,13.535 24.102,13.641 24.102,13.771V15.653C24.102,15.783 24.207,15.888 24.337,15.888H26.219C26.349,15.888 26.455,15.783 26.455,15.653V13.771C26.455,13.641 26.349,13.535 26.219,13.535Z" fill="#ffffff" />
    <Path d="M15.633,24.121H13.751C13.621,24.121 13.516,24.226 13.516,24.356V26.239C13.516,26.369 13.621,26.474 13.751,26.474H15.633C15.763,26.474 15.869,26.369 15.869,26.239V24.356C15.869,24.226 15.763,24.121 15.633,24.121Z" fill="#ffffff" />
    <Path d="M10.856,10.625H18.556C18.684,10.625 18.787,10.728 18.787,10.856V18.556C18.787,18.684 18.684,18.787 18.556,18.787H10.856C10.728,18.787 10.625,18.684 10.625,18.556V10.856C10.625,10.728 10.728,10.625 10.856,10.625Z" stroke="#ffffff" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Path d="M21.442,10.625H29.142C29.27,10.625 29.373,10.728 29.373,10.856V18.556C29.373,18.684 29.27,18.787 29.142,18.787H21.442C21.314,18.787 21.211,18.684 21.211,18.556V10.856C21.211,10.728 21.314,10.625 21.442,10.625Z" stroke="#ffffff" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Path d="M10.856,21.211H18.556C18.684,21.211 18.787,21.314 18.787,21.442V29.142C18.787,29.27 18.684,29.373 18.556,29.373H10.856C10.728,29.373 10.625,29.27 10.625,29.142V21.442C10.625,21.314 10.728,21.211 10.856,21.211Z" stroke="#ffffff" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </Svg>
);

const CashinIcon = () => (
  <Svg width={40} height={40} viewBox="0 0 40 40">
    <Path d="M8,0L32,0A8,8 0,0 1,40 8L40,32A8,8 0,0 1,32 40L8,40A8,8 0,0 1,0 32L0,8A8,8 0,0 1,8 0z" fill="#DA0081" />
    <Path d="M26.75,19.438L20,12.688L13.25,19.438" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <Path d="M20,13.625L20,27.313" stroke="#ffffff" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </Svg>
);

const SendOutIcon = () => (
  <Svg width={40} height={40} viewBox="0 0 40 40">
    <Path d="M4,0L36,0A4,4 0,0 1,40 4L40,36A4,4 0,0 1,36 40L4,40A4,4 0,0 1,0 36L0,4A4,4 0,0 1,4 0z" fill="#ebe7f5" />
    <G transform="translate(20, 20) scale(0.5) translate(-20, -20)">
      <Path d="M12,12L28,28M12,28L28,12" stroke="#000000" strokeWidth={3} strokeLinecap="round" />
    </G>
  </Svg>
);

const HomeScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [showSendMenu, setShowSendMenu] = useState(false);

  const formatCurrency = (amount: number) => {
    const parts = amount.toFixed(2).split('.');
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return {integer: integerPart, decimal: parts[1]};
  };

  const balance = formatCurrency(0);
  const totalBalance = formatCurrency(0);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#200020" translucent />

      <View style={styles.backgroundShapes}>
        <BgOrquidea />
        <BgSaldo />
      </View>

      <ScrollView style={styles.mainScrollView} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.topContainer}>
          <View style={styles.userInfoContainer}>
            <TouchableOpacity>
              <UserImageIcon />
            </TouchableOpacity>
            <View style={styles.greetingContainer}>
              <Text style={styles.tvUserGreeting}>Hola,</Text>
              <Text style={styles.tvUserName}>Usuario</Text>
            </View>
          </View>

          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.notiContainer}>
              <NotiIcon />
              <View style={styles.notificationDot} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.tvQuestionMark}>?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <LockIcon />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.balanceSection}>
          <View style={styles.balanceLabelRow}>
            <Text style={styles.tvDepositoBajoMonto}>Depósito Bajo Monto</Text>
            <TouchableOpacity onPress={() => setBalanceVisible(!balanceVisible)}>
              <VisibilityOffIcon />
            </TouchableOpacity>
          </View>

          <View style={styles.saldoContainer}>
            <Text style={styles.ivMoney}>$</Text>
            <Text style={styles.tvSaldoEntero}>{balanceVisible ? balance.integer : '****'}</Text>
            {balanceVisible && <Text style={styles.tvSaldoDecimal}>,{balance.decimal}</Text>}
          </View>

          <View style={styles.totalSaldoContainer}>
            <Text style={styles.tvTotal}>Total $</Text>
            <Text style={styles.tvTotalSaldoEntero}>{balanceVisible ? totalBalance.integer : '****'}</Text>
            {balanceVisible && <Text style={styles.tvTotalSaldoDecimal}>,{totalBalance.decimal}</Text>}
          </View>

          <TouchableOpacity style={styles.btnTuPlata}>
            <Text style={styles.tvTuPlata}>Tu plata</Text>
            <ChevronDownIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.suggestedSection}>
          <Text style={styles.tvSuggested}>Sugeridos Nequi</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.suggestedIconsScrollView} contentContainerStyle={styles.suggestedIconsContent}>
          <View style={styles.suggestedItem}>
            <View style={styles.negocioContainer}>
              <CardIcon />
            </View>
            <Text style={styles.suggestedText}>Mi negocio</Text>
          </View>
          <View style={styles.suggestedItem}>
            <CashinIcon />
            <Text style={styles.suggestedText}>WOM</Text>
          </View>
          <View style={styles.suggestedItem}>
            <CashoutIcon />
            <Text style={styles.suggestedText}>Tus llaves</Text>
          </View>
          <View style={styles.suggestedItem}>
            <SendAtIcon />
            <Text style={styles.suggestedText}>Creditos</Text>
          </View>
          <View style={styles.suggestedItem}>
            <RequestIcon />
            <Text style={styles.suggestedText}>Tigo</Text>
          </View>
          <View style={styles.suggestedItem}>
            <QrIcon />
            <Text style={styles.suggestedText}>Bolsillos</Text>
          </View>
          <View style={styles.suggestedItem}>
            <ServicesMenuIcon />
            <Text style={styles.suggestedText}>Mas{'\n'}Servicios</Text>
          </View>
        </ScrollView>

        <View style={styles.favoriteSection}>
          <View style={styles.favoriteLabelRow}>
            <HeartIcon />
            <Text style={styles.tvFavorites}>Tus favoritos</Text>
          </View>
          <TouchableOpacity>
            <EditIcon />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.cardsScrollView} contentContainerStyle={styles.cardsContent}>
          <View style={styles.cardWrapper}>
            <View style={styles.cardContainer}>
              <CardIcon />
            </View>
            <Text style={styles.tvTargeta}>Tarjeta</Text>
          </View>
          <View style={styles.cardWrapper}>
            <View style={styles.colchonContainer}>
              <ColchonIcon />
            </View>
            <Text style={styles.tvColchon}>Colchon</Text>
          </View>
          <View style={styles.cardWrapper}>
            <View style={styles.bolsillosContainer}>
              <BolsillosIcon />
            </View>
            <Text style={styles.tvBolsillos}>Bolsillos</Text>
          </View>
          <View style={styles.cardWrapper}>
            <View style={styles.goalContainer}>
              <GoalIcon />
            </View>
            <Text style={styles.tvMetas}>Metas</Text>
          </View>
          <View style={styles.cardWrapper}>
            <View style={styles.addContainer}>
              <AddCircleIcon />
            </View>
            <Text style={styles.tvAgrega}>Agrega</Text>
          </View>
        </ScrollView>

        <View style={{height: 100}} />
      </ScrollView>

      <View style={styles.bottomContainer}>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.btnNav, activeTab === 'home' && styles.btnNavActive]} onPress={() => setActiveTab('home')}>
            <HomeIcon selected={activeTab === 'home'} />
            <Text style={[styles.navText, activeTab === 'home' && styles.navTextActive]}>Inicio</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnNav, activeTab === 'movements' && styles.btnNavActive]} onPress={() => setActiveTab('movements')}>
            <MovementsIcon selected={activeTab === 'movements'} />
            <Text style={[styles.navText, activeTab === 'movements' && styles.navTextActive]}>Movimientos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btnNav, activeTab === 'services' && styles.btnNavActive]} onPress={() => setActiveTab('services')}>
            <ClosetIcon selected={activeTab === 'services'} />
            <Text style={[styles.navText, activeTab === 'services' && styles.navTextActive]}>Servicios</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.ivSend} onPress={() => setShowSendMenu(true)}>
          <IcoMoneyIcon />
        </TouchableOpacity>
      </View>

      {showSendMenu && (
        <TouchableOpacity style={styles.sendMenuOverlay} activeOpacity={1} onPress={() => setShowSendMenu(false)}>
          <View style={styles.sendMenuBackground} />
          <View style={styles.sendMenuContent}>
            <View style={styles.sendMenuItem}>
              <Text style={styles.tvServices}>+ Servicios</Text>
              <ServicesMenuIcon />
            </View>
            <View style={styles.sendMenuItem}>
              <Text style={styles.tvCashout}>Saca</Text>
              <CashoutIcon />
            </View>
            <View style={styles.sendMenuItem}>
              <Text style={styles.tvRequest}>Pide</Text>
              <RequestIcon />
            </View>
            <View style={styles.sendMenuItem}>
              <Text style={styles.tvSendAt}>Envía</Text>
              <SendAtIcon />
            </View>
            <View style={styles.sendMenuItem}>
              <Text style={styles.tvQr}>Código QR</Text>
              <QrIcon />
            </View>
            <View style={styles.sendMenuItem}>
              <Text style={styles.tvCashin}>Recarga Nequi</Text>
              <CashinIcon />
            </View>
            <TouchableOpacity style={styles.ivSendClose} onPress={() => setShowSendMenu(false)}>
              <SendOutIcon />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundShapes: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 350 * scale,
    overflow: 'hidden',
  },
  mainScrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 44,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingContainer: {
    marginLeft: 12,
  },
  tvUserGreeting: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  tvUserName: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },
  notiContainer: {
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 2,
    right: 2,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FF0000',
  },
  tvQuestionMark: {
    fontSize: 28,
    color: '#FFFFFF',
  },
  balanceSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  balanceLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 17,
  },
  tvDepositoBajoMonto: {
    fontSize: 14,
    color: '#FFFFFF',
    marginRight: 4,
  },
  saldoContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  ivMoney: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  tvSaldoEntero: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  tvSaldoDecimal: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  totalSaldoContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 10,
    marginStart: 4,
  },
  tvTotal: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  tvTotalSaldoEntero: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  tvTotalSaldoDecimal: {
    fontSize: 12.5,
    color: '#FFFFFF',
  },
  btnTuPlata: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 4,
    paddingVertical: 4,
    paddingLeft: 16,
    paddingRight: 10,
    marginTop: 12,
    height: 26,
  },
  tvTuPlata: {
    fontSize: 13,
    color: '#FFFFFF',
  },
  suggestedSection: {
    marginTop: 80,
    marginHorizontal: 18,
  },
  tvSuggested: {
    fontSize: 13.3,
    color: '#200020',
  },
  suggestedIconsScrollView: {
    marginTop: 22,
  },
  suggestedIconsContent: {
    paddingStart: 38,
    paddingEnd: 38,
    gap: 48,
  },
  suggestedItem: {
    alignItems: 'center',
  },
  negocioContainer: {
    width: 38,
    height: 38,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  suggestedText: {
    fontSize: 12,
    color: '#200020',
    textAlign: 'center',
    marginTop: 6,
  },
  favoriteSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    marginHorizontal: 18,
  },
  favoriteLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tvFavorites: {
    fontSize: 13.3,
    color: '#200020',
  },
  cardsScrollView: {
    paddingBottom: 60,
  },
  cardsContent: {
    paddingStart: 30,
    paddingEnd: 30,
    paddingTop: 20,
    gap: 20,
  },
  cardWrapper: {
    alignItems: 'center',
  },
  cardContainer: {
    width: 65,
    height: 65,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#DA0081',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  colchonContainer: {
    width: 65,
    height: 65,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#DA0081',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  bolsillosContainer: {
    width: 65,
    height: 65,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#DA0081',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  goalContainer: {
    width: 65,
    height: 65,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#DA0081',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  addContainer: {
    width: 65,
    height: 65,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#3c003c',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  tvTargeta: {
    fontSize: 13,
    color: '#200020',
    marginTop: 6,
    textAlign: 'center',
  },
  tvColchon: {
    fontSize: 13,
    color: '#200020',
    marginTop: 6,
    textAlign: 'center',
  },
  tvBolsillos: {
    fontSize: 13,
    color: '#200020',
    marginTop: 6,
    textAlign: 'center',
  },
  tvMetas: {
    fontSize: 13,
    color: '#200020',
    marginTop: 6,
    textAlign: 'center',
  },
  tvAgrega: {
    fontSize: 13,
    color: '#200020',
    marginTop: 6,
    textAlign: 'center',
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 6,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 6,
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
    height: 57,
    elevation: 8,
    shadowColor: '#200020',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    marginRight: 8,
    padding: 4,
  },
  btnNav: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginHorizontal: 16,
  },
  btnNavActive: {
    backgroundColor: '#E8E0EC',
  },
  navText: {
    fontSize: 12,
    color: '#200020',
    marginTop: -2,
  },
  navTextActive: {
    color: '#200020',
  },
  ivSend: {
    width: 57,
    height: 57,
    backgroundColor: '#DA0081',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#DA0081',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  sendMenuOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    elevation: 10,
  },
  sendMenuBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  sendMenuContent: {
    position: 'absolute',
    bottom: 20,
    right: 4,
    alignItems: 'flex-end',
  },
  sendMenuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  tvServices: {
    fontSize: 16,
    color: '#200020',
    marginRight: 2,
  },
  tvCashout: {
    fontSize: 16,
    color: '#200020',
    marginRight: 2,
  },
  tvRequest: {
    fontSize: 16,
    color: '#200020',
    marginRight: 2,
  },
  tvSendAt: {
    fontSize: 16,
    color: '#200020',
    marginRight: 2,
  },
  tvQr: {
    fontSize: 16,
    color: '#200020',
    marginRight: 2,
  },
  tvCashin: {
    fontSize: 16,
    color: '#200020',
    marginRight: 2,
  },
  ivSendClose: {
    marginTop: 4,
    marginRight: 16,
  },
});

export default HomeScreen;
