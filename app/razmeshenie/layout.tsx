import Link from "next/link";
import style from "./style.module.scss"

const RazmeshenieLayout = ({
	children,
}: {
	children: React.ReactNode
}) => {
	return (
		<div className={style.main}>
			<div className={style.wrapper}>
				<h2>База знаний - Специалисты по размещению</h2>
				<p>
					Рабочее пространство отдела. База знаний, таблицы, ресурсы и документация для эффективной работы.
				</p>
			</div>
			<ul className={`listReset ${style.linksList}`}>
				<li className={style.link}><Link href='/razmeshenie/tables'><h3 className={style.textStyle}>Таблицы</h3></Link></li>
				<li className={style.link}><Link href='/razmeshenie/resources'><h3 className={style.textStyle}>Полезные ресурсы</h3></Link></li>
			</ul>
			{children}
		</div>

	)
}

export default RazmeshenieLayout;