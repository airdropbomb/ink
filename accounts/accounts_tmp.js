import fs from "fs";

const loadData = (file) => {
  try {
    const datas = fs.readFileSync(file, "utf8").replace(/\r/g, "").split("\n").filter(Boolean);

    if (datas.length <= 0) {
      console.warn(`No data found in ${file}`);
      return [];
    }

    return datas;
  } catch (error) {
    console.error(`File ${file} not found`);
    return [];
  }
};

export const privateKey = loadData("privateKeys.txt");
