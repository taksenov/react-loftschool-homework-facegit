import React from 'react';
import { shallow } from 'enzyme';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppRouter from '../AppRouter';

describe('AppRouter >', () => {
    it('should render AppRouter > Switch', () => {
        const renderedComponent = shallow(<AppRouter />);

        // // Выведем отрендеренный компонент
        console.log(renderedComponent.debug());

        // Find AppRouter Page
        expect(renderedComponent.find('div')).toBeTruthy();
        expect(renderedComponent.find('Switch')).toBeTruthy();
    });
});

// console.log src\components\AppRouter\__tests__\AppRouter.test.js:10
//     <div className="App">
//       <Switch>
//         <Route path="/login" exact={true} component="" />
//         <Connect(PrivateRoute) path="/user/:name" component="" />
//         <Redirect to="/user/dex157" push={false} />
//       </Switch>
//     </div>

// describe('check Comments rendering', () => {
//     it('render Comment component on create new comment', () => {
//         const wrapper = shallow(<NewsPost id={1} text={'test'} />);
//         wrapper.find('input').simulate('change', { target: { value: 10 } });
//         wrapper.update();
//         wrapper.find('input').simulate('keyDown', { keyCode: 13 });
//         wrapper.update();
//         const commentFromState = wrapper.state().comments[0];
//         expect(
//             wrapper.contains(
//                 <Comment
//                     key={commentFromState.id}
//                     id={commentFromState.id}
//                     text={commentFromState.text}
//                     onDelete={wrapper.instance().handleDelete}
//                 />
//             )
//         ).toBeTruthy();
//     });
// });
