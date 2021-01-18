// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const trackPageview = (url, trackingId) => {
  if (!window.gtag) return
  window.gtag("config", trackingId, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const trackEvent = (action, event_category, event_label, value) => {
  if (!window.gtag) return
  window.gtag("event", action, {
    event_category, event_label, value
  })
}

export default { trackPageview, trackEvent }

