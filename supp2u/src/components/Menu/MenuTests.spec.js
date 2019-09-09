import React from 'react';
import { mount, configure, shallow, enzyme } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Adapter from 'enzyme-adapter-react-16';

// import Customer from './AddCustomerPresentation'
import Item from './ItemCreator';

configure({ adapter: new Adapter() });

describe('Item Creator Renders', () => {
    // If Map component render is ever non functional, this should fail
    it('should render correctly when component called', () => {
      const item = shallow(<Item />);

      expect(item).toMatchSnapshot();
      expect(item.exists()).toBe(true)
    });
});