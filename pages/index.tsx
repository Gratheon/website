import React, { useState, useEffect } from 'react'; // Correctly placed imports
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';


//const bgVideo = document.querySelector("#bgVideo");
const randomIndex = 1 + Math.floor(Math.random() * 15);
const randomUrl =
  "https://gratheon.s3-accelerate.amazonaws.com/video/" +
  `${randomIndex}`.padStart(2, "0") +
  ".mp4";

//bgVideo.src = randomUrl;


function openSupport(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  // Add your support logic here
  console.log('Support clicked');
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  // State for download URLs
  const [macArmUrl, setMacArmUrl] = useState<string | null>(null);
  const [macIntelUrl, setMacIntelUrl] = useState<string | null>(null); // Re-add Intel state if needed later
  const [windowsUrl, setWindowsUrl] = useState<string | null>(null);
  const [linuxUrl, setLinuxUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true); // Keep loading state
  // Removed error state

  // Define localStorage keys
  const LS_KEYS = {
    macArm: 'latestMacArmUrl',
    macIntel: 'latestMacIntelUrl',
    windows: 'latestWindowsUrl',
    linux: 'latestLinuxUrl',
  };

  useEffect(() => {
    // Try loading from localStorage first
    try {
      const cachedMacArm = localStorage.getItem(LS_KEYS.macArm);
      const cachedMacIntel = localStorage.getItem(LS_KEYS.macIntel);
      const cachedWindows = localStorage.getItem(LS_KEYS.windows);
      const cachedLinux = localStorage.getItem(LS_KEYS.linux);

      if (cachedMacArm) setMacArmUrl(cachedMacArm);
      if (cachedMacIntel) setMacIntelUrl(cachedMacIntel);
      if (cachedWindows) setWindowsUrl(cachedWindows);
      if (cachedLinux) setLinuxUrl(cachedLinux);

      // If we have cached links, we can potentially set loading to false sooner
      // or keep it true until fetch completes/fails to ensure freshness check.
      // Let's keep it true until fetch attempt finishes.
    } catch (e) {
      console.warn("Could not read from localStorage", e);
      // Ignore localStorage errors, proceed to fetch
    }


    // Fetch latest release data from GitHub API
    fetch('https://api.github.com/repos/Gratheon/web-app/releases?per_page=1')
      .then(response => {
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (data && data.length > 0 && data[0].assets) {
          const latestRelease = data[0];
          let updated = false; // Declare updated flag *before* the loop
          latestRelease.assets.forEach(asset => {
            const name = asset.name.toLowerCase();
            const url = asset.browser_download_url;
            // Removed declaration from here

            if (name.endsWith('.dmg')) {
              if (name.includes('aarch64')) {
                setMacArmUrl(url);
                localStorage.setItem(LS_KEYS.macArm, url); // Save to localStorage
                updated = true;
              }
            } else if (name.endsWith('.msi')) {
              setWindowsUrl(url);
              localStorage.setItem(LS_KEYS.windows, url); // Save to localStorage
              updated = true;
            } else if (name.endsWith('.appimage')) {
              setLinuxUrl(url);
              localStorage.setItem(LS_KEYS.linux, url); // Save to localStorage
              updated = true;
            }
          }); // End of forEach asset loop

          // Check if assets were found *inside* the .then block
          if (!updated && latestRelease.assets.length > 0) {
               console.warn("Found release assets, but none matched expected patterns (.dmg, .msi, .AppImage with arch)");
               // Keep showing cached links if available, otherwise show error later
          } else if (latestRelease.assets.length === 0) {
               console.warn("Latest release has no assets.");
               // Keep showing cached links if available, otherwise show error later
          }

        } else { // End of if (data && data.length > 0 && data[0].assets)
          throw new Error('No releases or assets found');
        }
        setIsLoading(false); // Fetch attempt finished
        // setError(null); // Clear any previous error - error state removed
      })
      .catch(err => {
        console.error("Failed to fetch release info:", err);
        // If fetch fails AND nothing was loaded from localStorage, set fallback URLs
        if (!localStorage.getItem(LS_KEYS.macArm) && !localStorage.getItem(LS_KEYS.macIntel) && !localStorage.getItem(LS_KEYS.windows) && !localStorage.getItem(LS_KEYS.linux)) {
            const fallbackUrl = 'https://github.com/Gratheon/web-app/releases/latest';
            console.log("API fetch failed and no cache found. Setting fallback URLs.");
            setMacArmUrl("https://github.com/Gratheon/web-app/releases/download/build-36babb0f8086ea85b65f37c5510837c2bd73de81/gratheon_0.1.0_aarch64.dmg");
            setWindowsUrl("https://github.com/Gratheon/web-app/releases/download/build-36babb0f8086ea85b65f37c5510837c2bd73de81/gratheon_0.1.0_x64_en-US.msi");
            setLinuxUrl("https://github.com/Gratheon/web-app/releases/download/build-36babb0f8086ea85b65f37c5510837c2bd73de81/gratheon_0.1.0_amd64.AppImage");
            // Note: This will result in multiple identical buttons pointing to the release page.
            // A potential improvement would be to detect this state and show a single button.
        } else {
            console.log("API fetch failed, but using cached links from localStorage.");
        }
        setIsLoading(false); // Fetch attempt finished
      });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <div id={styles.splash}>
        <header id={styles.front}>
          <video id={styles.bgVideo} autoPlay={true} loop muted src={randomUrl}></video>
          <div style={{ zIndex: 2 }}>
            <div style={{ textAlign: 'center' }}>
              <div id={styles.splash_internal}>
                <div style={{ textAlign: 'center' }}>Modular Robotic Beehive</div>

                <p style={{ color: 'white', textAlign: 'center', padding: '7px 0', backgroundColor: 'black', fontSize: '20px', fontWeight: 'normal' }}>
                  Data analytics to save bees, time and strength
                </p>
              </div>
            </div>
            <div className={styles.installButtons}>
              <div>
                <a
                  className={[styles.signup, styles.blue].join(' ')}
                  href="https://app.gratheon.com/account/register"
                  >Try it free</a>
              </div>
              {/* Display logic: Show loading, then buttons (if URLs are available) */}
              {isLoading && <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>Loading downloads...</div>}
              {/* Show buttons if not loading AND at least one URL is set (from API, cache, or fallback) */}
              {!isLoading && (macArmUrl || macIntelUrl || windowsUrl || linuxUrl) && (
                  <div style={{ display: 'flex', marginTop: '20px' }}>
                    {/* Google Play image - no padding */}
                    <a href="https://play.google.com/store/apps/details?id=com.gratheon.app.twa"><img height="50" src="./img/google.png" alt="Google Play" style={{ margin: '10px' }}/></a>
                    {/* Desktop download images - add padding */}
                    {macArmUrl && (
                        <a href={macArmUrl} title={`Download macOS (ARM) - ${macArmUrl.split('/').pop()}`}><img height="50" src="./img/mac.png" alt="Download macOS ARM" style={{ margin: '10px' }}/></a>
                    )}
                    {/* Note: macIntelUrl logic was removed in the current file content, so no button here */}
                    {windowsUrl && (
                        <a href={windowsUrl} title={`Download Windows - ${windowsUrl.split('/').pop()}`}><img height="50" src="./img/windows.png" alt="Download Windows" style={{ margin: '10px' }}/></a>
                    )}
                    {linuxUrl && (
                        <a href={linuxUrl} title={`Download Linux - ${linuxUrl.split('/').pop()}`}><img height="50" src="./img/linux.png" alt="Download Linux" style={{ margin: '10px' }}/></a>
                    )}
                  </div>
                )}
            </div>
          </div>
        </header>
      </div>

      <video
        id={styles.showcase}
        autoPlay
        loop
        muted
        src="https://gratheon.s3-accelerate.amazonaws.com/www/detection2.mov"
      ></video>

      <div>
        <h2 style={{ textAlign: 'center' }}>How does app work?</h2>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3>Model beehives</h3>
            <p>
              It's difficult to observe and record all colony information using
              pen and paper while in the field. Model hives to remember where to
              take action and why
            </p>
            <video
              autoPlay
              loop
              muted
              src="https://gratheon.s3-accelerate.amazonaws.com/www/frame-management3.mov"
            ></video>
          </div>

          <div className={styles.feature}>
            <h3>Upload frame photos</h3>
            <p>
              Take frame photo and upload it to the app. We will detect and count
              bees to measure precise colony size and predict potential swarming
            </p>

            <img src="./img/count.webp" />
          </div>

          <div className={styles.feature}>
            <h3>Store inspections</h3>
            <p>
              Take snapshot of the beehive state to track colony development over
              time. Compare same frame to see changes in the colony.
            </p>

            <img src="./img/inspections.webp" />
          </div>

          <div className={styles.feature}>
            <h3>Find a queen</h3>
            <p>
              Finding a queen in a bustling metropolis to determine if the colony
              has a future can be challenging. We can surprise you and find two
            </p>

            <img src="./img/queens.webp" />
          </div>

          <div className={styles.feature}>
            <h3>Estimate resources</h3>
            <p>
              We also detect different cells to estimate ratio of resources.
              Balancing nectar and pollen between colonies can prevent starvation
            </p>
            <img
              alt="beehive frame with detected cell types"
              src="img/comb.webp"
            />
          </div>

          <div className={styles.feature}>
            <h3>Measure mite infestation</h3>
            <p>
              Detect and count varroa mites infesting your bees without the need
              of killing bees with alcohol washing test
            </p>

            <img src="./img/varroa.webp" />
          </div>

          <div className={styles.feature}>
            <h3>Learn from AI</h3>
            <p>
              Given all of the hive context, get a one-button advice from a large
              language model on the next steps
            </p>

            <img
              alt="beehive frame with detected cell types"
              src="img/llm.webp"
            />
          </div>

          <div className={styles.feature}>
            <h3>Take notes</h3>
            <p>
              Use ipad pencil or mouse to draw on top of the frame to highlight
              important regions
            </p>

            <video
              autoPlay
              loop
              muted
              src="https://gratheon.s3-accelerate.amazonaws.com/www/ipad3.mov"
            ></video>
          </div>

          <div className={styles.feature}>
            <h3>Spy on bees</h3>
            <p>
              Stream your beehive entrance from unused phone, raspberry-pi or our
              device. Play back past videos under correct beehive to see what
              happened. Useful to detect hornet attacks, robbing, queen mating
              flights.
            </p>

            <video autoPlay loop muted src="./img/video-stream.mov"></video>
          </div>
        </div>
      </div>

      <div id={styles.devices}>
        <h2 style={{ textAlign: 'center' }}>Hardware products</h2>
        <div>
          <div className={styles.device}>
            <div className={styles.deviceText}>
              <h3>Beehive sensors</h3>
              <p>
                Measure temperature, humidity, CO2 level, barometric pressure,
                sound and weight to correlate colony development with
                environmental factors. Most affordable, data- and
                energy-efficient.
              </p>
              <a href="https://github.com/Gratheon/beehive-sensors/">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"
                    fill="#1B1F23"
                  />
                </svg> Code</a>
            </div>
            <div className={styles.deviceImgs}>
              <img src="./img/sensors.webp" alt="Beehive sensors" />
              <img
                src="./img/temp.webp"
                alt="temperature graph"
                style={{ maxWidth: '300px' }}
              />
            </div>
          </div>

          <div className={styles.device}>
            <div className={styles.deviceText}>
              <h3>Entrance Observer</h3>
              <p>
                Get video feed of entrance in real-time. Count bees coming in and
                out to estimate foraging bee daily loss. Detect varroa mites
                riding on bees. Track pollen flow. Detect robbing, worker
                orientation flights. Detect queen mating flights.
              </p>
              <a href="https://github.com/Gratheon/entrance-observer/">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"
                    fill="#1B1F23"
                  />
                </svg> Code</a>
            </div>

            <div className={styles.deviceImgs}>
              <img src="./img/observer.webp" alt="Entrance Observer" />
              <video autoPlay loop muted src="./img/counting.mov"></video>
            </div>
          </div>

          <div className={styles.device}>
            <div className={styles.deviceText}>
              <h3>Robotic beehive</h3>
              <p>
                Our ultimate goal. Automate inspections with a mechanical frame
                extraction. Save energy from lifting heavy beehive sections.
                Reduce bees dying from inspections. Improve efficiency with remote
                internal observation to save time on field trips. Be always
                up-to-date with alert notifications. Keep neighbours sting-free in
                urban areas.
              </p>
              <a href="https://github.com/Gratheon/robotic-beehive/">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 1024 1024"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                    transform="scale(64)"
                    fill="#1B1F23"
                  />
                </svg> Code</a>
            </div>
            <div className={styles.deviceImgs}>
              <video
                autoPlay
                loop
                muted
                src="https://gratheon.s3-accelerate.amazonaws.com/video/linear-actuator.mp4"
              ></video>
            </div>
          </div>
        </div>
      </div>

      <div id={styles.content}>
        <article>
          <h2>Shape the future of beekeeping</h2>
          <div id={styles.author} style={{ display: 'flex' }}>
            <div style={{ paddingRight: '10px' }}>
              <a href="https://twitter.com/tot_ra" style={{ border: 'none' }}>
                <img
                  alt="author photo"
                  style={{ borderRadius: '25px' }}
                  width="50"
                  height="50"
                  src="./img/artjom.jpg"
                />
              </a>
            </div>

            <div>
              By <a href="https://www.linkedin.com/in/kurapov/">Artjom Kurapov</a>,<br />Beekeeper, Founding engineer
            </div>
          </div>

          <p>
            I am a software engineer and 5 years ago I became a beekeeper to
            improve pollination of my garden and get higher yields. To me, bees
            are also a cute and interesting pet.
          </p>
          <p>
            Bees are key species for our food security. Farmers are cooperating
            with beekeepers to increase yields through precise pollination.
          </p>
          <p>
            Traditional beekeeping requires observability of a bee colony, because
            bees can experience starvation , loss of a queen, late swarming or get
            <i>Varroa destructor</i> mite infestation which weakens the colony and
            causes overwintering collapse.
          </p>

          <p>
            Observability is typically solved with a hard physical labor and
            frequent and time-limited inspections. Dressed in a protective suit,
            in the summer heat, you need to lift 20 kg beehive sections, that were
            designed 150 years ago and notice small details while you are getting
            stung by defending bees, causing inspection stress and killing bees.
          </p>

          <p>
            As your apiary grows, this work becomes unscalable. Industrial
            beekeepers have multiple apiaries at distant locations that are hard
            to reach. Existing solutions do not adequately solve these issues
          </p>

          <p>
            💡 Our goal is to help beekeepers with observability and automation.
            Our vision is a fully autonomous multi-hive Robotic Apiary that can
            remotely inspect colonies. We will reach this step by step, starting
            with a software.
          </p>

          <p>
            By providing actionable metrics and automation, beekeepers become more
            efficient, spend less time in the field and analyse more, doing
            precise intervention only when needed.
          </p>

          <div id={styles.future}>
            <div>
              <p>
                Gratheon app is built on the shoulders of open-source software and
                is fully
                <a href="https://github.com/gratheon">open source</a> too.
              </p>

              <p>
                Join us to improve life of 100 million bee colonies worldwide and
                meet pollination demand for more. We're looking for
                <strong>investors</strong> to scale our development,
                <a
                  href="https://www.notion.so/gratheon/Open-roles-positions-e50bd8e561c74102ab8e2b96276809c7?pvs=4"
                  >engineers</a>
                to join
                <a
                  href="https://www.notion.so/gratheon/Team-5ff38d33b8a2448ca02ffc26aed09278?pvs=4"
                  >our team</a>,
                <a
                  href="https://www.notion.so/gratheon/Advisors-6b51c9883cd94fe8a70a4ae548d1970a?pvs=4"
                  >beekeepers</a>
                to run field testing and advisors to guide us.
              </p>

              <p>Got some ideas?</p>

              <a className={[styles.action, styles.action_green].join(' ')} href="https://discord.gg/PcbP4uedWj">Tell us in Discord</a> <a
                style={{ maxWidth: '109px' }}
                className={[styles.action, styles.blue].join(' ')}
                href="https://app.gratheon.com/account/register"
                >Sign up</a
              >
            </div>
          </div>
        </article>
      </div>

      <iframe
        title="Author's introduction"
        style={{ width: '100%', height: '500px', margin: '0 auto', display: 'block' }}
        src="https://www.youtube.com/embed/gM3AJEAhmXc?rel=0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <div style={{ display: 'flex' }}>
        <div style={{ backgroundColor: '#ffd900', height: '6px', flexGrow: 1 }}></div>
        <div style={{ backgroundColor: '#2f8b0b', height: '6px', flexGrow: 1 }}></div>
        <div style={{ backgroundColor: '#0248ff', height: '6px', flexGrow: 1 }}></div>
      </div>
    </>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Beehive AI monitoring | ${siteConfig.title}`}
      description="Monitoring software as a service for backyard beekeepers">
      <HomepageHeader />
    </Layout>
  );
}
