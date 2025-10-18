<script lang="ts">
  import { onMount } from 'svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { Code, Database, Bot, Globe, Smartphone, Cloud } from 'lucide-svelte';

  onMount(() => {
    AOS.init({ duration: 1000 });
  });

  const habilidades = [
    {
      icon: Code,
      title: 'Desenvolvimento Front-end',
      description: 'Crio interfaces modernas e responsivas com React, Svelte, HTML, CSS e JavaScript, focando na melhor experiência do usuário.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Desenvolvimento Back-end',
      description: 'Desenvolvo APIs robustas e escaláveis utilizando Node.js, Python e Java, com arquiteturas limpas e banco de dados otimizados.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Bot,
      title: 'Automação RPA',
      description: 'Implemento soluções de automação de processos com Playwright e outras ferramentas RPA, otimizando fluxos e aumentando eficiência.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      description: 'Crio aplicações web completas com foco em performance, SEO e acessibilidade, utilizando as melhores práticas do mercado.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Desenvolvo interfaces que se adaptam perfeitamente a qualquer dispositivo, garantindo usabilidade em todos os tamanhos de tela.',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Implemento e gerencio infraestruturas cloud, CI/CD pipelines e práticas DevOps para garantir deploy contínuo e seguro.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];
</script>

<section id="habilidades" class="py-20 bg-dark-800">
  <div class="container mx-auto px-4">
    <div class="text-center mb-16">
      <h1 class="text-4xl lg:text-5xl font-bold text-white mb-4">Minhas Habilidades</h1>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto">
        Transformo ideias em soluções digitais inteligentes. Combinando criatividade com 
        tecnologia para entregar resultados excepcionais.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each habilidades as skill, index}
        <div 
          class="group bg-dark-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-dark-600"
          data-aos="zoom-in"
          data-aos-delay={index * 100}
        >
          <div class="mb-4">
            <div class={`w-14 h-14 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
              <svelte:component this={skill.icon} size={28} class="text-white" />
            </div>
          </div>
          <h3 class="text-xl font-bold text-white mb-3">{skill.title}</h3>
          <p class="text-gray-300 leading-relaxed">{skill.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>