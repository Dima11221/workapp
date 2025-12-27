import style from './style.module.scss'

const TheFooter = () => {
	return (
		<footer className={`${style.headFoot}`}>
			<div className={style.footerWrapper}>
				&copy;{new Date().getFullYear()}
			</div>
		</footer>
	)
}

export {TheFooter}