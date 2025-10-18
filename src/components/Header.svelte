<script lang="ts">
  import { Menu, X, Github, Linkedin, Mail, MessageCircle, Instagram } from 'lucide-svelte';

  let mobileMenuOpen = false;

  const socialLinks = [
    { href: 'https://github.com/nevitonvelho', icon: Github, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/nevitonvelho', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://www.instagram.com/nevitonvelho/', icon: Instagram, label: 'Instagram' },
    { href: 'mailto:nevitonvelho01@gmail.com', icon: Mail, label: 'Email' },
    { href: 'https://wa.me/46999784485', icon: MessageCircle, label: 'WhatsApp' }
  ];
</script>

<nav class="bg-dark-800/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-dark-600">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="/" class="text-xl font-bold text-white hover:text-primary-400 transition-colors">
        NEVITON VELHO
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="#sobre" class="text-gray-300 hover:text-primary-400 font-medium transition-colors">
          SOBRE
        </a>
        <a href="#habilidades" class="text-gray-300 hover:text-primary-400 font-medium transition-colors">
          HABILIDADES
        </a>
        <a href="#projetos" class="text-gray-300 hover:text-primary-400 font-medium transition-colors">
          PROJETOS
        </a>
      </div>

      <!-- Social Links -->
      <div class="hidden md:flex items-center space-x-3">
        {#each socialLinks as social}
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            class="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-700 rounded-lg transition-all duration-300"
            aria-label={social.label}
          >
            <svelte:component this={social.icon} size={18} />
          </a>
        {/each}
      </div>

      <!-- Mobile menu button -->
      <button 
        class="md:hidden p-2 text-gray-400"
        on:click={() => mobileMenuOpen = !mobileMenuOpen}
        aria-label="Menu mobile"
      >
        {#if mobileMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden py-4 border-t border-dark-600">
        <div class="flex flex-col space-y-4 mb-4">
          <a href="#sobre" class="text-gray-300 hover:text-primary-400 font-medium transition-colors py-2">
            SOBRE
          </a>
          <a href="#habilidades" class="text-gray-300 hover:text-primary-400 font-medium transition-colors py-2">
            HABILIDADES
          </a>
          <a href="#projetos" class="text-gray-300 hover:text-primary-400 font-medium transition-colors py-2">
            PROJETOS
          </a>
        </div>
        
        <div class="flex space-x-3 pt-4 border-t border-dark-600">
          {#each socialLinks as social}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:bg-dark-700 rounded-lg transition-all duration-300"
              aria-label={social.label}
            >
              <svelte:component this={social.icon} size={18} />
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</nav>