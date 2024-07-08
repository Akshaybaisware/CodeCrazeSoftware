import React from 'react';
import './ReadMore.css';
import { Container,  } from 'react-bootstrap';
import { MDBFooter } from 'mdb-react-ui-kit';



function ReadMoreMobile() {
 

  return (
    <div className="container-fluid ReadMoreMobileDescription-container m-0 p-0">
      <section className="ReadMoreMobileDescription-us-section">
        <h1 id="animatedText">Blogs.</h1>
      </section>
      <Container className='shadow-lg ReadMoreMobile__section p-5 bg-white rounded'>
        <header className="ReadMoreMobile-header my-3">
          <p className='fs-2 fw-bold'>e-COMMERCE Design Trends.</p>
        </header>

        <section className="ReadMoreMobile-servicesSection">
          <div >
            <div className="ReadMoreMobile-servicesColumn my-4 text-black fw-bold">
              <h4 className='text-black'>Learn the tools for testing accessibility</h4>
              <p className="fs-5 fw-normal text-black-50">
              It is necessary to manually verify accessibility in the current state of the web. Start by becoming familiar with the built-in screen reader on your computer.
Additionally, we can spot-check for certain problems like missing alt text, labels, and colour contrast using automated tools like Lighthouse, axe, and linting.


              
              </p>
            </div>
            <div>
                <div className='my-4'>
              <h4 className="text-black">Define unique page titles</h4>
              <p className="fs-5 text-black-50">If those with poor vision like colour blindness can't read your material, then even if your design may appear cool, it isn't. To make sure you agree to the colour contrast ratio requirements of the Web Content Accessibility Guidelines (WCAG 2.0), use the Material theming guides and inspection tools.      
</p>
</div>
<div className='my-4'>
<h4 className="text-black">Ensure adequate color contrast</h4>
              <p className="fs-5 text-black-50">If those with poor vision like colour blindness can't read your material, then even if your design may appear cool, it isn't. To make sure you agree to the colour contrast ratio requirements of the Web Content Accessibility Guidelines (WCAG 2.0), use the Material theming guides and inspection tools.

</p>
</div>
<div className='my-4'>
<h4 className="text-black">Ensure adequate color contrast</h4>
              <p className="fs-5 text-black-50">If those with poor vision like colour blindness can't read your material, then even if your design may appear cool, it isn't. To make sure you agree to the colour contrast ratio requirements of the Web Content Accessibility Guidelines (WCAG 2.0), use the Material theming guides and inspection tools.

</p>
</div>
<div className='my-4'>
<h4 className="text-black">Use Semantic HTML</h4>
              <p className="fs-5 text-black-50">If those with poor vision like colour blindness can't read your material, then even if your design may appear cool, it isn't. To make sure you agree to the colour contrast ratio requirements of the Web Content Accessibility Guidelines (WCAG 2.0), use the Material theming guides and inspection tools.

</p>
</div>
<div className='my-4'>

<h4 className="text-black">Create selectable controls with Angular Material</h4>
              <p className="fs-5 text-black-50">If those with poor vision like colour blindness can't read your material, then even if your design may appear cool, it isn't. To make sure you agree to the colour contrast ratio requirements of the Web Content Accessibility Guidelines (WCAG 2.0), use the Material theming guides and inspection tools.

</p>
</div>
<div className='my-4'>
<h4 className="text-black">Provide control labels with ARIA</h4>
              <p className="fs-5 text-black-50">If those with poor vision like colour blindness can't read your material, then even if your design may appear cool, it isn't. To make sure you agree to the colour contrast ratio requirements of the Web Content Accessibility Guidelines (WCAG 2.0), use the Material theming guides and inspection tools.

</p>
</div>
<div className='my-4'>

<h4 className="text-black">Add the power of angular/cdk/a11y</h4>
              <p className="fs-5 text-black-50">Add the a11y module from the Angular CDK to help with trickier Angular-specific problems. Developers can use a number of techniques to increase accessibility by importing the module package, including:</p>
              <li className="my-4" style={{ fontSize: '1.2em' }}>
    <span><b>ListKeyManager:</b></span> controls the selected item in a list of options depending on keyboard input.
</li>
<li className="my-4" style={{ fontSize: '1.2em' }}>
    <span><b>FocusTrap:</b></span> For elements like modal dialogues, where attention needs to be limited, use the tab key focus within the element.
</li>
<li className="my-4" style={{ fontSize: '1.2em' }}>
    <span><b>Interactive Checker:</b></span> Check an element's interaction with InteractivityChecker, which records the disabled, visible, tabbable, and focusable states for accessibility needs.
</li>
<li className="my-4" style={{ fontSize: '1.2em' }}>
    <span><b>LiveAnnouncer Tool:</b></span> Screen-reader users can use the LiveAnnouncer tool to broadcast messages using an aria-live region.
</li>
<li className="my-4" style={{ fontSize: '1.2em' }}>
    <span><b>FocusMonitor:</b></span> used to keep an eye out for changes in an element's focus state.
</li>
<li className="my-4" style={{ fontSize: '1.2em' }}>
    <span><b>Styling utilities:</b></span> Sass mixins that create styles for easily accessible element hiding, focusing on users with high contrast needs, and more.
</li>

              </div>

<h4 className="text-black">Control focus with FocusTrap</h4>
              <p className="fs-5 text-black-50">Tab-key focus is captured inside an element by FocusTrap' s cdkTrapFocus directive in Angular. This is meant to be used to make components like modal dialogues, where emphasis needs to be limited, more accessible.</p>
<h4 className="text-black">Announce changes LiveAnnouncer</h4>
              <p className="fs-5 text-black-50">When something on the website changes, screen readers must be notified of the change. Imagine trying to submit a form or finish a transaction without being aware that an error has appeared and prevented it. That is annoying!
To make sure screen readers are informed of notifications and real-time page changes, an aria-live region is utilised with LiveAnnouncer to announce messages for users of screen readers.

</p>
<h4 className="text-black">Enable HighContrast mode</h4>
              <p className="fs-5 text-black-50">In order to respect the user's preferences and significantly boost contrast, use the cdk-high-contrast mixin that is available in angular/cdk/a11y to add an outline to your buttons when using High Contrast mode.
              

</p>
 <MDBFooter bgColor='light' className='text-center text-lg-left ReadMorecustom-footer'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <h2>Conclusions</h2>
      <p className='fs-4'>And FinallyThis are the Ten steps to start making apps that are more accessible. Put your Angular expertise to the test by going to the codelab!

</p>
      
      </div>
    </MDBFooter>
            </div>
          </div>
        </section>
       
      </Container>
    </div>
  )
}

export default ReadMoreMobile;
