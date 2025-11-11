const App = () => (
	<>
		<nav>
			<div className='container'>
				<img src='/img/logo-espaco-mulher.png' alt='logo do apt' />
				<h1>Espaço Mulher</h1>
			</div>

			<div className='container-form'>
				<form action='#'>
					<label htmlFor='#'>
						O que você precisa guardar?
						<select>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
						</select>
					</label>
					<input type='text' placeholder='Mande aqui' />
					<button>Adicionar</button>
				</form>
			</div>
		</nav>
		<section></section>
	</>
)

export { App }
