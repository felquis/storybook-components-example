import { useEffect } from "react";

import Menu from "../library/Menu";
import SectionTitle from "../library/SectionTitle";
import CourseCard from "../library/CourseCard";
import Tabs from '../library/Tabs';
import Illustration from '../img/illustration.svg';

import style from "../styles/dash.module.css";

export default () => {
	useEffect(() => {
		console.count("useEffect");
	}, []);

	return (
		<div className={style.layout}>
			<Menu />

			<div className={style.mainContent}>
				<div className={style.card}>
					<div>
						<h1 className={style.title}>Hello Joa!</h1>
						<p className={style.cardText}>It's good to see you again</p>
					</div>

					<div>
						<Illustration />
					</div>
				</div>

				<SectionTitle>Courses</SectionTitle>

				<Tabs items={[
					{
						text: 'All Courses',
					},
					{
						text: 'The Newest'
					},
					{
						text: 'Top Rated'
					},
					{
						text: 'Most Popular'
					}
				]} />

				<CourseCard />
			</div>

			<div className={style.secondaryContent}>Side Stats</div>
		</div>
	);
};
