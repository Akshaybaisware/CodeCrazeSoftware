import React from 'react';
import './ReadMore.css';
import { Container } from 'react-bootstrap';
import { MDBFooter } from 'mdb-react-ui-kit';

function Angular() {
  return (
    <div className="container-fluid ReadMoreMobileDescription-container bg-light m-0 p-0">
      <section className="ReadMoreMobileDescription-us-section">
        <h1 id="animatedText">Blogs.</h1>
      </section>
      <Container className='shadow-lg ReadMoreMobile__section p-5 bg-white rounded'>
        <header className="ReadMoreMobile-header my-3">
          <p className='fs-2 fw-bold'>e-COMMERCE Design Trends.</p>
        </header>

        <section className="ReadMoreMobile-servicesSection">
          <div>
            <div className="ReadMoreMobile-servicesColumn my-4 text-black fw-bold">
              <h2>Learn the Tools for Testing Accessibility</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                It is necessary to manually verify accessibility in the current state of the web. Start by becoming familiar with the built-in screen reader on your computer.
                Additionally, we can spot-check for certain problems like missing alt text, labels, and colour contrast using automated tools like Lighthouse, axe, and linting.
              </p>

              <h2>Define Unique Page Titles</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                Having distinctive, succinct page titles makes it easier for users of a11y services to identify the content and goal of a web page. You may remedy this by giving each of your pages a unique title using Angular's Title service.
              </p>

              <h2>Ensure Adequate Color Contrast</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                If those with poor vision like colour blindness can't read your material, then even if your design may appear cool, it isn't. To make sure you agree to the colour contrast ratio requirements of the Web Content Accessibility Guidelines (WCAG 2.0), use the Material theming guides and inspection tools.
              </p>

              <h2>Use Semantic HTML</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                Several common interaction patterns that are significant to accessibility are captured by native HTML elements.
                Instead of reimplementing well-supported behaviours when creating Angular components, you should reuse these native features directly whenever possible. Instead of making everything a {'<div>'}, use a {'<button>'} and an {'<a>'}.
              </p>

              <h2>Create Selectable Controls with Angular Material</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                Simplify controls as much as you can to generate navigable components by simplifying menus.
              </p>

              <h2>Provide Control Labels with ARIA</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                Accessible Rich Internet Applications (WAI-ARIA or ARIA) is a specification developed by the Web Accessibility Initiative to address issues that are incompatible with native HTML.
                ARIA properties like aria-label and others must be specified in order to change how an element is interpreted by the accessibility tree.
              </p>

              <h2>Add the Power of Angular/cdk/a11y</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                Add the a11y module from the Angular CDK to help with trickier Angular-specific problems. Developers can use a number of techniques to increase accessibility by importing the module package, including:
              </p>
              <ul className="fs-5 fw-normal text-light-emphasis  Ecommerce_list">
                <li>ListKeyManager: controls the selected item in a list of options depending on keyboard input.</li>
                <li>FocusTrap: For elements like modal dialogues, where attention needs to be limited, use the tab key focus within the element.</li>
                <li>Interactive Checker: Check an element's interaction with InteractivityChecker, which records the disabled, visible, tabbable, and focusable states for accessibility needs.</li>
                <li>LiveAnnouncer Tool: Screen-reader users can use the LiveAnnouncer tool to broadcast messages using an aria-live region.</li>
                <li>FocusMonitor: used to keep an eye out for changes in an element's focus state.</li>
                <li>Styling utilities: Sass mixins that create styles for easily accessible element hiding, focusing on users with high contrast needs, and more.</li>
              </ul>

              <h2>Control Focus with FocusTrap</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                Tab-key focus is captured inside an element by FocusTrap's cdkTrapFocus directive in Angular. This is meant to be used to make components like modal dialogues, where emphasis needs to be limited, more accessible.
              </p>

              <h2>Announce Changes with LiveAnnouncer</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                When something on the website changes, screen readers must be notified of the change. Imagine trying to submit a form or finish a transaction without being aware that an error has appeared and prevented it. That is annoying!
                To make sure screen readers are informed of notifications and real-time page changes, an aria-live region is utilised with LiveAnnouncer to announce messages for users of screen readers.
              </p>

              <h2>Enable High Contrast Mode</h2>
              <p className="fs-5 fw-normal text-light-emphasis">
                In order to respect the user's preferences and significantly boost contrast, use the cdk-high-contrast mixin that is available in angular/cdk/a11y to add an outline to your buttons when using High Contrast mode.
              </p>
            </div>
          </div>
        </section>
        
        <MDBFooter className='text-center text-lg-left ReadMorecustom-footer'>
          <div className='text-center p-3 my-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <h2>Conclusions</h2>
            <p className='fs-5 fw-normal text-light-emphasis'>
              And finally, these are the ten steps to start making apps that are more accessible. Put your Angular expertise to the test by going to the codelab!
            </p>
          </div>
        </MDBFooter>
      </Container>
    </div>
  );
}

export default Angular;
