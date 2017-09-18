import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import BundleWrappingRoute from '../../../components/BundleWrappingRoute/BundleWrappingRoute';
// import Contact from '../containers/Contact/Contact';
import ContactRoute from './contact';
import SelfRoute from './self';

const loadChatAsync = () => import(/* webpackChunkName: 'containers/Wechat/Chat' */ '../containers/Chat/Chat');
const loadExploreAsync = () => import(/* webpackChunkName: 'containers/Wechat/Explore' */ '../containers/Explore/Explore');
// <Route path="/wechat/contact" render={nextProps => (<Contact {...nextProps}><ContactRoute /></Contact>)} />
const WechatRouter = (props) => {
  const loadContactAsync = () => import(/* webpackChunkName: 'containers/Wechat/Contact' */ '../containers/Contact/Contact');
  const loadSelfAsync = () => import(/* webpackChunkName: 'containers/Wechat/Self' */ '../containers/Self/Self');

  return (
    <Switch>
      <Redirect exact from="/wechat" to="/wechat/chat" />
      <BundleWrappingRoute {...props} path="/wechat/chat" load={loadChatAsync} />
      <BundleWrappingRoute {...props} path="/wechat/contact" load={loadContactAsync}>
        {
          nextProps => <ContactRoute {...nextProps} />
        }
      </BundleWrappingRoute>
      <BundleWrappingRoute {...props} path="/wechat/explore" load={loadExploreAsync} />
      <BundleWrappingRoute {...props} path="/wechat/self" load={loadSelfAsync}>
        {
          nextProps => <SelfRoute {...nextProps} />
        }
      </BundleWrappingRoute>
    </Switch>
  );
};

export default WechatRouter;
