import { FaXmark } from 'react-icons/fa6'
import { useState } from 'react'

const arrIDs = Array.from({ length: 12 }, () => crypto.randomUUID())

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

const App = () => {
	const [product, setProduct] = useState([])
	const [option, setOption] = useState('recentes')

	// Manipula o estado atra´ves do InputCheckBox
	const handleCheckboxToggle = id =>
		setProduct(prev =>
			prev.map(item =>
				item.id === id ? { ...item, stored: !item.stored } : item
			)
		)

	// Atualiza o estado product com a informações obtidas no form Adicionar
	const handleSubmit = e => {
		e.preventDefault()

		const { quantity, category } = e.target.elements

		const newProduct = {
			id: crypto.randomUUID(),
			[quantity.name]: quantity.value,
			[category.name]: category.value,
			stored: false,
			timestamp: new Date().getTime(),
		}

		setProduct(prev => [...prev, newProduct])
		e.target.reset()
	}
	// Remove e atualiza a lista de product baseado no id do item clicado
	const handleRemoveItem = id => {
		setProduct(product.filter(item => item.id !== id))
	}
	// Substitui o valor do estado por um arr vazio, limpando a lista.
	const handleRemoveAllItens = e => {
		e.preventDefault()
		setProduct([])
	}
	// Atualiza a variavel de estado responsável pelo select
	const handleSelectChanges = e => {
		const selectedOpt = e.target.value

		setOption(selectedOpt)
	}

	return (
		<>
			<nav>
				<div className='container'>
					<img src='/img/logo-espaco-mulher.png' alt='logo do apt' />
					<h1>Espaço Mulher</h1>
				</div>

				<div className='container-form'>
					<form onSubmit={handleSubmit}>
						<label htmlFor='#'>
							O que você precisa guardar?
							<select name='quantity'>
								{arrIDs.map((id, index) => (
									<option key={id} value={index + 1}>
										{index + 1}
									</option>
								))}
							</select>
						</label>
						<input
							type='text'
							name='category'
							placeholder='Mande aqui'
							required
						/>
						<button>Adicionar</button>
					</form>
				</div>
			</nav>

			<section>
				<div className='container-grid'>
					<div className='grid-item'>
						{product.map(product => {
							return (
								<div className='item' key={product.id}>
									<input
										type='checkbox'
										name='first'
										onChange={() => handleCheckboxToggle(product.id)}
									/>
									<span
										className={product.stored ? 'line-through' : ''}
									>{`${product.quantity} ${product.category}`}</span>
									<FaXmark onClick={() => handleRemoveItem(product.id)} />
								</div>
							)
						})}
					</div>
				</div>
				<div className='container-btn'>
					<form className='clear'>
						<select value={option} onChange={handleSelectChanges}>
							<option value='recentes'>Ordenar pelo mais recentes</option>
							<option value='guardados'>Mostrar só itens guardados</option>
							<option value='alfabetica'>Ordem alfabética</option>
						</select>
						<button onClick={handleRemoveAllItens}>Limpar lista</button>
					</form>
				</div>
			</section>

			<Stats product={product} />
		</>
	)
}

export { App }
