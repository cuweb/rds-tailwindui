import React from 'react';
import CarletonLogo from '../../../assets/cu-logo-stacked-white-outline.svg';
import { Link } from '../../Link/Link';

export const FooterWave = () => {
  return (
    <div className="not-prose grid justify-center bg-cu-waves-red bg-[length:100%] bg-bottom bg-no-repeat pb-24 sm:pb-36 lg:pb-44">
      <img
        className="w-auto h-32 mx-auto mb-6 sm:h-44"
        src={CarletonLogo}
        alt="Carleton University logo"
      />
      <ul className="flex justify-center space-x-4 text-xs text-gray-400 bg-cu-black-900 sm:space-x-6 sm:text-sm">
        <li key="privacy">
          <Link
            href="https://carleton.ca/privacy/privacy-notices/general-notice-of-collection-use-and-disclosure/"
            className="hover:text-white"
          >
            Privacy Policy
          </Link>
        </li>
        <li key="accessibility">
          <Link
            href="https://carleton.ca/accessibility/"
            className="hover:text-white"
          >
            Accessibility
          </Link>
        </li>
        <li key="copyright">
          <Link
            href="https://library.carleton.ca/copyright-carleton"
            className="hover:text-white"
          >
            &copy; Copyright {new Date().getFullYear()}
          </Link>
        </li>
      </ul>
    </div>
  );
};
