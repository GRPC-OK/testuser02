export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>TestUser02 - Vulnerable Dependencies</h1>
      <p>✅ Code is secure</p>
      <p>❌ Dependencies have vulnerabilities</p>
      
      <ul>
        <li>express@4.16.0 (vulnerable)</li>
        <li>lodash@4.17.4 (vulnerable)</li>
        <li>moment@2.24.0 (vulnerable)</li>
        <li>axios@0.18.0 (vulnerable)</li>
      </ul>
    </div>
  );
}