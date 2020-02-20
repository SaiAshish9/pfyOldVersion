import React from 'react';
import renderer from 'react-test-renderer';

import MoreSuggestion from '..\src\component\MoreSuggestion.js';

describe('<MoreSuggestion />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<MoreSuggestion />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });