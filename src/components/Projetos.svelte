<script lang="ts">
  import { onMount } from 'svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { ExternalLink, Github } from 'lucide-svelte';

  onMount(() => {
    AOS.init({ duration: 1000 });
  });

  const projetos = [
    {
      title: 'Site de gerenciamento de hotel desenvolvido em Next.js com Prisma, como projeto acadêmico.',
      description: 'Serviço completo de manutenção e desenvolvimento em WordPress com foco em performance e segurança.',
      image: '/Screenshot_2.png',
      link: '/projetos/grilazer',
      tech: ['Nextjs', 'Reactjs', 'JavaScript'],
      github: 'https://github.com/nevitonvelho/hotel-management'
    },
    {
      title: 'GranaMais ReactNative',
      description: 'App de gestão financeira desenvolvido com React Native e Expo.',
      image: '/Screenshot_1.png',
      link: '/projetos/criptocom',
      tech: ['Javascript', 'TypeScript', 'ReactNative'],
      github: 'https://github.com/nevitonvelho/granamais'
    },
    {
      title: 'Automação RPA Java',
      description: 'Sistema de automação para extração e análise de dados de vendas do MercadoLivre usando Playwright.',
      image: '/Screenshot_3.png',
      link: '/projetos/aize',
      tech: ['Playwright', 'Java', 'RPA'],
      github: 'https://github.com/nevitonvelho/bot-mercadolivre'
    },
    {
      title: 'NewDetox',
      description: 'Aplicação web para wellness e saúde mental com interface moderna e recursos interativos.',
      image: '/Screenshot_4.png',
      link: '/projetos/newdetox',
      tech: ['React', 'Node.js', 'MongoDB'],
      github: 'https://newdetox23.netlify.app/'
    }
  ];
</script>

<section id="projetos" class="py-20 bg-dark-900">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h2 class="text-4xl lg:text-5xl font-bold text-white mb-4">Meus Projetos</h2>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Desenvolvendo soluções inovadoras que fazem a diferença. 
        Cada projeto é uma oportunidade de criar algo extraordinário.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each projetos as projeto, index}
        <div 
          class="bg-dark-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-dark-600 overflow-hidden"
          data-aos="fade-up"
          data-aos-delay={index * 200}
        >
          <div class="h-48 bg-gradient-to-r from-primary-500/20 to-purple-500/20 relative overflow-hidden">
            <div class="absolute inset-0 bg-dark-900/50 flex items-center justify-center">
              <div class="text-center p-4">
                <div class="text-2xl font-bold text-white mb-2">{projeto.title}</div>
                <div class="flex flex-wrap gap-2 justify-center">
                  {#each projeto.tech as tech}
                    <span class="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30">
                      {tech}
                    </span>
                  {/each}
                </div>
              </div>
            </div>
          </div>
          
          <div class="p-6">
            <p class="text-gray-300 mb-6 leading-relaxed">{projeto.description}</p>
            
            <div class="flex gap-3">
              <a 
                href={projeto.link}
                class="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
              >
                <ExternalLink size={18} class="mr-2" />
                Ver Projeto
              </a>
              <a 
                href={projeto.github}
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-dark-700 hover:bg-dark-600 border border-dark-600 text-gray-300 hover:text-white rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Código no GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>