"use strict";

class BreakPoints {
  
  constructor ( queries = BreakPoints.default_queries() ) {
    this.media_queries = queries;
    // add listener for each size
    for (let key in this.media_queries) {  
      let mq = this.media_queries[key];
      let mql = window.matchMedia(mq);
      if (mql.matches) this.notify(key);
      // listen for changes
      mql.addListener((e) => this.listener(e, key));
    }
  
  }
  
  static default_queries() {
    return {
      'xsmall': 'only screen and (max-width: 600px)',
      'small': 'only screen and (min-width: 601px) and (max-width: 767px)',
      'medium': 'only screen and (min-width: 768px) and (max-width: 900px)',
      'large': 'only screen and (min-width: 901px) and (max-width: 1024px)',
      'xlarge': 'only screen and (min-width: 1025px) and (max-width: 1199px)',
      'xxlarge': 'only screen and (min-width: 1200px)'
    }
  }


  listener(e, key) {
    if (! e.matches) return;
    this.notify(key);
  }

  notify(size) {
    this.custom_event( 'breakpoint-update', { detail: { size: size } } ); 
  }

  custom_event(name, custom_opts) {
    if ( typeof window.CustomEvent !== 'function' ) {
      // shim for custom event IE >= 9
      ce = (n, o) => {
        let opts = { bubbles: false, cancelable: false, detail: undefined };
        opts = Object.assign(opts, o);
        let evt = document.createEvent('CustomEvent');
        evt.initCustomEvent( n, opts.bubbles, opts.cancelable, opts.detail);
        return evt;
      }
      ce.prototype = window.Event.prototype;
      window.CustomEvent = ce;
    }
    let event = new CustomEvent(name, custom_opts);
    document.body.dispatchEvent(event);
  }

  

}

export default BreakPoints;
