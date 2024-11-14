//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caseyrhodes46@gmail.com";
global.location = "Eiyenkorin, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/caseyweb/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VasENmN0lwgyYN7fC81S";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VasENmN0lwgyYN7fC81S";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "";
global.devs = "254705223128";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254705223128";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kwe3i5.jpg,https://i.imgur.com/XiP8U1i.mp4";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rhodespair-1303049c463e.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk1TZGJxRmdrWEdWaHl4RU05cmZYUDRxa0ZlMGhYYWR2R3ErYW5lZjhXND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiODV6T3hUU1k2V3RiTzhtcEplelhYak0rek8rQWlTYTRxbnMvQjI4ekt6WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4REFqZ0FRRVB1cVI3cFF1QVkzTzI4aG9RVk5HVzAwMGVDeGkwdmZjTG1VPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMWDRCenBxYUlVMHpvMnI2clVXQnl0MEZ6dWErWVlRT1pnYWhjOUMxY0h3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBPOXNyZWw5ZkY4UUt4K1cyN0paSVExdDhBZ0Q1V1BhY05rWHFYNEtuMFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBBMnc1VmIwOW9WTy94MDl6TjZIQnhVTEVlMlBXZ1RGaWZFYitEdDVzWHc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU9yd2xkSlhsZWgwSndzVkRtTGFVRmpwUy9RanpRU2N5MjRLTmI0WkhGWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRE42bS8zMmdFRW93VWNVekE1L0hjMFpTdjRQNHpjRHVYODFvMWI2QjVpTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndEWXg2Qnd4SStCQlVPWVZlUVk2czR6azNodkxyeDQxZGJQUTk5Y2hzK21kK0J0NVhRVTZjUEt0Z3BsUVlFQlF3eU1Rc28ydWM3SGRTck0vVUlmWEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiJXdDU5c1RJV2ZGRFRXRUxIYnV5ZjR0QXdzdExUZjFCSjZFQ2FGNmlNUlpjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0clB2NTE0NVFNdV9yMTMtRlkyRmRRIiwicGhvbmVJZCI6ImE5OWVjMTk3LTUzOTgtNGYzMS1iYzU1LWMzNTQ1MmNkZjliNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkc2tGSFhqSHVTVi9OQkhZdFZaTUxJdDlBQ0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXJ2ZHNzNXlPM3VUbW5ZZjhIYzJxSSt0MkJZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJRODhCQkxMIiwibWUiOnsiaWQiOiIyNTQ3MDUyMjMxMjg6NzRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiLk1heHJpbmVpeGlhIEFzamVtcHppZyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFQ2b3ZnQ0VNQ2QyTGtHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSHRKRmRZRWxGa3FYbmlCTGJXd0xwWFExa0RkWkx4Vzg5b1crNkFoWURsND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZWg5U1hUdlVxbk9mN1VtWFZldm4rdUpQUFRYMXdOREhvNllnRFhoYUdJU1dNRUtJMFZqYzlSc2NmdmgwUDlaa25Ma2RzUEJGNWZVOTdJTjBXNURXRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Ii9vUHlyR2dmTGlzWHhsRk9oNG83c0cwRTJMVE5TZGdpcFJJWmwwenZHS3ljVEZjRmxsZEc1TFdCTEJzRktabTNRSmpabkdicVc1QnA0c2dSbU9sWERnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzA1MjIzMTI4Ojc0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlI3U1JYV0JKUlpLbDU0Z1MyMXNDNlYwTlpBM1dTOFZ2UGFGdnVnSVdBNWUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE1OTU5ODN9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`Q-TECH HUB BOT™`",
  author: process.env.PACK_AUTHER || "𒀱ꪳ𓊈𒆜𓂀ᴸᴼᴿᴰℂ𝔸𝕊𝔼𝕐ℝℍ𝕆𝔻𝔼𝕊𓂀𒆜𓊉 𒀱",
  packname: process.env.PACK_NAME || "MAXRINEIXIA 𝐓𝐄𝐂𝐇",
  botname: process.env.BOT_NAME || "`𝗤𝗨𝗘𝗘𝗡_𝗖𝗛𝗔𝗥𝗜𝗧𝗬`",
  ownername: process.env.OWNER_NAME || "maxrineixia asjempzig 😜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
