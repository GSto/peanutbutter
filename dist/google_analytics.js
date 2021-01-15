"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackPageview = trackPageview;
exports.trackEvent = trackEvent;
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
function trackPageview(url) {
  var trackingId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : process.env.GA_TRACKING_ID;

  if (!window.gtag) return;
  window.gtag("config", trackingId, {
    page_path: url
  });
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
function trackEvent(action, event_category, event_label, value) {
  if (!window.gtag) return;
  window.gtag("event", action, {
    event_category: event_category, event_label: event_label, value: value
  });
}