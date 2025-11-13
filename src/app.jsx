import { FaXmark } from 'react-icons/fa6'
import { useState } from 'react'

const App = () => {
	const [product, setProduct] = useState([])
	const [isChecked, setIsChecked] = useState(false)
	// Manipula a classe do Span, baseando se no ckeckbox marcado
	const handleCheckboxToggle = e => {
		setIsChecked(e.target.checked)
	}

	const handleSubmit = e => {
		e.preventDefault()

		const { quantity, category } = e.target.elements

		const newProduct = {
			id: crypto.randomUUID(),
			[quantity.name]: quantity.value,
			[category.name]: category.value,
		}

		setProduct(prev => [...prev, newProduct])
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
										onChange={handleCheckboxToggle}
									/>
									<span
										className={isChecked ? 'line-through' : ''}
									>{`${product.quantity} ${product.category}`}</span>
									<FaXmark style={{ color: 'red' }} />
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
						<button>Limpar lista</button>
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
