import { SourceCodeSnippet } from '../../components/mdx/SourceCodeSnippet';
import Example from './sandbox/src/TS';
const JS = require('!!raw-loader!./sandbox/src/JS.js').default;
const TS = require('!!raw-loader!./sandbox/src/TS.tsx').default;

const ExampleTable = () => {
  return (
    <SourceCodeSnippet
      Component={Example}
      legacyCode={JS}
      typeScriptCode={TS}
      tableId="enable-row-pinning-select"
    />
  );
};

export default ExampleTable;
