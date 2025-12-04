import { useState } from 'react';
import { Play, Save, Download, Copy, Terminal } from 'lucide-react';
import './PythonScripts.css';

interface Script {
  id: string;
  name: string;
  code: string;
}

const sampleScripts: Script[] = [
  {
    id: 'regression',
    name: 'Linear Regression',
    code: `import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

# Load data
data = pd.read_csv('financial_data.csv')
X = data[['marketing_spend', 'rd_investment']]
y = data['revenue_growth']

# Train model
model = LinearRegression()
model.fit(X, y)

# Results
print(f"R-squared: {model.score(X, y):.4f}")
print(f"Coefficients: {model.coef_}")
print(f"Intercept: {model.intercept_:.4f}")`,
  },
  {
    id: 'montecarlo',
    name: 'Monte Carlo VaR',
    code: `import numpy as np
import matplotlib.pyplot as plt

# Parameters
portfolio_value = 1000000
volatility = 0.15
time_horizon = 1
simulations = 10000

# Run simulation
returns = np.random.normal(0, volatility, simulations)
portfolio_returns = portfolio_value * returns

# Calculate VaR
var_95 = np.percentile(portfolio_returns, 5)
var_99 = np.percentile(portfolio_returns, 1)

print(f"VaR 95%: \${var_95}")
print(f"VaR 99%: \${var_99}")`,
  },
  {
    id: 'nlp',
    name: 'Sentiment Analysis',
    code: `from transformers import pipeline
import pandas as pd

# Initialize sentiment analyzer
sentiment = pipeline('sentiment-analysis')

# Load earnings call transcripts
transcripts = pd.read_csv('transcripts.csv')

# Analyze sentiment
results = []
for text in transcripts['content']:
    score = sentiment(text[:512])[0]
    results.append(score)

# Summary
df = pd.DataFrame(results)
print(df['label'].value_counts())
print(f"Average score: {df['score'].mean():.2f}")`,
  },
];

const availableLibraries = [
  'NumPy',
  'Pandas',
  'Scikit-learn',
  'Matplotlib',
  'TensorFlow',
  'PyTorch'
];

export function PythonScripts() {
  const [selectedScript, setSelectedScript] = useState<Script>(sampleScripts[0]);
  const [code, setCode] = useState(selectedScript.code);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setOutput('Running script...\n\n');
    
    setTimeout(() => {
      const mockOutput = `Script executed successfully!

R-squared: 0.9245
Coefficients: [ 1.628  0.843]
Intercept: 5.2340

Execution time: 0.234s
Memory usage: 45.2 MB`;
      
      setOutput(mockOutput);
      setIsRunning(false);
    }, 1500);
  };

  const handleScriptSelect = (script: Script) => {
    setSelectedScript(script);
    setCode(script.code);
    setOutput('');
  };

  return (
    <div className="python-scripts">
      <div className="scripts-header">
        <div className="header-content">
          <h2 className="scripts-title">Python Scripts Console</h2>
          <p className="scripts-subtitle">Execute custom Python scripts for advanced analysis</p>
        </div>
        <div className="header-actions">
          <button className="secondary-button">
            <Save className="button-icon" />
            Save Script
          </button>
          <button className="secondary-button">
            <Download className="button-icon" />
            Export
          </button>
        </div>
      </div>

      <div className="scripts-layout">
        {/* Script Library */}
        <div className="script-library">
          <h4 className="library-title">Script Library</h4>
          <div className="script-list">
            {sampleScripts.map((script) => (
              <button
                key={script.id}
                onClick={() => handleScriptSelect(script)}
                className={`script-button ${selectedScript.id === script.id ? 'script-button-active' : 'script-button-inactive'}`}
              >
                {script.name}
              </button>
            ))}
          </div>

          <div className="libraries-section">
            <h4 className="libraries-title">Available Libraries</h4>
            <div className="libraries-list">
              {availableLibraries.map((lib, i) => (
                <div key={i} className="library-item">
                  <div className="library-indicator"></div>
                  <span className="library-name">{lib}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Code Editor & Output */}
        <div className="scripts-content">
          {/* Code Editor */}
          <div className="code-editor">
            <div className="editor-header">
              <div className="header-left">
                <Terminal className="terminal-icon" />
                <span className="file-name">{selectedScript.name}.py</span>
              </div>
              <div className="header-right">
                <button className="icon-button">
                  <Copy className="icon" />
                </button>
                <button 
                  onClick={handleRun}
                  disabled={isRunning}
                  className="run-button"
                >
                  <Play className="run-icon" />
                  {isRunning ? 'Running...' : 'Run Script'}
                </button>
              </div>
            </div>
            
            <div className="code-area">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="code-textarea"
                spellCheck={false}
              />
            </div>
          </div>

          {/* Output Console */}
          <div className="output-console">
            <div className="console-header">
              <span className="console-title">Output Console</span>
            </div>
            
            <div className="console-output">
              {output ? (
                <pre className="output-text">{output}</pre>
              ) : (
                <p className="no-output">Run a script to see output here...</p>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="stats-grid">
            <div className="stat-card">
              <p className="stat-label">Scripts Run</p>
              <h4 className="stat-value">47</h4>
            </div>
            <div className="stat-card">
              <p className="stat-label">Avg Execution Time</p>
              <h4 className="stat-value">1.2s</h4>
            </div>
            <div className="stat-card">
              <p className="stat-label">Success Rate</p>
              <h4 className="stat-value">94.7%</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}