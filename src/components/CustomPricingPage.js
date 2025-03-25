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
            <div className="pricing-card-description">Perfect for hobbyists and small-scale beekeepers</div>
          </div>
          <div className="pricing-card-body">
            <ul className="pricing-card-features">
              <li>Basic colony management</li>
              <li>Manual inspection tracking</li>
              <li>Basic analytics dashboard</li>
              <li>Up to 5 hives</li>
              <li>20 frames per hive max</li>
              <li>20 images per day max</li>
              <li>1 year image retention</li>
            </ul>
          </div>
          <div className="pricing-card-footer">
            <Link to="https://app.gratheon.com/account/register" className="pricing-button">Get Started</Link>
          </div>
        </div>

        <div className="pricing-card featured">
          <div className="pricing-card-header">
            <div className="pricing-card-title">Essential</div>
            <div className="pricing-card-price">€15<span style={{ fontSize: "1rem" }}>/month</span></div>
            <div className="pricing-card-description">2 weeks free trial <br /> Annual billing</div>
          </div>
          <div className="pricing-card-body">
            <ul className="pricing-card-features">
              <li>AI-assisted frame analysis</li>
              <li>Colony development tracking</li>
              <li>Treatment planning & alerts</li>
              <li>Sensor data integration</li>
              <li>1 user max</li>
              <li>Up to 20 hives</li>
              <li>40 frames per hive</li>
              <li>2 years image retention</li>
            </ul>
          </div>
          <div className="pricing-card-footer">
            <Link to="https://app.gratheon.com/account/register" className="pricing-button">Start Free Trial</Link>
          </div>
        </div>

        <div className="pricing-card">
          <div className="pricing-card-header">
            <div className="pricing-card-title">Professional</div>
            <div className="pricing-card-price">Custom</div>
            <div className="pricing-card-description">€10 per user/month + €5 per beehive/month</div>
          </div>
          <div className="pricing-card-body">
            <ul className="pricing-card-features">
              <li>Multi-user collaboration</li>
              <li>Advanced analytics & reporting</li>
              <li>API access for custom integrations</li>
              <li>Priority support & training</li>
              <li>Up to 50 users</li>
              <li>Up to 10,000 hives</li>
              <li>60 frames per hive max</li>
              <li>7 days video retention</li>
            </ul>
          </div>
          <div className="pricing-card-footer">
            <Link to="https://app.gratheon.com/account/register" className="pricing-button">Contact Sales</Link>
          </div>
        </div>
      </div>

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
            <h3><Link to="/about/products/sensors/sensors">Sensors</Link></h3>
            <div className="hardware-device-image">
              <img src="https://gratheon.com/assets/images/Screenshot%202025-02-14%20at%2018.26.53-41f0bf6a4c13c5d1ae1cb945c8cc1a06.png" alt="Sensors" />
            </div>
          </div>
          <div className="hardware-device-body">
            <div className="hardware-device-pricing">
              <div className="hardware-price-item">
                <span className="price-label">App Subscription</span>
                <span className="price-value">€5 / month</span>
                <span className="price-description">Timeseries data management & analytics</span>
              </div>
              <div className="hardware-price-item">
                <span className="price-label">Device Purchase</span>
                <span className="price-value">€200</span>
                <span className="price-description">One-time payment</span>
              </div>
            </div>
          </div>
          <div className="hardware-device-footer">
            <Link to="/docs/beehive-sensors/" className="pricing-button">Get Started</Link>
          </div>
        </div>

        <div className="hardware-device-card">
          <div className="hardware-device-header">
            <h3><Link to="/about/products/beehive_camera/beehive_camera">Beehive Camera</Link></h3>
            <div className="hardware-device-image">
              <img src="https://gratheon.com/assets/images/Screenshot%202025-02-14%20at%2018.27.00-9e504be04ac885dce2e1a8ff1e4ffae0.png" alt="Beehive Camera" />
            </div>
          </div>
          <div className="hardware-device-body">
            <div className="hardware-device-pricing">
              <div className="hardware-price-item">
                <span className="price-label">App Subscription</span>
                <span className="price-value">€20 / month</span>
                <span className="price-description">Video storage & processing</span>
              </div>
              <div className="hardware-price-item">
                <span className="price-label">Device Purchase</span>
                <span className="price-value">ca. €600</span>
                <span className="price-description">One-time payment</span>
              </div>
            </div>
          </div>
          <div className="hardware-device-footer">
            <Link to="/docs/entrance-observer/" className="pricing-button">Get Started</Link>
          </div>
        </div>

        <div className="hardware-device-card ideation">
          <div className="ideation-badge">In ideation</div>
          <div className="hardware-device-header">
            <h3><Link to="/about/products/robotic_beehive/robotic_beehive">Robotic Beehive</Link></h3>
            <div className="hardware-device-image robotic-beehive-image">
              <img src="https://gratheon.com/assets/images/Screenshot%202025-02-25%20at%2011.25.06-5e6bdf8cbd74362a2be7c362199a6a00.png" alt="Robotic Beehive" />
            </div>
          </div>
          <div className="hardware-device-body">
            <div className="hardware-device-pricing">
              <div className="hardware-price-item">
                <span className="price-label">App Subscription</span>
                <span className="price-value">€50 / month</span>
                <span className="price-description">Automation & data storage services</span>
              </div>
              <div className="hardware-price-item">
                <span className="price-label">Device Purchase</span>
                <span className="price-value">€250 / month</span>
                <span className="price-description">Annual billing</span>
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
            <h3><Link to="/about/products/robotic_apiary/robotic_apiary">Robotic Apiary</Link></h3>
            <div className="hardware-device-image">
              <img src="https://gratheon.com/assets/images/Screenshot%202025-02-14%20at%2018.27.24-365e7c710a846d74c4d87c28849a1f8f.png" alt="Robotic Apiary" />
            </div>
          </div>
          <div className="hardware-device-body">
            <div className="hardware-device-pricing">
              <div className="hardware-price-item">
                <span className="price-label">Device Subscription</span>
                <span className="price-value">€200 / month</span>
                <span className="price-description">Multi-hive management & analytics services</span>
              </div>
              <div className="hardware-price-item">
                <span className="price-label">Device Purchase</span>
                <span className="price-value">€500 / month</span>
                <span className="price-description">Annual billing</span>
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
