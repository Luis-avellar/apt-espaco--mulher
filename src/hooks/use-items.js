import { useState } from 'react'

const useItems = () => {
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

	return {
		option,
		product,
		handleCheckboxToggle,
		handleRemoveAllItens,
		handleRemoveItem,
		handleSelectChanges,
		handleSubmit,
	}
}

export { useItems }
