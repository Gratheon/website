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
              <li>🍏 Basic apiary management</li>
              <li>🍏 Share links of hive inspections</li>
              <li>⛄️ 1 year image retention</li>
              <li>👁️ Apiary data is public</li>
              <li>🐝 Up to 3 hives</li>
              <li>🐝 10 frames per hive max</li>
              <li>🐢 Low-priority AI detections</li>
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
              <li>🍏 Inspections (up to 10 per hive)</li>
              <li>🍏 Treatments</li>
              <li>🐝 1 user max</li>
              <li>🐝 Up to 20 hives</li>
              <li>🐝 40 frames per hive</li>
              <li>⛄️ 2 year image retention</li>
            </ul>
          </div>
          <div className="pricing-card-footer">
            <Link to="https://app.gratheon.com/account/register" className="pricing-button">Start Free Trial</Link>
          </div>
        </div>

        <div className="pricing-card">
          <div className="pricing-card-header">
            <div className="pricing-card-title">Flexible</div>
            <div className="pricing-card-price">€50 <span style={{ fontSize: "1rem" }}>/ 500 tokens</span></div>
            <div className="pricing-card-description">No limits, pay per use</div>
          </div>
          <div className="pricing-card-body">
            <ul className="pricing-card-features">
              {/* <li>Multi-user collaboration</li>*/}
              <li>🍏 Timeseries data management & analytics</li>
              <li>🍏 API access for custom integrations</li>
              <li>🍏 Priority support & training</li>
              <li>🍏 Video storage & processing</li>
            </ul>
          </div>
          <div className="pricing-card-footer">
            <Link to="mailto:contact@gratheon.com" className="pricing-button">Contact Sales</Link>
          </div>
        </div>
      </div>

      <h3>Flexible tier token pricing</h3>
      <p>
        In order to not limit you in any way, we have introduced a token-based pricing model. 
        You can buy tokens as a package and use them for any of the following actions.
        This allows you to pay only for what you need, without being locked into a subscription plan.
        This also allows us to efficiently manage our resources and provide you with the best possible service.
      </p>
      <div style={{ textAlign: 'center' }}> {/* Added centering div */}
        <table className="token-pricing-table">
          <thead>
            <tr>
            <th>Action</th>
            <th>Token Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1 beehive creation</td><td>3 token</td></tr>
          <tr><td>10 empty frames creation</td><td>2 tokens</td></tr>
          <tr><td>1 frame file upload & analysis</td><td>5 tokens</td></tr>
          <tr><td>1 inspection (beehive snapshot)</td><td>3 tokens</td></tr>
          <tr><td>1 inspection share link</td><td>5 tokens</td></tr>
          <tr><td>100 API requests (sensors API)</td><td>1 token</td></tr>
          <tr><td>6 video API requests (1 min)</td><td>1 token</td></tr>
        </tbody>
      </table>
      </div> {/* Close centering div */}

      <h2>Hardware Devices</h2>

      <p>If you buy a device, you are not vendor-locked and we do not force you to pay for web-app subscription, but it's much less hassle for you and this would support us in the long term as a company. If you choose to setup fully local integration and manage data storage yourself, you can use our docs.</p>

      <div className="device-pricing-info">
        <p><strong>Note:</strong> Each hardware device includes a subscription fee that covers data management services specific to that device:</p>
        <ul>
          <li><strong>Sensors subscription</strong> includes timeseries data management, storage, and analytics</li>
          <li><strong>Beehive Camera subscription</strong> includes video storage, video traffic, and image processing</li>
          <li><strong>Robotic Beehive subscription</strong> includes advanced automation, data storage, and maintenance support</li>
          <li><strong>Robotic Apiary subscription</strong> includes multi-hive management, comprehensive data analytics, and priority support</li>
        </ul>
      </div>

      <div className="hardware-devices-container">
        <div className="hardware-device-card">
          <div className="hardware-device-header">
            <h3><Link to="https://gratheon.com/about/products/sensors/sensors">Sensors</Link></h3>
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
            <h3><Link to="https://gratheon.com/about/products/beehive_camera/beehive_camera">Beehive Camera</Link></h3>
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

        <div className="hardware-device-card ideation">
          <div className="ideation-badge">In ideation</div>
          <div className="hardware-device-header">
            <h3><Link to="https://gratheon.com/about/products/robotic_beehive/robotic_beehive">Robotic Beehive</Link></h3>
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

        <div className="hardware-device-card ideation">
          <div className="ideation-badge">In ideation</div>
          <div className="hardware-device-header">
            <h3><Link to="https://gratheon.com/about/products/robotic_apiary/robotic_apiary">Robotic Apiary</Link></h3>
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
      </div>
    </div>
  );
}
