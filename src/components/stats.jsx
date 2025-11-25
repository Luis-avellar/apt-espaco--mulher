const Stats = ({ product }) => {
	const storedItems = product.reduce((acc, item) => {
		return item.stored ? acc + 1 : acc
	}, 0)
	const percetageStored =
		product.length === 0 ? 0 : ((storedItems / product.length) * 100).toFixed(0)

	const singularOrPlural = product.length === 1 ? 'item' : 'items'

	return (
		<footer>
			<div className='container-form'>
				<p>
					{`Você tem ${product.length} ${singularOrPlural} na lista `}
					{product.length > 0 && (
						<span>
							e já guardou {storedItems} ({percetageStored}%)
						</span>
					)}
				</p>
			</div>
		</footer>
	)
}

export { Stats }
