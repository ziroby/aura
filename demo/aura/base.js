// Pass through the required jQuery methods to the mediator.
//
// TODO: Remove dependency on underscore. Will have to create an equivalent for
// _.bindAll and _.template
define(require.aura.shim.dom.deps[0]==="zepto"?["dom","underscore","deferred"]:["dom","underscore"],function(e,t,n){"use strict";n&&n.installInto(e);var r={};return r.util={each:e.each,extend:e.extend},r.dom={find:function(t,n){return n=n||document,e(n).find(t)},data:function(t,n){return e(t).data(n)}},r.events={listen:function(t,n,r,i){return e(t).on(n,r,i)},bindAll:function(){return t.bindAll.apply(this,arguments)}},r.template={parse:t.template},r.data={deferred:e.Deferred,when:e.when},r});