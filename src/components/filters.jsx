const Filters = ({ option, onHandleSelect, onHandleRemoveAll }) => (
	<div className='container-btn'>
		<form className='clear'>
			<select value={option} onChange={onHandleSelect}>
				<option value='recentes'>Ordenar pelo mais recentes</option>
				<option value='guardados'>Mostrar só itens guardados</option>
				<option value='alfabetica'>Ordem alfabética</option>
			</select>
			<button onClick={onHandleRemoveAll}>Limpar lista</button>
		</form>
	</div>
)

export { Filters }
