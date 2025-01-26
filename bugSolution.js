// bug.js
import * as React from 'react';
import { Constants } from 'expo';

function App() {
  const [version, setVersion] = React.useState('loading...');

  React.useEffect(() => {
    async function getVersion() {
        const { manifest } = Constants;
        if (manifest && manifest.version) {
          setVersion(manifest.version);
        } else {
          setVersion('Version not available.');
        }
    }
    getVersion();
  }, []);

  return (
    <React.Fragment>
      <h1>App Version: {version}</h1>
    </React.Fragment>
  );
}
export default App;

// bugSolution.js
//This file contains the solution. The bug is solved by using useEffect to ensure the manifest is loaded before accessing the version property and provides a fallback value.
import * as React from 'react';
import { Constants } from 'expo';

function App() {
  const [version, setVersion] = React.useState('loading...');

  React.useEffect(() => {
    async function getVersion() {
      const { manifest } = Constants;
      if (manifest && manifest.version) {
        setVersion(manifest.version);
      } else {
        // Provide a fallback value instead of undefined
        setVersion('Version not available');
      }
    }
    getVersion();
  }, []);

  return (
    <React.Fragment>
      <h1>App Version: {version}</h1>
    </React.Fragment>
  );
}
export default App;