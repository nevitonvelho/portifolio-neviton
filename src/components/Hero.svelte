<script lang="ts">
  import { onMount } from 'svelte';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  import { Github, Linkedin, Mail, MessageCircle, Code, Cpu, Bot, Sparkles } from 'lucide-svelte';

  onMount(() => {
    AOS.init({ duration: 1000 });
  });

  const stats = [
    { number: '3+', label: 'Anos de Experiência' },
    { number: '50+', label: 'Projetos Concluídos' },
    { number: '100%', label: 'Satisfação do Cliente' }
  ];
</script>

<section id="sobre" class="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 py-20">
  <div class="container mx-auto px-4">
    <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
      <!-- Text Content -->
      <div class="flex-1 text-center lg:text-left" data-aos="fade-right">
        <div class="mb-6 flex justify-center lg:justify-start">
          <a 
            class="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-lg text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            href="https://github.com/nevitonvelho" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={20} class="mr-2" />
            Follow @nevitonvelho
          </a>
        </div>

        <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Desenvolvedor 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400"> Full Stack</span>
          <br>
          & 
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400"> Especialista RPA</span>
        </h1>
        
        <p class="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
          Transformo ideias em soluções digitais inteligentes. Especializado em automação de processos 
          e desenvolvimento full stack com foco em performance e escalabilidade.
        </p>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-6 mb-8">
          {#each stats as stat}
            <div class="text-center lg:text-left">
              <div class="text-2xl lg:text-3xl font-bold text-primary-400">{stat.number}</div>
              <div class="text-sm text-gray-400">{stat.label}</div>
            </div>
          {/each}
        </div>

        <div class="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
          <a 
            href="#projetos" 
            class="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
          >
            <Code size={20} class="mr-2" />
            Ver Projetos
          </a>
          <a 
            href="#contato" 
            class="border-2 border-primary-400 hover:bg-primary-400 hover:text-dark-900 text-primary-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center"
          >
            <MessageCircle size={20} class="mr-2" />
            Entrar em Contato
          </a>
        </div>
      </div>

      <!-- Tech Illustration -->
      <div class="flex-1 flex justify-center" data-aos="fade-left">
        <div class="relative">
          <div class="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center p-8 border border-primary-400/30 backdrop-blur-sm">
            <div class="text-center">
              <div class="flex justify-center mb-6">
                <div class="relative">
                  <div class="w-20 h-20 bg-gradient-to-br from-primary-400 to-purple-400 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Cpu size={40} class="text-white" />
                  </div>
                  <div class="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <Bot size={16} class="text-dark-900" />
                  </div>
                </div>
              </div>
              <h3 class="text-2xl font-bold text-white mb-2">Tecnologia & Inovação</h3>
              <p class="text-gray-300">Full Stack • RPA • Automação</p>
            </div>
          </div>
          
          <!-- Floating elements -->
          <div class="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
            <Code size={24} class="text-dark-900" />
          </div>
          <div class="absolute -bottom-4 -right-4 w-16 h-16 bg-green-400 rounded-2xl flex items-center justify-center shadow-lg">
            <Sparkles size={24} class="text-dark-900" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>