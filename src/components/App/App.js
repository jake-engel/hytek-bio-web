import React from 'react';
import { Route } from 'react-router-dom';
import RandPage from '../Page/RandPage';
// import Butter from 'buttercms';

// import { butterCMSId } from '../../config/keys';

// const butter = Butter(butterCMSId);

const App = () => {
  return (
    <div>
      <div>
        <h2>
          Hi there
          <p>Hello World</p>
        </h2>
      </div>
      <div>
        <Route path="/rand" component={RandPage} />
      </div>
    </div>
  );
};

export default App;

// Sample CMS Retrieval
// butter.content
//   .retrieve(['test_content_label'])
//   .then(function({ data: { data } }) {
//     console.log(data);
//   });
