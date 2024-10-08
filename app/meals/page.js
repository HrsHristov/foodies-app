import { Suspense } from "react";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

import classes from "./page.module.css";

export const metadata = {
    title: "All Meals",
    description: "Browse the delicious measl shared by our vibrand community",
};

const Meals = async () => {
    const meals = await getMeals();

    return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created{" "}
                    <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recepe and cook it yourself. It's easy
                    and fun
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share Your Favorite Recepe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense
                    fallback={
                        <p className={classes.loading}>Fetching meals...</p>
                    }
                >
                    <Meals />
                </Suspense>
            </main>
        </>
    );
};

export default MealsPage;
