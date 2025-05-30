    import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <h1>TestUser02 - Secure Code with Vulnerable Dependencies</h1>
      <p>✅ This application has secure code but vulnerable dependencies.</p>
      
      <div style={{ marginTop: '20px' }}>
        <h2>Features:</h2>
        <ul>
          <li>✅ No SQL Injection vulnerabilities</li>
          <li>✅ No XSS vulnerabilities</li>
          <li>✅ No Code Injection vulnerabilities</li>
          <li>❌ Uses vulnerable npm packages</li>
          <li>❌ Insecure Docker configuration</li>
        </ul>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Test API:</h3>
        <button onClick={() => fetch('/api/simple').then(r => r.json()).then(d => setMessage(d.message))}>
          Test Simple API
        </button>
        {message && <p>Response: {message}</p>}
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Vulnerable Dependencies:</h3>
        <ul>
          <li>express@4.16.0 (CVE-2022-24999)</li>
          <li>lodash@4.17.4 (CVE-2019-10744)</li>
          <li>moment@2.24.0 (CVE-2022-24785)</li>
          <li>axios@0.18.0 (CVE-2020-28168)</li>
        </ul>
      </div>
    </div>
  );
}