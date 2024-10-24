import preactLogo from '../../assets/preact.svg';
import Habilidades from '../../components/Habilidades';
import Hero from '../../components/Hero';
import Projetos from '../../components/Project';
import './style.css';

export function Home() {
	return (
		<>
			<div className="contentePages">
				<Hero/>
				<Habilidades/>
				<Projetos/>

				<footer>
					<figure class="map_container" style="width: 100%; height: 400px;">
						<iframe 
						width="100%" 
						height="400" 
						frameborder="0" 
						style="border:0" 
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14527.191295732217!2d-53.821025090221946!3d-25.66983212066364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f356d091bbc9e9%3A0x96f2a8c598e55b26!2sCapanema%2C%20PR%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1698060382452!5m2!1spt-BR!2sus" 
						allowfullscreen="" 
						loading="lazy" 
						referrerpolicy="no-referrer-when-downgrade">
						</iframe>
					</figure>
				</footer>


			</div>
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
