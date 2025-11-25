import { FaXmark } from 'react-icons/fa6'

const ListOfItems = ({ product, option, onHandleToggle, onHandleRemove }) => {
	// Manipulação do estado product baseando se no valor da variavel option
	const storedItems =
		option === 'guardados'
			? product.filter(item => item.stored)
			: option === 'alfabetica'
			? product.toSorted((item1, item2) =>
					item1.category > item2.category
						? 1
						: item2.category > item1.category
						? -1
						: 0
			  )
			: product

	return (
		<div className='container-grid'>
			<div className='grid-item'>
				{storedItems.map(product => {
					return (
						<div className='item' key={product.id}>
							<input
								type='checkbox'
								name='first'
								onChange={() => onHandleToggle(product.id)}
							/>
							<span
								className={product.stored ? 'line-through' : ''}
							>{`${product.quantity} ${product.category}`}</span>
							<FaXmark onClick={() => onHandleRemove(product.id)} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export { ListOfItems }
