import React from 'react';
import Link from '@docusaurus/Link';
import '../css/pricing.css';

export default function CustomPricingPage() {
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
            <div className="pricing-card-title">Community</div>
            <div className="pricing-card-price">Free</div>
            <div className="pricing-card-description">Perfect for hobbyists</div>
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

        <div className="pricing-card featured">
          <div className="pricing-card-header">
            <div className="pricing-card-title">Simple</div>
            <div className="pricing-card-price">€15<span style={{ fontSize: "1rem" }}> / month</span></div>
            <div className="pricing-card-description">
              Flat price with limits
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

        <div className="pricing-card featured" style={{opacity: 0.5}}>
          <div className="pricing-card-header">
            <div className="pricing-card-title">Professional</div>
            <div className="pricing-card-price">€49<span style={{ fontSize: "1rem" }}> / month</span></div>
            <div className="pricing-card-description">
              (In development)
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
            <Link to="https://app.gratheon.com/account/register" className="pricing-button">Coming on demand</Link>
          </div>
        </div>


        <div className="pricing-card" style={{opacity: 0.5}}>
          <div className="pricing-card-header">
            <div className="pricing-card-title">Flexible</div>
            <div className="pricing-card-price">€100 <span style={{ fontSize: "1rem" }}> for 1000 tokens*</span></div>
            <div className="pricing-card-description">No limits, pay per use</div>
          </div>
          <div className="pricing-card-body">
            <ul className="pricing-card-features">
              <li>
                📈 Hive telemetry (up to 30 sec resolution) <br />
                1 telemetry request = 0.01 tokens <br />
                1 data point storage = 0.001 tokens/month
              </li>
              <li>
                🎥 Entrance-observer metrics (up to 30 sec resolution) <br />
                1 telemetry request = 0.01 tokens <br />
                1 data point storage = 0.001 tokens/month
              </li>
              <li>
                🎥 Entrance-observer video storage <br />
                1 min of video processing = 0.17 tokens <br />
                1 min of video storage = 0.1 tokens/mo
              </li>
              <li>
                📲 SMS alerts<br />
                1 SMS = 0.5 tokens
                </li>
              <li>
                🪝 Webhooks integration<br />
                1 webhook call = 0.01 tokens
              </li>

              <li>
                📦 Hive management<br />
                1 beehive = 3 tokens/mo<br />
                1 frame = 0.05 tokens/mo
              </li>
              <li>
                🖼️ 1 frame file upload & analysis<br />
                1 frame upload = 5 tokens
              </li>

              <li>
                📓 Beehive inspection<br />
                3 tokens / mo
              </li>
              
            </ul>
          </div>
          <div className="pricing-card-footer">
            <Link to="mailto:contact@gratheon.com" className="pricing-button">Contact Sales</Link>
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
