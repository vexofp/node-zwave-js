// @ts-check
require("reflect-metadata");

const { Driver } = require("../build/lib/driver/Driver");
const { AddNodeToNetworkRequest, AddNodeType } = require("../build/lib/controller/AddNodeToNetworkRequest");
const { HardResetRequest } = require("../build/lib/controller/HardResetRequest");
const { RequestNodeInfoResponse, RequestNodeInfoRequest } = require("../build/lib/node/RequestNodeInfoMessages");
const { wait } = require("alcalzone-shared/async");

const d = new Driver("COM5")
	.once("driver ready", async () => {

		// await d.sendMessage(new HardResetRequest());
		// await wait(20000);
		// const resp = await d.sendMessage(new RequestNodeInfoRequest(2));
		// await d.controller.beginInclusion();
		// // console.log(JSON.stringify(resp, null, 4));

		// await wait(30000);
		// await d.controller.stopInclusion();
		// const resp = await d.sendMessage(new AddNodeToNetworkRequest(AddNodeType.Any, true, true));
		// console.log(JSON.stringify(resp, null, 4));

		await wait(60000);
		d.destroy();
		process.exit(0);
		// const resp = await d.sendMessage(new SetSerialApiTimeoutsRequest());
	})
	;
d.start(); 