import 'autotrack/lib/plugins/event-tracker';
import 'autotrack/lib/plugins/outbound-link-tracker';
import 'autotrack/lib/plugins/url-change-tracker';
import 'autotrack/lib/plugins/page-visibility-tracker';
import 'autotrack/lib/plugins/max-scroll-tracker';

gtag('config', 'UA-122310013-1');

gtag('require', 'eventTracker');
gtag('require', 'outboundLinkTracker');
gtag('require', 'urlChangeTracker');
gtag('require', 'pageVisibilityTracker');
gtag('require', 'maxScrollTracker');

gtag('event', 'page_view');
gtag('event', 'screen_view');
