import React from 'react';
import renderer from 'react-test-renderer';

import yesSuggestion from '..\src\component\yesSuggestion.js';

describe('<yesSuggestion />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<yesSuggestion />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });