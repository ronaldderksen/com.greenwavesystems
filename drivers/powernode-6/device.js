'use strict';

const { ZwaveDevice } = require('homey-zwavedriver');

class GreenwaveDevice extends ZwaveDevice {
  async onNodeInit({ node }) {
    // enable debugging
    this.enableDebug();

    // print the node's info to the console
    this.printNode();

    this.registerCapability('measure_power', 'METER', {
      getOpts: {
        getOnStart: true,
        pollInterval: 'poll_interval_measure',
        pollMultiplication: 1000,
      },
    });
    this.registerCapability('meter_power', 'METER', {
      getOpts: {
        getOnStart: true, 
        pollInterval: 'poll_interval_meter',
        pollMultiplication: 1000,
      },
    });
    this.registerCapability('onoff', 'SWITCH_BINARY', {
      getOpts: {
        getOnStart: true, 
        pollInterval: 'poll_interval_onoff',
        pollMultiplication: 1000,
      },
    });

    // register a report listener
    this.registerReportListener(
      'SWITCH_BINARY',
      'SWITCH_BINARY_REPORT',
      'METER',
      (rawReport, parsedReport) => {
        console.log('registerReportListener', rawReport, parsedReport);
      },
    );
  }
}

module.exports = GreenwaveDevice;
