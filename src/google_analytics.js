// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export function trackPageview(url, trackingId) {
  if (!window.gtag) return
  window.gtag("config", trackingId, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export function trackEvent(action, event_category, event_label, value) {
  if (!window.gtag) return
  window.gtag("event", action, {
    event_category, event_label, value
  })
}