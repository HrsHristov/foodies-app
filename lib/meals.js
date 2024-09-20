import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
    //Added for testing purposes
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // throw new Error("fetching failed");
    return db.prepare("SELECT * FROM meals").all();
};
