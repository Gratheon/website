import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import '../css/pricing.css';

export default function PricingPage() {
  return (
    <Layout
      title="Pricing"
      description="Pricing plans for Gratheon products and services"
      wrapperClassName="pricing-page-no-sidebar"
      noFooter={false}>
      <div className="pricing-page-wrapper">
        <div className="pricing-page-header">
          <h1 className="pricing-page-title">⚖️ Pricing Plans</h1>
          <p className="pricing-page-subtitle">
            Choose the plan that best fits your beekeeping needs. Our flexible subscription model supports beekeepers from hobbyists to large operations.
          </p>
          <div className="pricing-highlight-bar">
            <span className="highlight-item">🟡 Starter - Perfect for beginners</span>
            <span className="highlight-item">🟢 Professional - For serious beekeepers</span>
            <span className="highlight-item">🔵 Flexible - One-time purchase</span>
          </div>
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
                <li>🆓 Always free</li>
                <li>📦 Up to 5 hives</li>
                <li>🖼️ 20 frames per hive max</li>
                <li>📸 20 images per day max</li>
                <li>💾 1 year image retention</li>
                <li>💬 Community support</li>
              </ul>
            </div>
            <div className="pricing-card-footer">
              <Link to="#" className="pricing-button">Get Started</Link>
            </div>
          </div>
          
          <div className="pricing-card simple featured">
            <div className="pricing-card-header">
              <div className="pricing-card-title">Starter</div>
              <div className="pricing-card-price">
                €22<span style={{fontSize: "1rem"}}>/month</span>
                <br />
                <span style={{fontSize: "1.2rem", opacity: 0.8}}>€220/year</span>
                <br />
                <small style={{fontSize: "0.8rem", opacity: 0.7}}>Save 17% with yearly billing</small>
              </div>
              <div className="pricing-card-description">2 weeks free trial</div>
            </div>
            <div className="pricing-card-body">
              <ul className="pricing-card-features">
                <li>✅ 1 user account</li>
                <li>📦 Up to 20 hives</li>
                <li>🖼️ 40 frames per hive</li>
                <li>💾 2 years image retention</li>
                <li>📧 Email support</li>
                <li>📱 Mobile app access</li>
              </ul>
            </div>
            <div className="pricing-card-footer">
              <Link to="#" className="pricing-button">Start Free Trial</Link>
            </div>
          </div>
          
          <div className="pricing-card professional featured">
            <div className="pricing-card-header">
              <div className="pricing-card-title">Professional</div>
              <div className="pricing-card-price">
                €55<span style={{fontSize: "1rem"}}>/month</span>
                <br />
                <span style={{fontSize: "1.2rem", opacity: 0.8}}>€599/year</span>
                <br />
                <small style={{fontSize: "0.8rem", opacity: 0.7}}>Save 9% with yearly billing</small>
              </div>
              <div className="pricing-card-description">Advanced beekeeping management</div>
            </div>
            <div className="pricing-card-body">
              <ul className="pricing-card-features">
                <li>👥 Up to 50 users</li>
                <li>🏭 Up to 10,000 hives</li>
                <li>🖼️ 60 frames per hive max</li>
                <li>🎥 7 days video retention</li>
                <li>📊 Advanced analytics</li>
                <li>🔧 Priority support</li>
                <li>🚀 API access</li>
              </ul>
            </div>
            <div className="pricing-card-footer">
              <Link to="#" className="pricing-button">Contact Sales</Link>
            </div>
          </div>

          <div className="pricing-card flexible featured">
            <div className="pricing-card-header">
              <div className="pricing-card-title">Flexible</div>
              <div className="pricing-card-price">€100<span style={{fontSize: "1rem"}}> one-time</span></div>
              <div className="pricing-card-description">Pay once, use forever</div>
            </div>
            <div className="pricing-card-body">
              <ul className="pricing-card-features">
                <li>💰 No recurring payments</li>
                <li>🔑 Lifetime access</li>
                <li>📊 Basic features</li>
                <li>💬 Community support</li>
                <li>📱 Mobile app access</li>
                <li>🏠 Self-hosted option</li>
              </ul>
            </div>
            <div className="pricing-card-footer">
              <Link to="#" className="pricing-button">Buy Once</Link>
            </div>
          </div>
        </div>

        <div className="plan-comparison-section">
          <h2>Plan Comparison</h2>
          <div className="comparison-table-container">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Community</th>
                  <th>Starter</th>
                  <th>Professional</th>
                  <th>Flexible</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Monthly Cost</strong></td>
                  <td>€0</td>
                  <td>€22</td>
                  <td>€55</td>
                  <td>€0*</td>
                </tr>
                <tr>
                  <td><strong>Yearly Option</strong></td>
                  <td>-</td>
                  <td>€220 (17% off)</td>
                  <td>€599 (9% off)</td>
                  <td>€100 one-time</td>
                </tr>
                <tr>
                  <td><strong>Max Hives</strong></td>
                  <td>5</td>
                  <td>20</td>
                  <td>10,000</td>
                  <td>Unlimited*</td>
                </tr>
                <tr>
                  <td><strong>Users</strong></td>
                  <td>1</td>
                  <td>1</td>
                  <td>50</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td><strong>Support</strong></td>
                  <td>Community</td>
                  <td>Email</td>
                  <td>Priority</td>
                  <td>Community</td>
                </tr>
              </tbody>
            </table>
            <p style={{fontSize: "0.85rem", color: "var(--ifm-color-emphasis-600)", marginTop: "1rem"}}>
              * Flexible plan includes basic features with lifetime access after one-time purchase
            </p>
          </div>
        </div>

        <h2>Hardware Devices</h2>
        
        <p>If you buy a device, you are not vendor-locked and we do not force you to pay for web-app subscription, but it's much less hassle for you and this would support us in the long term as a company. If you choose to setup fully local integration and manage data storage yourself, you can use our docs.</p>

        <div className="device-pricing-table-container">
          <table className="device-pricing-table">
            <thead>
              <tr>
                <th></th>
                <th><Link to="/about/products/sensors/sensors">Sensors</Link></th>
                <th><Link to="/about/products/beehive_camera/beehive_camera">Beehive Camera</Link></th>
                <th className="ideation-stage"><Link to="/about/products/robotic_beehive/robotic_beehive">Robotic Beehive</Link></th>
                <th className="ideation-stage"><Link to="/about/products/robotic_apiary/robotic_apiary">Robotic Apiary</Link></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Web-app subscription</strong></td>
                <td>€5 / month</td>
                <td>€20 / month</td>
                <td className="ideation-stage">€50 / month</td>
                <td className="ideation-stage">€200 / month</td>
              </tr>
              <tr>
                <td><strong>Purchase retail price</strong><br/>(estimated)</td>
                <td>€200</td>
                <td>ca. €600</td>
                <td className="ideation-stage">ca. €3,000</td>
                <td className="ideation-stage">ca. €6,000<br/>(ca. 10 beehives)</td>
              </tr>
              <tr>
                <td><strong>Rent</strong><br/>(annual billing)</td>
                <td>€20 / month</td>
                <td>€50 / month</td>
                <td className="ideation-stage">€250 / month</td>
                <td className="ideation-stage">€500 / month</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pricing-cta-section">
          <h2>Ready to get started?</h2>
          <p>Join thousands of beekeepers who trust Gratheon to manage their apiaries effectively.</p>
          <div className="cta-buttons">
            <Link to="/account/register" className="cta-button primary">Start Free Trial</Link>
            <Link to="/contact" className="cta-button secondary">Contact Sales</Link>
          </div>
          <p className="cta-note">
            All plans include a 14-day free trial. No credit card required for Community plan.
          </p>
        </div>
      </div>
    </Layout>
  );
}
