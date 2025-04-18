import ZbdPayments from "@zbddev/payments-sdk";

const ZBD_API_KEY = 'b7YW3s2JzZKGcXjIf5Dqof8wjKT2RuWr8'; // dummy key
const client = new ZbdPayments({ apikey: ZBD_API_KEY });

(async function () {
  try {
    // @ts-ignore
    const data = await client.lightningCharges.create({
      amount: "100000", // 100 satoshis (100,000 msats)
      description: "NodeJS + ZBD Payments SDK!",
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();