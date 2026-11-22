// GTM forwards these events to the GA4 web stream configured in the container.
export function trackEvent(event, parameters = {}) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...parameters });
}
