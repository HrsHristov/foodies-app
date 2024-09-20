import Image from "next/image";
import classes from "./page.module.css";

const MealDetailsPage = () => {
    return (
        <>
            <header className={classes.header}></header>
            <div className={classes.image}>
                <Image fill />
            </div>
            <div className={classes.headerText}>
                <h1>TITLE</h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${"EMAIL"}`}>NAME</a>
                </p>
                <p className={classes.summary}>Summary</p>
            </div>
            <main>
                <p className={classes.instructions}></p>
            </main>
        </>
    );
};

export default MealDetailsPage;
