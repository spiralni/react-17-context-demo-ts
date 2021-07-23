import './App.css'
import GIssues from './components/GIssues'
import IssueProvider from './contexts/IssueProvider'

function App() {
  return <IssueProvider url="https://api.github.com/repos/ContentPI/ContentPI/issues">
    <GIssues />
  </IssueProvider>
}

export default App;
