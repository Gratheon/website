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
                <li>Up to 5 hives</li>
                <li>20 frames per hive max</li>
                <li>20 images per day max</li>
                <li>1 year image retention</li>
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
                <li>1 user max</li>
                <li>Up to 20 hives</li>
                <li>40 frames per hive</li>
                <li>2 years image retention</li>
              </ul>
            </div>
            <div className="pricing-card-footer">
              <Link to="#" className="pricing-button">Start Free Trial</Link>
            </div>
          </div>
          
          <div className="pricing-card professional">
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
                <li>Up to 50 users</li>
                <li>Up to 10,000 hives</li>
                <li>60 frames per hive max</li>
                <li>7 days video retention</li>
              </ul>
            </div>
            <div className="pricing-card-footer">
              <Link to="#" className="pricing-button">Contact Sales</Link>
            </div>
          </div>

          <div className="pricing-card flexible">
            <div className="pricing-card-header">
              <div className="pricing-card-title">Flexible</div>
              <div className="pricing-card-price">€100<span style={{fontSize: "1rem"}}> one-time</span></div>
              <div className="pricing-card-description">Pay once, use forever</div>
            </div>
            <div className="pricing-card-body">
              <ul className="pricing-card-features">
                <li>No recurring payments</li>
                <li>Basic feature access</li>
                <li>Community support</li>
                <li>Lifetime access</li>
              </ul>
            </div>
            <div className="pricing-card-footer">
              <Link to="#" className="pricing-button">Buy Once</Link>
            </div>
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
      </div>
    </Layout>
  );
}
