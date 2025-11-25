import { useItems } from './hooks/use-items'
import { Logo } from './components/logo'
import { FormAddItem } from './components/form-add-item'
import { ListOfItems } from './components/list-of-items'
import { Filters } from './components/filters'
import { Stats } from './components/stats'

const App = () => {
	const {
		option,
		product,
		handleCheckboxToggle,
		handleRemoveAllItens,
		handleRemoveItem,
		handleSubmit,
		handleSelectChanges,
	} = useItems()

	return (
		<>
			<nav>
				<Logo />
				<FormAddItem onHandleSubmit={handleSubmit} />
			</nav>

			<section>
				<ListOfItems
					product={product}
					option={option}
					onHandleToggle={handleCheckboxToggle}
					onHandleRemove={handleRemoveItem}
				/>
				<Filters
					option={option}
					onHandleSelect={handleSelectChanges}
					onHandleRemoveAll={handleRemoveAllItens}
				/>
			</section>

			<Stats product={product} />
		</>
	)
}

export { App }
