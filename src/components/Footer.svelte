<script lang="ts">
  import { Github, Linkedin, Mail, MessageCircle, Instagram, MapPin } from 'lucide-svelte';

  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { href: 'https://github.com/nevitonvelho', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/nevitonvelho', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/nevitonvelho/', icon: Instagram, label: 'Instagram' },
    { href: 'mailto:nevitonvelho01@gmail.com', icon: Mail, label: 'Email' },
    { href: 'https://wa.me/46999784485', icon: MessageCircle, label: 'WhatsApp' }
  ];
</script>

<footer class="bg-dark-800 border-t border-dark-600">
  <!-- Mapa -->
  <div class="w-full h-96">
    <iframe 
      width="100%" 
      height="100%" 
      frameborder="0" 
      class="border-0"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14527.191295732217!2d-53.821025090221946!3d-25.66983212066364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f356d091bbc9e9%3A0x96f2a8c598e55b26!2sCapanema%2C%20PR%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1698060382452!5m2!1spt-BR!2sus" 
      allowfullscreen 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"
    />
  </div>
  
  <!-- Info Footer -->
  <div class="py-12 bg-dark-900">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-between items-center gap-8">
        <!-- Info -->
        <div class="text-center md:text-left">
          <div class="flex items-center justify-center md:justify-start text-gray-300 mb-2">
            <MapPin size={18} class="mr-2" />
            <span>Capanema, PR - Brasil</span>
          </div>
          <p class="text-gray-400">Desenvolvendo soluções digitais com excelência</p>
        </div>
        
        <!-- Social Links -->
        <div class="flex space-x-4">
          {#each socialLinks as social}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-700 rounded-lg transition-all duration-300 border border-dark-600"
              aria-label={social.label}
            >
              <svelte:component this={social.icon} size={18} />
            </a>
          {/each}
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="text-center mt-8 pt-8 border-t border-dark-600">
        <p class="text-sm text-gray-500">
          © {currentYear} Neviton Velho. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </div>
</footer>