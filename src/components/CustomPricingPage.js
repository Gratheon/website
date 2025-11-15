import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import '../css/pricing.css';

export default function CustomPricingPage() {
  const [calculatorValues, setCalculatorValues] = useState({
    telemetryRequests: 0,
    dataPoints: 0,
    videoMinutes: 0,
    smsAlerts: 0,
    webhooks: 0,
    hives: 0,
    frames: 0,
    frameUploads: 0,
    inspections: 0
  });

  const calculateTokens = () => {
    const tokens =
      (calculatorValues.telemetryRequests * 0.002) +
      (calculatorValues.dataPoints * 0.0002) +
      (calculatorValues.videoMinutes * 0.27) +
      (calculatorValues.smsAlerts * 0.3) +
      (calculatorValues.webhooks * 0.01) +
      (calculatorValues.hives * 2) +
      (calculatorValues.frames * 0.02) +
      (calculatorValues.frameUploads * 0.25) +
      (calculatorValues.inspections * 1);
    return Math.round(tokens * 100) / 100;
  };

  const calculateCost = () => {
    const tokens = calculateTokens();
    return Math.round((tokens / 1000) * 100 * 100) / 100;
  };

  const handleInputChange = (field, value) => {
    setCalculatorValues(prev => ({
      ...prev,
      [field]: parseInt(value) || 0
    }));
  };

  return (
    <div className="pricing-page-wrapper">
      <div className="pricing-page-header">
        <h1 className="pricing-page-title">⚖️ Pricing Plans</h1>
        <p className="pricing-page-subtitle">
          Choose the plan that best fits your beekeeping needs. Our subscription model is designed to support beekeepers of all sizes.
        </p>
      </div>

      <div className="pricing-container">
        <div className="pricing-card">
          <div className="pricing-card-header">
            <div className="pricing-card-title">Hobbyist</div>
            <div className="pricing-card-price">Free</div>
            <div className="pricing-card-description">Perfect for beginners</div>
          </div>
          <div className="pricing-card-body">
            <ul className="pricing-card-features">
              <li>🍏 Share links of hive inspections</li>
              <li>📦 Apiary, Hive management</li>
              <li>🖼️ Frame image uploads</li>
              <li>🐝 Worker bee detection</li>
              <li>👑 Queen detection</li>
              <li>🐝 Up to 3 hives</li>
              <li>🐝 10 frames per hive max</li>
              <li>🐢 Low-priority AI detections</li>
              <li>♻️ Public beehive view</li>
              <li>♻️ QR-code generation</li>
              <li>⛄️ 1 year image retention</li>
            </ul>
          </div>
          <div className="pricing-card-footer">
            <Link to="https://app.gratheon.com/account/register" className="pricing-button">Get Started</Link>
          </div>
        </div>

        <div className="pricing-card featured simple">
          <div className="pricing-card-header">
            <div className="pricing-card-title">Starter</div>
            <div className="pricing-card-price">€15<span style={{ fontSize: "1rem" }}> / month</span></div>
            <div className="pricing-card-description">
              For small-scale beekeepers
            </div>
          </div>
          <div className="pricing-card-body">
            <ul className="pricing-card-features">
              <li>🍏 AI-assisted frame analysis</li>
              <li>📓 Inspections (up to 10 per hive)</li>
              <li>🍏 Treatments</li>
              <li>🧑‍🚀 1 user max</li>
              <li>📈 Hive telemetry storage (1 hour resolution)</li>
              <li>🐝 Up to 20 beehives</li>
              <li>🐝 30 frames per beehive</li>
              <li>⛄️ 2 year image retention</li>
              <li>🔔 Alert management (in development)</li>
            </ul>
          </div>
          <div className="pricing-card-footer">
            <Link to="https://app.gratheon.com/account/register" className="pricing-button">Start Free Trial</Link>
          </div>
        </div>

        <div className="pricing-card featured professional" style={{ opacity: 0.6 }}>
          <div className="pricing-card-header">
            <div className="pricing-card-title">Professional</div>
            <div className="pricing-card-price">€49<span style={{ fontSize: "1rem" }}> / month</span></div>
            <div className="pricing-card-description">
              For commercial beekeepers
            </div>
            <div style={{
              background: '#f39c12',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              marginTop: '8px',
              display: 'inline-block'
            }}>
              In Development
            </div>
          </div>
          <div className="pricing-card-body">
            <ul className="pricing-card-features">
              <li>📈 Hive telemetry storage (10 min resolution)</li>
              <li>📊 Timeseries data management & analytics</li>
              <li>🔔 Timeseries Anomaly detection</li>
              <li>📓 Inspections (up to 20 per hive)</li>
              <li>🧑‍🚀 Up to 20 user accounts</li>
              <li>↔️ Create colony split</li>
              <li>🫶🏻 Join multiple colonies</li>
              <li>♻️ Hive ownership transfer</li>
              <li>⚖️ Colony comparison</li>
              <li>📦 Inventory management</li>
              <li>🐝 Up to 150 beehives</li>
              <li>⛄️ 2 year image retention</li>
            </ul>
          </div>
          <div className="pricing-card-footer">
            <Link to="mailto:sales@gratheon.com" className="pricing-button">Contact Sales</Link>
          </div>
        </div>


        <div className="pricing-card featured flexible" style={{ opacity: 0.6 }}>
          <div className="pricing-card-header">
            <div className="pricing-card-title">Flexible</div>
            <div className="pricing-card-price">€100 <span style={{ fontSize: "1rem" }}> for 1000 tokens*</span></div>
            <div className="pricing-card-description">For research & enterprise users</div>
            <div style={{
              background: '#f39c12',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '0.75rem',
              marginTop: '8px',
              display: 'inline-block'
            }}>
              In Development
            </div>
          </div>
          <div className="pricing-card-body">
            <ul className="pricing-card-features">
              <li>📈 Hive telemetry (up to 30 sec resolution)</li>
              <li>🎥 Entrance-observer metrics & video storage</li>
              <li>📲 SMS alerts</li>
              <li>🪝 Webhooks integration</li>
              <li>📦 Unlimited hive management</li>
              <li>🖼️ Unlimited frame uploads & analysis</li>
              <li>📓 Unlimited beehive inspections</li>
              <li>⛄️ Unlimited image retention</li>
            </ul>
          </div>
          <div className="pricing-card-footer">
            <Link to="mailto:sales@gratheon.com" className="pricing-button">Contact Sales</Link>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <h2>Flexible Plan - Token Usage & Price Calculator</h2>

        <div className="price-calculator">
          <table className="token-calculator-table">
            <thead>
              <tr>
                <th>Service</th>
                <th>Token Cost</th>
                <th>Usage/Month</th>
                <th>Tokens Needed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  📦 Beehive management
                  <div className="service-description">Managing hive records, locations, and basic data</div>
                </td>
                <td>2 tokens/month</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.hives}
                    onChange={(e) => handleInputChange('hives', e.target.value)}
                    min="0"
                    placeholder="hives"
                  />
                </td>
                <td className="token-result">{(calculatorValues.hives * 2).toFixed(0)}</td>
              </tr>
              <tr>
                <td>
                  📦 Frame management
                  <div className="service-description">Storing frame data, positions, and metadata</div>
                </td>
                <td>0.02 tokens/month</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.frames}
                    onChange={(e) => handleInputChange('frames', e.target.value)}
                    min="0"
                    placeholder="frames"
                  />
                </td>
                <td className="token-result">{(calculatorValues.frames * 0.02).toFixed(2)}</td>
              </tr>
              <tr>
                <td>
                  🖼️ Frame upload & analysis
                  <div className="service-description">AI analysis of frame images for bee detection, disease identification</div>
                </td>
                <td>0.25 tokens</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.frameUploads}
                    onChange={(e) => handleInputChange('frameUploads', e.target.value)}
                    min="0"
                    placeholder="uploads"
                  />
                </td>
                <td className="token-result">{(calculatorValues.frameUploads * 0.25).toFixed(2)}</td>
              </tr>
              <tr>
                <td>
                  📓 Beehive inspection
                  <div className="service-description">Recording and storing detailed hive inspection data</div>
                </td>
                <td>1 token/month</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.inspections}
                    onChange={(e) => handleInputChange('inspections', e.target.value)}
                    min="0"
                    placeholder="inspections"
                  />
                </td>
                <td className="token-result">{(calculatorValues.inspections * 1).toFixed(0)}</td>
              </tr>
              <tr>
                <td>
                  📈 Telemetry request
                  <div className="service-description">Individual sensor data requests from IoT devices</div>
                </td>
                <td>0.002 tokens</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.telemetryRequests}
                    onChange={(e) => handleInputChange('telemetryRequests', e.target.value)}
                    min="0"
                    placeholder="requests"
                  />
                </td>
                <td className="token-result">{(calculatorValues.telemetryRequests * 0.002).toFixed(3)}</td>
              </tr>
              <tr>
                <td>
                  📈 Data point storage
                  <div className="service-description">Long-term storage of sensor measurements and historical data</div>
                </td>
                <td>0.0002 tokens/month</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.dataPoints}
                    onChange={(e) => handleInputChange('dataPoints', e.target.value)}
                    min="0"
                    placeholder="data points"
                  />
                </td>
                <td className="token-result">{(calculatorValues.dataPoints * 0.0002).toFixed(4)}</td>
              </tr>
              <tr>
                <td>
                  📲 SMS alert
                  <div className="service-description">Text message notifications for hive alerts and warnings</div>
                </td>
                <td>0.3 tokens</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.smsAlerts}
                    onChange={(e) => handleInputChange('smsAlerts', e.target.value)}
                    min="0"
                    placeholder="alerts"
                  />
                </td>
                <td className="token-result">{(calculatorValues.smsAlerts * 0.3).toFixed(1)}</td>
              </tr>
              <tr>
                <td>
                  🎥 Video processing & storage
                  <div className="service-description">Analysis and storage of entrance observer video footage</div>
                </td>
                <td>0.27 tokens/minute/month</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.videoMinutes}
                    onChange={(e) => handleInputChange('videoMinutes', e.target.value)}
                    min="0"
                    placeholder="minutes"
                  />
                </td>
                <td className="token-result">{(calculatorValues.videoMinutes * 0.27).toFixed(2)}</td>
              </tr>
              <tr>
                <td>
                  🪝 Webhook call
                  <div className="service-description">API integrations and automated data transfers</div>
                </td>
                <td>0.01 tokens</td>
                <td>
                  <input
                    type="number"
                    value={calculatorValues.webhooks}
                    onChange={(e) => handleInputChange('webhooks', e.target.value)}
                    min="0"
                    placeholder="calls"
                  />
                </td>
                <td className="token-result">{(calculatorValues.webhooks * 0.01).toFixed(2)}</td>
              </tr>
            </tbody>
          </table>

          <div className="calculator-results">
            <div className="result-item">
              <strong>Total tokens needed: {calculateTokens()}</strong>
            </div>
            <div className="result-item">
              <strong>Estimated monthly cost: €{calculateCost()}</strong>
            </div>
          </div>
        </div>
      </div>


      <h2>Hardware Devices</h2>

      <p>If you buy a device, you are not vendor-locked and we do not force you to pay for web-app subscription, but it's much less hassle for you and this would support us in the long term as a company. If you choose to setup fully local integration and manage data storage yourself, you can use our docs.</p>


      <div className="hardware-devices-container">
        <div className="hardware-device-card">
          <div className="hardware-device-header">
            <h3><Link to="https://gratheon.com/about/products/sensors/">Sensors</Link></h3>
            <div className="hardware-device-image">
              <img src="https://gratheon.com/assets/images/Screenshot%202025-02-14%20at%2018.26.53-41f0bf6a4c13c5d1ae1cb945c8cc1a06.png" alt="Sensors" />
            </div>
          </div>
          <div className="hardware-device-body">
            <div className="hardware-device-pricing">
              {/* <div className="hardware-price-item">
                <span className="price-label">App Subscription</span>
                <span className="price-value">€5 / month</span>
                <span className="price-description">Timeseries data management & analytics</span>
              </div> */}
              <div className="hardware-price-item">
                <span className="price-label">Device Purchase</span>
                <span className="price-value">€200</span>
                <span className="price-description">One-time payment</span>
              </div>
            </div>
          </div>
          <div className="hardware-device-footer">
            <Link to="https://gratheon.com/docs/beehive-sensors/" className="pricing-button">Get Started</Link>
          </div>
        </div>

        <div className="hardware-device-card">
          <div className="hardware-device-header">
            <h3><Link to="https://gratheon.com/about/products/entrance_observer/">Entrance observer</Link></h3>
            <div className="hardware-device-image">
              <img src="https://gratheon.com/assets/images/Screenshot%202025-02-14%20at%2018.27.00-9e504be04ac885dce2e1a8ff1e4ffae0.png" alt="Beehive Camera" />
            </div>
          </div>
          <div className="hardware-device-body">
            <div className="hardware-device-pricing">
              {/* <div className="hardware-price-item">
                <span className="price-label">App Subscription</span>
                <span className="price-value">€20 / month</span>
                <span className="price-description">Video storage & processing</span>
              </div> */}
              <div className="hardware-price-item">
                <span className="price-label">Device Purchase</span>
                <span className="price-value">ca. €600</span>
                <span className="price-description">One-time payment</span>
              </div>
            </div>
          </div>
          <div className="hardware-device-footer">
            <Link to="https://gratheon.com/docs/entrance-observer/" className="pricing-button">Get Started</Link>
          </div>
        </div>

        <div className="hardware-device-card ideation" style={{opacity: 0.3}}>
          <div className="ideation-badge">In ideation</div>
          <div className="hardware-device-header">
            <h3><Link to="https://gratheon.com/about/products/robotic_beehive/">Robotic Beehive</Link></h3>
            <div className="hardware-device-image robotic-beehive-image">
              <img src="https://gratheon.com/assets/images/Screenshot%202025-02-25%20at%2011.25.06-5e6bdf8cbd74362a2be7c362199a6a00.png" alt="Robotic Beehive" />
            </div>
          </div>
          <div className="hardware-device-body">
            <div className="hardware-device-pricing">
              {/* <div className="hardware-price-item">
                <span className="price-label">App Subscription</span>
                <span className="price-value">€50 / month</span>
                <span className="price-description">Automation & data storage services</span>
              </div> */}
              <div className="hardware-price-item">
                <span className="price-label">Device Purchase</span>
                <span className="price-value">ca. €3000</span>
                <span className="price-description">One-time payment</span>
              </div>
            </div>
          </div>
          <div className="hardware-device-footer">
            <Link to="https://discord.gg/PcbP4uedWj" className="pricing-button">Join Discord</Link>
          </div>
        </div>

        <div className="hardware-device-card ideation" style={{opacity: 0.3}}>
          <div className="ideation-badge">In ideation</div>
          <div className="hardware-device-header">
            <h3><Link to="https://gratheon.com/about/products/robotic_apiary/">Robotic Apiary</Link></h3>
            <div className="hardware-device-image">
              <img src="https://gratheon.com/assets/images/Screenshot%202025-02-14%20at%2018.27.24-365e7c710a846d74c4d87c28849a1f8f.png" alt="Robotic Apiary" />
            </div>
          </div>
          <div className="hardware-device-body">
            <div className="hardware-device-pricing">
              {/* <div className="hardware-price-item">
                <span className="price-label">Device Subscription</span>
                <span className="price-value">€200 / month</span>
                <span className="price-description">Multi-hive management & analytics services</span>
              </div> */}
              <div className="hardware-price-item">
                <span className="price-label">Device Purchase</span>
                <span className="price-value">ca. €8000</span>
                <span className="price-description">One-time payment</span>
              </div>
            </div>
          </div>
          <div className="hardware-device-footer">
            <Link to="https://discord.gg/PcbP4uedWj" className="pricing-button">Join Discord</Link>
          </div>
        </div>
      
        <div className="device-pricing-info">
          <p><strong>Note:</strong> Each hardware device operates off-grid. For integration with web-app, a subscription fee must be used that covers data management services specific to that device</p>
          <p>* Tokens are valid for 1 year. Unused tokens do not roll over.</p>
        </div>
      </div>
    </div>
  );
}
