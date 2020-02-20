import React from 'react';
import renderer from 'react-test-renderer';

import Wallet from '..\src\component\Wallet.js';

describe('<Wallet />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<Wallet />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });