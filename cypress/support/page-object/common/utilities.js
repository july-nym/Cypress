/**
 * Captures screenshot.
 *
 * @param {string} name The file name.
 * @param {boolean} options.captureFullPage To capture either full page or the current viewport only. The default value is true, which is full page snapshot.
 * @param {boolean} options.enableStickyTrvHeader To keep Travlr sticky header floating on the top of the screen during scrolling. Setting this to true while capturing the full page will cause the Travlr sticky header appear multiple times on the snapshot image. Default value is false.
 * @param {number} options.width The width of the captured screen in pixel. Default value is 1366 pixels.
 */
const createSnapshot = (name, options = {}) => {
  const params = {
    captureFullPage: options.captureFullPage == undefined ? true : options.captureFullPage,
    enableStickyTrvHeader: options.enableStickyTrvHeader == undefined ? false : options.enableStickyTrvHeader,
    width: options.width == undefined ? 1366 : options.width,
  };
  const trvHeaderSelectorUlp = 'header.trv-header';
  const trvHeaderSelectorMlp = 'header.balibible.header__common--sticky';

  // To force lazy-loader loads all components
  if (params.captureFullPage) {
    cy.scrollTo('top', { ensureScrollable: false });
    cy.scrollTo('bottom', { duration: 3000, ensureScrollable: false });
  }

  // Disable sticky element before taking the screenshot and revert it back afterward
  // https://docs.cypress.io/api/commands/screenshot#Full-page-captures-and-fixed-sticky-elements
  if (!options.enableStickyTrvHeader) {
    cy.get('body').then(($body) => {
      if ($body.find(trvHeaderSelectorUlp).length > 0) {
        cy.get(trvHeaderSelectorUlp).invoke('attr', 'style', 'position: absolute !important');
      }
      if ($body.find(trvHeaderSelectorMlp).length > 0) {
        cy.get(trvHeaderSelectorMlp).invoke('attr', 'style', 'position: absolute !important; top: -66px');
      }
    });
  }

  // Actual screenshot action
  cy.screenshot(name, {
    capture: params.captureFullPage ? 'fullPage' : 'viewport',
  });

  if (!options.enableStickyTrvHeader) {
    cy.get('body').then(($body) => {
      if ($body.find(trvHeaderSelectorUlp).length > 0) {
        cy.get(trvHeaderSelectorUlp).invoke('attr', 'style', null);
      }
      if ($body.find(trvHeaderSelectorMlp).length > 0) {
        cy.get(trvHeaderSelectorMlp).invoke('attr', 'style', null);
      }
    });
  }
};

const cookiesButton = () => {
  cy.get('body').then(($body) => {
    if ($body.find('.t-v-align-middle > .t-btn-inverted').length > 0) {
      cy.get('.t-v-align-middle > .t-btn-inverted').click();
    } else {
      cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll').click();
    }
  });
};

const tryCloseMultiPurposeBanner = () => {
  cy.get('body').then(($body) => {
    const dissmissableBanner = 'header .banner-dissmissable > .t-btn > .t-icon';
    if ($body.find(dissmissableBanner).length > 0) {
      cy.get(dissmissableBanner).click();
    }
  });
};

const serverStatus = () => {
  cy.server().should((server) => {
    expect(server).to.be.an('object');
    expect(server.delay).to.eq(0);
    expect(server.method).to.eq('GET');
    expect(server.status).to.eq(200);
  });
};

const uncaughtException = () => {
  Cypress.on('uncaught:exception', () => {
    return false;
  });
};

export default {
  createSnapshot: createSnapshot,
  cookiesButton: cookiesButton,
  tryCloseMultiPurposeBanner: tryCloseMultiPurposeBanner,
  serverStatus: serverStatus,
  uncaughtException: uncaughtException,
};
