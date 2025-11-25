const arrIDs = Array.from({ length: 12 }, () => crypto.randomUUID())

const FormAddItem = ({ onHandleSubmit }) => (
	<div className='container-form'>
		<form onSubmit={onHandleSubmit}>
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
			<input type='text' name='category' placeholder='Mande aqui' required />
			<button>Adicionar</button>
		</form>
	</div>
)

export { FormAddItem }
