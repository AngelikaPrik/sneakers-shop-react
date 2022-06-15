import React, { Children, cloneElement, useEffect, useState } from 'react';

import styles from "./Carousel.module.scss";

const PAGE_WIDTH = 1000;

export const Carousel = ({children}) => {
	const [pages, setPages] = useState([]);
	const [offset, setOffset] = useState(0);

	const handleLeftArrowClick = () => {
		setOffset( (currentOffset) => {
			const newOffset = currentOffset + PAGE_WIDTH;

			return Math.min(newOffset, 0);
		})
	}

	const handleRightArrowClick = () => {
		setOffset( (currentOffset) => {
			const newOffset = currentOffset - PAGE_WIDTH;

			const maxOffset = -(PAGE_WIDTH * (pages.length - 1))
			return Math.max(newOffset, maxOffset);
		})
	}

	useEffect(() => {
		setPages(
			Children.map(children, child => {
				return cloneElement(child, {
					style: {
						height: "100%",
						minWidth: `${PAGE_WIDTH}px`,
						maxWidth: `${PAGE_WIDTH}px`
					}
				})
			})
		)
	}, [])
	
	return ( 
		<div className={styles.mainContent}>
			<img onClick={handleLeftArrowClick} className={styles.arrowLeft} alt='' src={process.env.PUBLIC_URL+"/img/slider/arrow-left.svg"}/>
			<div className={styles.window}>
				<div className={styles.allPagesContainer}
					style={{
						transform:`translateX(${offset}px)`
					}}
				>
					{pages}
				</div>
			</div>
			<img onClick={handleRightArrowClick} className={styles.arrowRight} alt='' src={process.env.PUBLIC_URL+"/img/slider/arrow-right.svg"}/>

		</div>
	 );
}