'use strict';

var Router = require('../../helpers/router');
var httpApi = require('../../helpers/httpApi');

/**
 * Binds api with modules and creates common url.
 * - End point: `/api/blocks`
 * - Public API:
 * 	- get	/get
 * 	- get	/
 * 	- get	/getBroadhash
 * 	- get	/getEpoch
 * 	- get	/getHeight
 * 	- get	/getNethash
 * 	- get	/getFee
 * 	- get	/getFees
 * 	- get	/getMilestone
 * 	- get	/getReward
 * 	- get	/getSupply
 * 	- get	/getStatus
 * @memberof module:blocks
 * @requires helpers/Router
 * @requires helpers/httpApi
 * @constructor
 * @param {Object} blocksModule - Module blocks instance.
 * @param {scope} app - Network app.
 */
// Constructor
function BlocksHttpApi (blocksModule, app) {

	var router = new Router();

	router.map(blocksModule.shared, {
		'get /get': 'getBlock',
		'get /': 'getBlocks',
		'get /getBroadhash': 'getBroadhash',
		'get /getEpoch': 'getEpoch',
		'get /getHeight': 'getHeight',
		'get /getNethash': 'getNethash',
		'get /getFee': 'getFee',
		'get /getFees': 'getFees',
		'get /getMilestone': 'getMilestone',
		'get /getReward': 'getReward',
		'get /getSupply': 'getSupply',
		'get /getStatus': 'getStatus'
	});

	httpApi.registerEndpoint('/api/blocks', app, router, blocksModule.isLoaded);
}

module.exports = BlocksHttpApi;
