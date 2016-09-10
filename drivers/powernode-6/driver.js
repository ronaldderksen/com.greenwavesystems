"use strict";

const path = require('path');
const ZwaveDriver = require('homey-zwavedriver');

// http://www.pepper1.net/zwavedb/device/280

module.exports = new ZwaveDriver(path.basename(__dirname), {
<<<<<<< HEAD
	//debug: true,
	capabilities: {
		'onoff': {
			'command_class': 'COMMAND_CLASS_SWITCH_BINARY',
			'command_get': 'SWITCH_BINARY_GET',
			'command_get_cb': false,
			'command_set': 'SWITCH_BINARY_SET',
			'command_set_parser': function (value) {
=======
	debug: false,
	capabilities: {
		'onoff': {
			'command_class'				: 'COMMAND_CLASS_SWITCH_BINARY',
			'command_get'					: 'SWITCH_BINARY_GET',
			'command_get_cb'			: false,
			'command_set'					: 'SWITCH_BINARY_SET',
			'command_set_parser'	: function(value) {
>>>>>>> 837ba3eb2af6b6e4e0b08312ac0a01d484442e24
				return {
					'Switch Value': value
				}
			},
<<<<<<< HEAD
			'command_report': 'SWITCH_BINARY_REPORT',
			'command_report_parser': function (report) {
=======
			'command_report'				: 'SWITCH_BINARY_REPORT',
			'command_report_parser'	: function(report) {
>>>>>>> 837ba3eb2af6b6e4e0b08312ac0a01d484442e24
				return report['Value'] === 'on/enable';
			},
			'pollInterval': "poll_interval"
		},
		'measure_power': {
			'command_class': 'COMMAND_CLASS_METER',
			'command_get': 'METER_GET',
			'command_get_cb': false,
			'command_get_parser': function () {
				return {
					'Properties1': {
						'Scale': 2
					}
				}
			},
			'command_report': 'METER_REPORT',
			'command_report_parser': function (report) {
				if (report && report.hasOwnProperty('Properties2')
					&& report.Properties2.hasOwnProperty('Scale')
					&& report.Properties2['Scale'] === 2) {

					return report['Meter Value (Parsed)'];
				} else return null;
			},
			'pollInterval': "poll_interval"
		},

		'meter_power': {
<<<<<<< HEAD
			'command_class': 'COMMAND_CLASS_METER',
			'command_get': 'METER_GET',
			'command_get_cb': false,
			'command_get_parser': function () {
=======
			'command_class'				: 'COMMAND_CLASS_METER',
			'command_get'					: 'METER_GET',
			'command_get_cb'			: false,
			'command_get_parser'	: function() {
>>>>>>> 837ba3eb2af6b6e4e0b08312ac0a01d484442e24
				return {
					'Properties1': {
						'Scale': 0
					}
				}
			},
<<<<<<< HEAD
			'command_report': 'METER_REPORT',
			'command_report_parser': function (report) {
				if (report && report.hasOwnProperty('Properties2')
					&& report.Properties2.hasOwnProperty('Scale')
					&& report.Properties2['Scale'] === 0) {

					return report['Meter Value (Parsed)'];
				} else return null;
=======
			'command_report'				: 'METER_REPORT',
			'command_report_parser'	: function(report) {
				return report['Meter Value (Parsed)'];
>>>>>>> 837ba3eb2af6b6e4e0b08312ac0a01d484442e24
			},
			'pollInterval': "poll_interval"
		}
	},
<<<<<<< HEAD
	settings: {}
})
=======
	settings: {
		"keep_alive_time": {
			"index": 1,
			"size": 1,
			"parser": function(input) {
				return new Buffer([parseInt(input)]);
			}
		}
	}
});
>>>>>>> 837ba3eb2af6b6e4e0b08312ac0a01d484442e24
