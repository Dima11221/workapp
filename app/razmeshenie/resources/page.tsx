import {resources} from "@/app/data/resources";
import style from './../style.module.scss'

const Resources = () => {
	return (
		<div className={style.mainWrap}>
			<div className={style.tablesWrapper}>
				{resources.map((resource) => (
					<div
						key={resource.id}
						className={style.wrapItem}
					>
						<h3 className={style.wrapHead}>{resource.title}</h3>
						<div className={style.flex}>
							{resource.urls.map((url, index) => (
								<a
									key={index}
									href={url.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									<span className={`${style.itemInfo}`}>{url.name}</span>
								</a>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Resources;