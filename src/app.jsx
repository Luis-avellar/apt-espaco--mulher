import { FaXmark } from 'react-icons/fa6'
import { useState } from 'react'

const App = () => {
	const [product, setProduct] = useState([])

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
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
							</select>
						</label>
						<input type='text' name='category' placeholder='Mande aqui' />
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
						<select name='opcoes'>
							<option value='ordenar'>Ordenar pelo mais recentes</option>
							<option value='guardados'>Mostrar só itens guardados</option>
							<option value='ordem'>Ordem alfabética</option>
						</select>
						<button onClick={handleRemoveAllItens}>Limpar lista</button>
					</form>
				</div>
			</section>

			<footer>
				<div className='container-form'>
					<p>Você tem 0 itens na lista</p>
				</div>
			</footer>
		</>
	)
}

export { App }
