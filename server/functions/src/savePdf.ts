// import * as functions from "firebase-functions";
// import * as admin from "firebase-admin";

// import {launch} from "puppeteer";

// const addr = "https://next.jojko.tech/cv-pdf";
// const filename = "cv-jakub-janisz.pdf";
// const cvStoragePath = `/cv/${filename}`;

// const dbRef = functions.database.ref("/cv");

// const handler = dbRef.onWrite;

// export const savePdf = handler(async (snapshot, ctx) => {
//   // puppeteer
//   const browser = await launch({waitForInitialPage: false});
//   try {
//     const page = await browser.newPage();
//     await page.goto(addr, {
//       waitUntil: "networkidle2",
//     });
//     const pdf = await page.pdf({
//       format: "a4",
//       printBackground: true,
//       pageRanges: "1",
//     });

//     const app = admin.initializeApp();

//     const storage = admin.storage(app);

//     const file = storage.bucket("gs://jjk-portfolio.appspot.com").file(cvStoragePath);

//     file.save(pdf).catch((err) => console.error(err));
//     functions.logger.log("Save PDF Triggered!");
//   } catch (e) {
//     functions.logger.error(e);
//   }

//   await browser.close();

//   return snapshot;
// });
