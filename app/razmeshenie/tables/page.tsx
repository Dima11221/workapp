import {tables} from "@/app/data/tables";
import style from './../style.module.scss'

const Tables = () => {
	return (
		<div className={style.mainWrap}>
			<div className={style.tablesWrapper}>
				{tables.map((table) => (
						<a
							href={table.url}
							target="_blank"
							rel="noopener noreferrer"
							key={table.id}
							className={style.wrapItem}
						>
							<h3 className={`${style.itemInfo} ${style.wrapHead}`}>{table.title}</h3>
							<p>{table.description}</p>
						</a>
				))}
			</div>
		</div>
	)
}

export default Tables