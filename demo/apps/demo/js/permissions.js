// ## Permissions Extension
// @fileOverview Extend the aura-core permissions
define(["aura_perms"],function(e){"use strict";return e.extend({todos:{bootstrap:!0,"new-event":!0,"set-language":!0,"*":!0},calendar:{bootstrap:!0,"*":!0},controls:{bootstrap:!0,"*":!0},router:{bootstrap:!0,router:!0,calendar:!0,todos:!0,"*":!0}}),e});