import style from './../style.module.scss';
import {tests} from "@/app/data/tests";

const Tests = () => {

	return (
		<div className={style.mainWrap}>
			<div className={style.tablesWrapper}>
				{tests.map(test => (
					<a
						key={test.id}
						href={test.url}
						target="_blank"
						rel="noopener noreferrer"
						className={style.wrapItem}
					>
						<h3 className={`${style.itemInfo} ${style.wrapHead}`}>{test.title}</h3>
						<p>{test.description}</p>
					</a>
				))}
			</div>
		</div>
	)
}

export default Tests;