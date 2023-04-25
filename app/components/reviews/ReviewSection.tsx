import React, { useEffect, useState } from "react";
import styles from "./ReviewSection.module.scss";

const locationId = "ChIJY0oarEkvbUYRKqGktFHdwnQ";
const accountId = "822815996427087103";
const url = `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/reviews`;
// https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews

const ReviewSection = () => {
    const reviewlist = "reviewlist...";

    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setReviews(reviews);
            });
    }, [reviews]);

    return (
        <section className={`section ${styles.section}`}>
            <ul>{reviews}</ul>
        </section>
    );
};

export default ReviewSection;
