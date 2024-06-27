import { h } from 'preact';
import { route } from 'preact-router';
import { Col, Container, Row } from 'react-bootstrap';
import './style.css';

// Array de objetos contendo os dados dos projetos
const projectTitles = [
    {
      "slug": "grilazer",
      "title": "Serviço de Manutenção para Sites WordPress",
      "description": "Realizamos um serviço abrangente de manutenção para otimizar e aprimorar a funcionalidade do site WordPress. Isso incluiu atualizações de plugins, correções de bugs, otimização de desempenho e implementação de medidas de segurança para garantir uma experiência de usuário fluida e segura.",
      "image": "https://media.licdn.com/dms/image/D4D22AQF2PK1-8cOyFw/feedshare-shrink_2048_1536/0/1691710830135?e=2147483647&v=beta&t=iOyfl7YvezZtxdpACuKGBK52uAwgatUXgYIynYaEiXo"
    },
    {
      "slug": "criptocom",
      "title": "Site Feito em Nextjs",
      "description": "Neste projeto, foi desenvolvido um site utilizando a tecnologia Next.js, onde procuramos criar um sistema para análise do preço de algumas criptomoedas.",
      "image": "https://bmcnews.com.br/wp-content/uploads/2024/02/imagem-materia-3.webp"
    },
    {
      "slug": "aize",
      "title": "Thema Wordpress Blog",
      "description": "Realização do desenvolvimento de um site de blog completo para a empresa Aize, visando fortalecer sua presença digital e proporcionar uma plataforma integrada e estratégica que complementa e potencializa seu e-commerce existente.",
      "image": "https://global.cdn.magazord.com.br/aize/img/2024/02/produto/245/estante-lua-madeira-branca-01.jpg?ims=600x600"
    },
    {
        "slug": "newdetox",
        "title": "Landing Page de Vendas",
        "description": "Desenvolvimento de uma página de vendas projetada para campanhas de Facebook Ads e Google Ads, otimizada para conversão e maximização do retorno sobre o investimento (ROI).",
        "image": "https://s2-g1.glbimg.com/qs7xBRTvoxKVjXUydqTj5V3fH7I=/1080x608/top/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/r/A/A3OGtiRjKQy9yhr1mHSQ/vs-youtube-newdetox-036-.jpg"
      }
];

const ProjetosSlug = ({ slug }) => {
    // Encontre o projeto que corresponda ao slug
    const project = projectTitles.find(proj => proj.slug === slug);

    // Se não encontrar o projeto, define valores padrão
    if (!project) {
        return (
            <div>
                <h1>Project Not Found</h1>
            </div>
        );
    }

    return (
        <Container>
              <Row>
                <Col>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </Col>
                <Col>
                    <div class={'imgProjeto'}>
                        <img src={project.image} alt={project.title} />
                    </div>
                </Col>
              </Row>
           
   
        </Container>
    );
};

export default ProjetosSlug;
