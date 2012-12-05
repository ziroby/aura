// ## Permissions
// A permissions structure can support checking
// against subscriptions prior to allowing them
// to clear. This enforces a flexible security
// layer for your application.
//
// {eventName: {moduleName:[true|false]}, ...}
define(["dom"],function(e){"use strict";var t={},n={};return t.extend=function(t){window.aura&&window.aura.permissions?n=e.extend(!0,{},t,window.aura.permissions):n=t},t.validate=function(e,t){var r=n[t]||{},i=r[e];return i===undefined?!1:i},t});