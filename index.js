import { zbd } from "@zbd/node";

const ZBD_API_KEY = 'b7YW3s2JzZKGcXjIf5Dqof8wjKT2RuWr8';
const ZBD = new zbd(ZBD_API_KEY);

(async function () {
  try {
    // @ts-ignore
    const data = await ZBD.createCharge({
      amount: "100000", // 100 satoshis (100,000 msats)
      description: "Express + ZBD!",
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();