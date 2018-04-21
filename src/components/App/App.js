import React from 'react';
// import Butter from 'buttercms';

// import { butterCMSId } from '../../config/keys';

// const butter = Butter(butterCMSId);

const App = () => {
  return (
    <div>
      <h2>
        Hi there
        <p>Hello World</p>
      </h2>
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
