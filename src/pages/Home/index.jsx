import preactLogo from '../../assets/preact.svg';
import Habilidades from '../../components/Habilidades';
import Hero from '../../components/Hero';
import Projetos from '../../components/Project';
import './style.css';

export function Home() {
	return (
		<>
			<Hero/>
			<Habilidades/>
			<Projetos/>
		</>
	);
}

function Resource(props) {
	return (
		<a href={props.href} target="_blank" class="resource">
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
}
