import {googleSheets} from "@/app/data/tables";
import style from './../style.module.scss'
import {registration} from "@/app/data/registration";

const Registration = () => {
	return (
		<div className={style.mainWrap}>
			<div className={style.tablesWrapper}>
				{registration.map((sheet) => (
					<a
						href={sheet.url}
						target="_blank"
						rel="noopener noreferrer"
						key={sheet.id}
						className={style.wrapItem}
					>
						<h3 className={`${style.itemInfo} ${style.wrapHead}`}>{sheet.title}{sheet.icon}</h3>
						<p>{sheet.description}</p>
					</a>
				))}
			</div>
		</div>
	)
}

export default Registration