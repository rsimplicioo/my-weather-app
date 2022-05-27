import OneDSvg from '../assets/images/01d.svg';
import OneNSvg from '../assets/images/01n.svg';

import TwoDSvg from '../assets/images/02d.svg';
import TwoNSvg from '../assets/images/02n.svg';

import ThreeDSvg from '../assets/images/03d.svg';
import ThreeNSvg from '../assets/images/03n.svg';

import FourDSvg from '../assets/images/04d.svg';
import FourNSvg from '../assets/images/04n.svg';

import NineDSvg from '../assets/images/09d.svg';
import NineNSvg from '../assets/images/09n.svg';

import TenDSvg from '../assets/images/10d.svg';
import TenNSvg from '../assets/images/10n.svg';

import ElevenDSvg from '../assets/images/11d.svg';
import ElevenNSvg from '../assets/images/11n.svg';

import ThirteenDSvg from '../assets/images/13d.svg';
import ThirteenNSvg from '../assets/images/13n.svg';

import FiftyDSvg from '../assets/images/01d.svg';
import FiftyNSvg from '../assets/images/01d.svg';

import UnknownSvg from '../assets/images/unknown.svg';

export function getWeatherIcon(type: string) {
  switch (type) {
    case '01d':
      return OneDSvg;
    case '01n':
      return OneNSvg;
    case '02d':
      return TwoDSvg;
    case '02n':
      return TwoNSvg;
    case '03d':
      return ThreeDSvg;
    case '03n':
      return ThreeNSvg;
    case '04d':
      return FourDSvg;
    case '04n':
      return FourNSvg;
    case '09d':
      return NineDSvg;
    case '09n':
      return NineNSvg;
    case '10d':
      return TenDSvg;
    case '10n':
      return TenNSvg;
    case '11d':
      return ElevenDSvg;
    case '11n':
      return ElevenNSvg;
    case '13d':
      return ThirteenDSvg;
    case '13n':
      return ThirteenNSvg;
    case '50d':
      return FiftyDSvg;
    case '50n':
      return FiftyNSvg;
    default:
      return UnknownSvg;
  }
}