const date = Date.now();
const day = 86400 * 1000;
const data = {
  Date: [
    date - 1 * day,
    date - 2 * day,
    date - 3 * day,
    date - 6 * day,
    date - 8 * day,
    date - 10 * day,
    date - 11 * day,
    date - 12 * day,
    date - 15 * day,
    date - 18 * day,
    date - 21 * day,
    date - 23 * day,
    date - 24 * day,
    date - 24 * day,
    date - 27 * day,
    date - 31 * day,
    date - 40 * day,
    date - 45 * day,
    date - 45 * day,
  ],
  "Transaction Id": [
    "e9aa5d7c52744c",
    "dcc896f4432247",
    "58b38f6855fd4c",
    "4a62b5d9d57340",
    "87792cbbf9824c",
    "e1583b2fe54f46",
    "20fe9304904044",
    "3690d4401c4945",
    "0aa1f586323b47",
    "94e973c9ff6d4f",
    "feeea10b2ca44c",
    "57b2ba94fb8e46",
    "0b983c0814f346",
    "6802b596a9944a",
    "7c7bbc98a76841",
    "4d9e10b1a3d242",
    "39a56276b05b44",
    "67b8466fe79245",
    "f59ea5ec0e0c41",
  ],
  Debit: [
    680, 1000, 2000, 0, 500, 800, 0, 0, 2500, 2750, 0, 320, 670, 4850, 0, 1000,
    500, 2000, 0,
  ],
  Credit: [
    0, 0, 0, 1570, 0, 0, 2000, 1000, 0, 0, 1500, 0, 0, 0, 20000, 0, 0, 0, 3500,
  ],
  Balance: [
    10000, 10680, 11680, 13680, 12110, 12610, 13410, 11410, 10410, 12910, 15660,
    14160, 14480, 15150, 20000, 0, 1000, 1500, 3500,
  ],
};

export default data;
