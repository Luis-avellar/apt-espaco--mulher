import { FaXmark } from 'react-icons/fa6'

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

		<section>
			<div className='container-grid'>
				<form className='grid'>
					<label htmlFor='#'>
						<div className='icon'>
							<input type='checkbox' name='first' />4 Halteres
							<FaXmark style={{ color: 'red' }} />
						</div>
					</label>
				</form>
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

export { App }
